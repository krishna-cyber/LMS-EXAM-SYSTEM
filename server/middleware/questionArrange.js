/** @format */
/** @format */

const JWT = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    const { titleText, titleDescription, option1, option2, option3, option4 } =
      req.body;
    console.log(req.body);

    // arrange question with its text, description and image
    const title = {
      titleText,
      titleDescription,
      image: req.files["questionImage"]
        ? req.files["questionImage"][0].path
        : null,
      audio: req.files["questionAudio"]
        ? req.files["questionAudio"][0].path
        : null,
    };

    // arrange the options with proper image and text in an array
    const options = [
      {
        optionText: option1,
        optionImage: req.files["option1Image"]
          ? req.files["option1Image"][0].path
          : null,
      },
      {
        optionText: option2,
        optionImage: req.files["option2Image"]
          ? req.files["option2Image"][0].path
          : null,
      },
      {
        optionText: option3,
        optionImage: req.files["option3Image"]
          ? req.files["option3Image"][0].path
          : null,
      },
      {
        optionText: option4,
        optionImage: req.files["option4Image"]
          ? req.files["option4Image"][0].path
          : null,
      },
    ];

    // arrange the question and options
    const question = {
      title,
      options,
    };
    console.log(question);
    req.body.question = question;
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      error,
      message: "Failed in Question Arrange Middleware",
    });
  }
};
