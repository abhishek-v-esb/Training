const required = [
  "firstname",
  "lastname",
  "designation",
  "address1",
  "address2",
  "email",
  "city",
  "state",
  "phone",
  "zipcode",
  "ssc",
  "passingyearssc",
  "passingpercentagessc",
  "hsc",
  "passingyearhsc",
  "passingpercentagehsc",
  "bachelor",
  "passingyearbachelor",
  "passingpercentagebachelor",
  "master",
  "passingyearmaster",
  "passingpercentagemaster",
  "company1",
  "company1designation",
  "company1from",
  "company1to",
  "company2",
  "company2designation",
  "company2from",
  "company2to",
  "ref1",
  "ref1relation",
  "ref1contact",
  "ref2",
  "ref2relation",
  "ref2contact",
  "prefLocation",
  "currCTC",
  "expCTC",
  "department",
];

const isNum = [
  "phone",
  "zipcode",
  "passingpercentagessc",
  "passingpercentagehsc",
  "passingpercentagebachelor",
  "passingpercentagemaster",
  "ref1contact",
  "ref2contact",
  "currCTC",
  "expCTC",
];
const isStr = [
  "firstname",
  "lastname",
  "designation",
  "city",
  "state",
  "ssc",
  "hsc",
  "bachelor",
  "master",
  "company1",
  "company1designation",
  "company2",
  "company2designation",
  "ref1",
  "ref1relation",
  "ref2",
  "ref2relation",
  "prefLocation",
  "department",
];
const email = ["email"];

function validate() {
  const tempMerge = merge(required, isNum);
  const finMerge = merge(tempMerge, isStr);

  for (check of finMerge) {
    const element = document.getElementById(check);
    const value = element.value.trim();
    const errorspan = document.getElementById(`${check}_error`);
    if (required.includes(check) && value == "") {
      errorspan.innerHTML = "please enter the field";
      // errorspan.focus();
      return false;
    }
    if (isNum.includes(check) && !value.match(/^[0-9]+$/)) {
      errorspan.innerHTML = "enter a number";
      return false;
    }
    if (isStr.includes(check) && !value.match(/^[A-Za-z]+$/)) {
      errorspan.innerHTML = "enter a string";
      return false;
    }
    if (
      email.includes(check) &&
      !value.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/)
    ) {
      errorspan.innerHTML = "enter proper email";
      return false;
    }
    errorspan.innerHTML = "";
  }

  return true;
}

function checkLang(checkbox) {
  const type = ["Read", "Write", "Speak"];

  type.forEach((element) => {
    if (checkbox.checked == true) {
      document
        .getElementById(`${checkbox.id}${element}`)
        .removeAttribute("disabled");
    } else {
      document
        .getElementById(`${checkbox.id}${element}`)
        .setAttribute("disabled", "disabled");
    }
  });
}

function checkTech(checkbox) {
  const type = ["Beginner", "Mediator", "Expert"];

  type.forEach((element) => {
    if (checkbox.checked == true) {
      document
        .getElementById(`${checkbox.id}${element}`)
        .removeAttribute("disabled");
    } else {
      document
        .getElementById(`${checkbox.id}${element}`)
        .setAttribute("disabled", "disabled");
    }
  });
}
function enableComp(input) {
  const comp = ["designation", "from", "to"];
  comp.forEach((element) => {
    if (input.value) {
      document
        .getElementById(`${input.id}${element}`)
        .removeAttribute("disabled");
    } else {
      document
        .getElementById(`${input.id}${element}`)
        .setAttribute("disabled", "disabled");
    }
  });
}
function enableRef(input) {
  const ref = ["contact", "relation"];
  ref.forEach((element) => {
    if (input.value) {
      document
        .getElementById(`${input.id}${element}`)
        .removeAttribute("disabled");
    } else {
      document
        .getElementById(`${input.id}${element}`)
        .setAttribute("disabled", "disabled");
    }
  });
}

function addCompRow() {
  const tr = document.createElement("tr");
  const body = document.querySelector("#compTable tbody");
  const id = parseInt(body.lastElementChild.id);
  console.log(id);
  tr.id = id + 1;
  tr.innerHTML = `<td><label for="company">Company:</label></td>
  <td>
    <input
      type="text"
      name="company"
      id="company${id + 1}"
      onkeyup="enableComp(this)"
    />
    <span class="error"><p id="company${id + 1}_error"></p></span>
  </td>
  <td><label for="companydesignation">Designation:</label></td>
  <td>
    <input
      type="text"
      name="companydesignation"
      id="company${id + 1}designation"
      disabled
    />
    <span class="error"
      ><p id="company${id + 1}designation_error"></p
    ></span>
  </td>
  <td><label for="companyfrom">From:</label></td>

  <td>
    <input
      type="date"
      name="companyfrom"
      id="company${id + 1}from"
      placeholder="dd-mm-yyyy"
      disabled
    />
    <span class="error"><p id="company${id + 1}from_error"></p></span>
  </td>
  <td><label for="companyto">To:</label></td>
  <td>
    <input
      type="date"
      name="companyto"
      id="company${id + 1}to"
      placeholder="dd-mm-yyyy"
      disabled
    />
    <span class="error"><p id="company${id + 1}to_error"></p></span>
  </td>`;

  body.appendChild(tr);
}

function removeCompRow() {
  const element = document.querySelector("#compTable tbody").lastElementChild;
  if (element.id > 1) {
    element.remove();
  }
}

function addRefRow() {
  const tr = document.createElement("tr");
  const body = document.querySelector("#refTable tbody");
  const id = parseInt(body.lastElementChild.id.slice(-1));
  console.log(id);
  const newId = `ref${id + 1}`;
  tr.id = `ref${id + 1}`;
  tr.innerHTML = `<td><label for="ref">Name:</label></td>
  <td>
    <input
      type="text"
      name="ref"
      id="${newId}"
      onkeyup="enableRef(this)"
    />
    <span class="error"><p id="${newId}_error"></p></span>
  </td>

  <td><label for="refcontact">Contact:</label></td>
  <td>
    <input
      type="text"
      name="refcontact"
      id="${newId}contact"
      disabled
    />
    <span class="error"><p id="${newId}contact_error"></p></span>
  </td>
  <td><label for="refrelation">Relation:</label></td>
  <td>
    <input
      type="text"
      name="refrelation"
      id="${newId}relation"
      disabled
    />
    <span class="error"><p id="${newId}relation_error"></p></span>
  </td>`;

  body.appendChild(tr);
}

function removeRefRow() {
  const element = document.querySelector("#refTable tbody").lastElementChild;
  const id = parseInt(element.id.slice(-1));
  if (id > 1) {
    element.remove();
  }
}
// function enableEdu(input) {
//   const edu = ["passingyear", "passingpercentage"];
//   edu.forEach((element) => {
//     if (input.value) {
//       document
//         .getElementById(`${element}${input.id}`)
//         .removeAttribute("disabled");
//     } else {
//       document
//         .getElementById(`${element}${input.id}`)
//         .setAttribute("disabled", "disabled");
//     }
//   });
// }
const merge = (a, b, predicate = (a, b) => a === b) => {
  const c = [...a];
  b.forEach((bItem) =>
    c.some((cItem) => predicate(bItem, cItem)) ? null : c.push(bItem)
  );
  return c;
};

function activateBtn() {
  const currentUrl = window.location.href;
  if (currentUrl.includes("update")) {
    document.getElementById("submit").disabled = true;
    document.getElementById("update").disabled = false;
  } else {
    document.getElementById("submit").disabled = false;
    document.getElementById("update").disabled = true;
  }
}
