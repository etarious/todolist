import React from 'react';
// import PropTypes from 'prop-types';
import classnames from "classnames";

function TextInputGroup ({ elem, id, label, name, value, placeholder, type, onChange, error }) {
  let disp;

  if (elem === "input") {
    disp = <div className="field">
              <label className="label" htmlFor={name}>{label}</label>
              <div className="control">
                  <input className={classnames("input", {"is-danger": error})} id={id} onChange={onChange} value={value} name={name} type={type} placeholder={placeholder} />
              </div>
              {error && <p className='help is-danger'>{error}</p>}
          </div>
  } else if (elem === "textarea") {
    disp = <div className="field">
              <label className="label" htmlFor={name}>Description</label>
              <div className="control">
                  <textarea className={classnames("input", {"is-danger": error})} id={id} onChange={onChange} value={value} style={{height: "150px"}} name={name} placeholder={placeholder} />
              </div>
              {error && <p className='help is-danger'>{error}</p>}
          </div>
  } else if (type === "submit") {
    disp = <div className='field'>
              <div className='control'>
                  <input type={type} className="button is-fullwidth button is-link is-success is-light has-text-succes" value={value} />
              </div>
          </div>
  }
  return (
    <>
        {disp}
    </>
  );
};

// TextInputGroup().PropTypes = {
//     id: PropTypes.string.isRequired,
//     label: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     placeholder: PropTypes.string.isRequired,
//     value: PropTypes.string.isRequired,
//     type: PropTypes.string.isRequired,
//     onChange: PropTypes.func.isRequired
// }

TextInputGroup.defaultProps = {
    type: "text"
}

export default TextInputGroup;