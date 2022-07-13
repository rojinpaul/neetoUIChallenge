import React, { useState } from "react";

import { MenuVertical, Clock } from "@bigbinary/neeto-icons";
import { Typography, Dropdown, Avatar, Tag } from "neetoui";

import EditNotePane from "./Pane/Edit";

const Table = ({ notes = [], fetchNotes }) => {
  const [showEditNote, setShowEditNote] = useState(false);
  return (
    <>
      <div className="grid w-full gap-3">
        {notes.map(note => (
          <div className="box-border flex-col border-2 p-4" key={note.id}>
            <div className="flex">
              <div className="flex w-3/4">
                <Typography
                  component="h4"
                  style="h4"
                  weight="semibold"
                  fontFamily="SF Pro Text"
                >
                  {note.title}
                </Typography>
              </div>
              <div className="flex w-1/4 justify-end">
                <Dropdown
                  buttonProps={{
                    icon: MenuVertical,
                    style: "text",
                  }}
                  position="left-end"
                >
                  <li>Edit</li>
                  <li>Delete</li>
                </Dropdown>
              </div>
            </div>
            <Typography
              className="mb-4"
              style="body3"
              weight="normal"
              fontFamily="SF Pro Text"
            >
              {note.description}
            </Typography>
            <hr className="mx" />

            <div className="flex items-end p-2">
              <div className="w-4/5">
                <Tag label={note.tag} className=" font-normal" />
              </div>
              <div className="flex w-1/5 justify-end gap-1">
                <Clock size={24} />
                <Typography
                  style="body3"
                  weight="normal"
                  fontFamily="SF Pro Text"
                >
                  created 2 hours ago
                </Typography>
                <Avatar
                  onClick={function noRefCheck() {}}
                  size="small"
                  user={{
                    name: note.contact,
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <EditNotePane
        showPane={showEditNote}
        setShowPane={setShowEditNote}
        fetchNotes={fetchNotes}
      />
    </>
  );
};

export default Table;
