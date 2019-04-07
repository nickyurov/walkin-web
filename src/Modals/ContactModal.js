import React from 'react';

const sendEmail = e => {
  e.preventDefault();
  fetch('https://walkinapp-236920.appspot.com/mail', {
    method: 'POST',
    'Content-Type': 'JSON',
    body: JSON.stringify({
      to: 'yamikamisama@gmail.com',
      from: 'michaelangelodecarlo@gmail.com',
      subject: 'Apt from walkin',
      text: 'Text from walkin',
      html: 'Text from walkin'
    })
  });
};

const ContactModal = () => {
  return (
    <div
      className="modal fade"
      id="contact"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form>
            <div className="modal-body">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12 col-md-6">
                    <div className="form-group text-left">
                      <label
                        for="formGroupExampleInput"
                        className="bmd-label-floating"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput"
                      />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <div className="form-group text-left">
                      <label
                        for="formGroupExampleInput2"
                        className="bmd-label-floating"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput2"
                      />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <div className="form-group text-left">
                      <label
                        for="formGroupExampleInput2"
                        className="bmd-label-floating"
                      >
                        E-mail
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="formGroupExampleInput2"
                      />
                      <span className="bmd-help">
                        Well never share your email with anyone else.
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <div className="form-group text-left">
                      <label
                        for="formGroupExampleInput2"
                        className="bmd-label-floating"
                      >
                        Phone Number
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput2"
                      />
                      <span className="bmd-help">
                        Please dont add any special characters (-.*)
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12">
                    <div className="form-group text-left">
                      <label
                        for="formGroupExampleInput2"
                        className="bmd-label-floating"
                      >
                        Add your message here
                      </label>
                      <textarea
                        className="form-control"
                        id="formGroupExampleInput2"
                        rows="3"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <div className="col-sm-12 col-md-12">
                <span className="form-group">
                  <button
                    onClick={e => sendEmail(e)}
                    className="btn btn-outline-primary"
                  >
                    Send Message
                  </button>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
