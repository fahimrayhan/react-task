import React, { useState } from 'react';
import { Form, Modal } from 'react-bootstrap';

const FirstModal = (
  {
    modalState,
    data,
    isLoading,
    checkbox,
    setCheckbox,
    dispatch,
    handleModalShowOne,
    handleModalCloseOne,
    handleContactClick,
  },
  ref
) => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <Modal show={modalState.showModal1} size="lg" centered scrollable>
      <Modal.Header>
        <button
          className={`btn btn-lg modalBtnA`}
          type="button"
          onClick={(e) => handleModalShowOne(e)}
        >
          All Contacts
        </button>
        <button
          className={`btn btn-lg modalBtnB`}
          type="button"
          onClick={(e) => handleModalShowOne(e)}
        >
          US Contacts
        </button>
        <button
          className={`btn btn-lg modalBtnC`}
          type="button"
          onClick={() => handleModalCloseOne()}
        >
          Close
        </button>
      </Modal.Header>
      <Modal.Body>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search Contacts"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <table className="table table-striped ">
          <thead>
            <tr>
              <th scope="col">Phone</th>
              <th scope="col">Country</th>
            </tr>
          </thead>
          <tbody>
            {data
              ?.filter((item) => (checkbox === true ? item.id % 2 === 0 : item))
              .filter(
                (item) =>
                  item.phone.includes(searchQuery) ||
                  item.country.name.includes(searchQuery)
              )
              .map((item, index) => (
                <tr
                  key={`${item.id}-${index}`}
                  onClick={() => handleContactClick(item)}
                >
                  <td>{item?.phone}</td>
                  <td>{item?.country?.name}</td>
                </tr>
              ))}

            <tr key="0" ref={ref}>
              {isLoading && (
                <>
                  <td>Loading...</td>
                  <td>Loading...</td>
                </>
              )}
            </tr>
          </tbody>
        </table>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-start">
        <Form.Check
          type="checkbox"
          id="0"
          label="Show Even"
          value={checkbox}
          onChange={() => setCheckbox(!checkbox)}
        />
      </Modal.Footer>
    </Modal>
  );
};

const forwardedFirstModal = React.forwardRef(FirstModal)

export default forwardedFirstModal