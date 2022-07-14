import React, { useState } from "react";

import { Formik, Form } from "formik";
import { Button, Pane } from "neetoui";
import { Input, Textarea, Select } from "neetoui/formik";

import notesApi from "apis/notes";

import { NOTES_FORM_VALIDATION_SCHEMA } from "../constants";

export default function NoteForm({ onClose, saveNote, note, isEdit }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async values => {
    try {
      if (isEdit) {
        await notesApi.update(note.id, values);
      } else {
        saveNote(values);
      }
      onClose();
    } catch (err) {
      logger.error(err);
    }
  };

  return (
    <Formik
      initialValues={note}
      onSubmit={handleSubmit}
      validateOnBlur={submitted}
      validateOnChange={submitted}
      validationSchema={NOTES_FORM_VALIDATION_SCHEMA}
    >
      {({ isSubmitting }) => (
        <Form className="w-full">
          <Pane.Body className="space-y-6">
            <Input
              label="Title"
              name="title"
              className="w-full flex-grow-0"
              required
            />
            <Textarea
              label="Description"
              name="description"
              className="w-full flex-grow-0"
              rows={1}
              required
            />
            <Select
              name="contact"
              placeholder="Select Contact"
              className="w-full"
              size="small"
              label="Select"
              strategy="fixed"
              options={[{ value: "Jacob Jones", label: "Jacob Jones" }]}
              required
            />
            <Select
              name="tag"
              placeholder="Select Tag"
              className="w-full"
              size="small"
              label="Select"
              strategy="fixed"
              options={[
                { value: "Getting Started", label: "Getting Started" },
                { value: "User Flow", label: "User Flow" },
                { value: "UX", label: "UX" },
                { value: "Bugs", label: "Bugs" },
                { value: "V2", label: "V2" },
              ]}
              required
            />
          </Pane.Body>
          <Pane.Footer>
            <Button
              type="submit"
              label={isEdit ? "Update" : "Save Changes"}
              size="large"
              style="primary"
              className="mr-3"
              disabled={isSubmitting}
              loading={isSubmitting}
              onClick={() => setSubmitted(true)}
            />
            <Button
              onClick={onClose}
              label="Cancel"
              size="large"
              style="text"
            />
          </Pane.Footer>
        </Form>
      )}
    </Formik>
  );
}
