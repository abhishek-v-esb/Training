function validate(body) {
  //   console.log(body);
  //   console.log(Object.keys(body));
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
    "boardnamessc",
    "passingyearssc",
    "passingpercentagessc",
    "boardnamehsc",
    "passingyearhsc",
    "passingpercentagehsc",
    "universitybachelor",
    "passingyearbachelor",
    "passingpercentagebachelor",
    "universitymaster",
    "passingyearmaster",
    "passingpercentagemaster",
    "companyname1",
    "designation1",
    "from1",
    "to1",
    "companyname2",
    "designation2",
    "from2",
    "to2",
    "refname1",
    "refrelation1",
    "refname2",
    "refrelation2",
  ];

  const isNum = [
    "phone",
    "zipcode",
    "passingpercentagessc",
    "passingpercentagehsc",
    "passingpercentagebachelor",
    "passingpercentagemaster",
    "refcontact1",
    "refcontact2",
  ];
  const isStr = [
    "firstname",
    "lastname",
    "designation",
    "address1",
    "address2",
    "city",
    "state",
    "boardnamessc",
    "boardnamehsc",
    "universitybachelor",
    "universitymaster",
    "companyname1",
    "designation1",
    "companyname2",
    "designation2",
    "refname1",
    "refrelation1",
    "refname2",
    "refrelation2",
  ];
  const email = ["email"];
  //   const errHolder = [];
  verifyRequired();
  verified();
  function verified() {
    for (const [key, value] of Object.entries(body)) {
      //   errHolder.push(verifyRequired(key, value));
      //   errHolder.push(verifyNum(key, value));
      //   errHolder.push(verifyStr(key, value));
    }
    // console.log(errHolder);
  }

  function verifyRequired(key, value) {
    required.forEach((element) => {
      if (key == element) {
        if (value.trim() == "") {
          //   errHolder.push(key);
        }
      }
    });
  }
  function verifyNum(key, value) {
    let errKey = "";
    isNum.forEach((element) => {
      if (key == element) {
        if (!value.match(/^[0-9]+$/)) {
          return key;
        }
      }
    });
  }
  function verifyStr(key, value) {
    isStr.forEach((element) => {
      if (key == element) {
        if (!value.match(/^[A-Za-z]+$/)) {
          return `${key} is not a string`;
        }
      }
    });
  }
}

module.exports = { validate };
