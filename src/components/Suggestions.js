import React, { useState } from "react";
import * as ToolsAPI from "../util/ToolsAPI";
import { Button, Modal } from "react-bootstrap";

export default  function Suggestions(props) {
  const { link } = props;
  const [show, setShow] = useState(false);
  const toolsList = props.data.filter(i => i.link !== link);

  const handleDelete = i => {
    ToolsAPI.removeTool(i);
  };

  const options = toolsList.map(i => (
    <li key={i.id}>
      <a href={i.link}>TITLE: {i.title}</a>
      <p>DESCRIPTION: {i.description}</p>
      <p>TAGS: {`#${i.tags}`}</p>
      <Button className="remove" variant="light" onClick={() => setShow(true)}>
        <strong>X</strong> remove
      </Button>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            <strong>X</strong> remove
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to remove hotel?</Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={() => setShow(false)}>
            Cancel
          </Button>
          <Button variant="light" onClick={() => handleDelete(i)}>
            Yes, remove
          </Button>
        </Modal.Footer>
      </Modal>
    </li>
  ));
  return <ul> {options} </ul>;
};
