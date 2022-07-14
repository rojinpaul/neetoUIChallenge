import React from "react";

import { Pane, Typography } from "neetoui";

import Form from "./Form";

import { NOTES_FORM_INITIAL_FORM_VALUES } from "../constants";

export default function NewNotePane({ saveNote, showPane, setShowPane }) {
  const onClose = () => setShowPane(false);

  return (
    <Pane isOpen={showPane} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Create a New Note
        </Typography>
      </Pane.Header>
      <Form
        onClose={onClose}
        saveNote={saveNote}
        note={NOTES_FORM_INITIAL_FORM_VALUES}
        isEdit={false}
      />
    </Pane>
  );
}
