const {Configuration, OpenAIApi} = require('openai');
require('dotenv').config();

let {openAiKey} = process.env;

const configuration = new Configuration({
     apiKey:openAiKey,
});

const openai = new OpenAIApi(configuration);


const getImage = async (req, res) => {
     try {
      const { prompt } = req.body;
      const aiResponse = await openai.createImage({
         prompt,
         n: 1,
         size: '1024x1024',
        response_format: 'b64_json',
       });

       const image = aiResponse.data.data[0].b64_json;
       res.status(200).json({ photo: image });
     } catch (error) {
       res.status(500).send(error?.response.data.error.message || 'Something went wrong');
     }
 };



module.exports = {
     getImage
}
