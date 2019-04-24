import React, { useState } from "react";
import serializeForm from "form-serialize";
import * as ToolsAPI from "../util/ToolsAPI";
import { Button, Modal } from "react-bootstrap";

export default function AddTool() {
  const [show, setShow] = useState(false);

  const handleSumit = e => {
    e.preventDefault();
    const values = serializeForm(e.target, { hash: true });
    ToolsAPI.saveTool(values);
  };

  return (
    <div>
      <Button variant="light" className="add" onClick={() => setShow(true)}>
        + Add
      </Button>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>+ Add new tool</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <form onSubmit={handleSumit}>
            <div className="form-group">
              <label htmlFor="toolname">Tool Name</label>
              <input
                type="text"
                name="title"
                id="title"
                className="form-control"
                aria-describedby="toolName"
                placeholder="name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="toollink">Tool Link</label>
              <input
                type="text"
                name="link"
                id="link"
                className="form-control"
                aria-describedby="toolLink"
                placeholder="link"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="tooldescription">Tool description</label>
              <textarea
                rows="3"
                id="description"
                name="description"
                className="form-control"
                aria-describedby="toolDescription"
                placeholder="description"
                maxLength={300}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="toolgs">Tags</label>
              <input
                type="text"
                name="tags"
                id="tags"
                className="form-control"
                aria-describedby="toolTags"
                placeholder="tags"
                required
              />
            </div>
            <Button type="submit" variant="light" className="addtool">
              Add tool
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
