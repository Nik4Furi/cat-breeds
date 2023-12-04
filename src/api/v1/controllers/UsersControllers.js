//----------------- Initalzing or requiring the modals here
const fs = require('fs');

//------------- Creating the conrtollers to controll this
function UsersControllers() {
    return {

        //---------------Function to get breed data,into text file
        async Breeds(req, res) {
            try {

                let { country } = req.query;

                country = country.toLowerCase();
                country = country.charAt(0).toUpperCase() + country.slice(1);

                const response = await fetch('https://catfact.ninja/breeds');
                const data = await response.json();

                let content = data;
                const obj = data.data;

                let temp = {}

                if (country) {
                    for (let i = 0; i < obj.length; i++) {
                        let ele = obj[i];
                        if (ele.country == country) {
                            temp = ele;
                            break;
                        }
                    }
                }

                if (temp != null || temp != undefined || !temp)
                    content = temp;

                if (!content) {
                    content = {
                        message: `No breed is available through ${country} that country`
                    }
                }

                fs.writeFile('breeds.txt', JSON.stringify(content, null, 2), (err) => {
                    // console.log('error during download', err)
                    if (err) throw err;
                    console.log('Data written to file');
                    res.download('breeds.txt');
                });



                //  return res.status(200).json({ success: true, msg: 'Successfully storing the data into file' })


            } catch (error) {
                return res.status(500).json({ success: false, msg: error })
            }
        },

        async All(req, res) {
            try {


                const response = await fetch('https://catfact.ninja/breeds');
                const data = await response.json();


                fs.writeFile('output.txt', JSON.stringify(data, null, 2), (err) => {
                    // console.log('error during download', err)
                    if (err) throw err;
                    console.log('Data written to file');
                    res.download('output.txt');
                });

            } catch (error) {
                return res.status(500).json({ success: false, msg: error })
            }
        },

        //API to posting a payload in localhost, using POST '/api/payload'
        async Payload(req, res) {
            try {

                const { payload } = req.body;

                if (!payload) return res.status(404).json({ success: false, msg: "Payload is required" })

                const len = countWords(payload);

                if (len < 8) return res.status(409).json({ success: false, msg: "Payload length must be 8 words long" })

                return res.status(200).json({ success: true, msg: 'Successfully adding a payload' });

            } catch (error) {
                return res.status(500).json({ success: false, msg: error })
            }
        }
    }
}

//-------------Function to find the count of words
function countWords(str) {
    return str.split(' ').filter(function (word) { return word !== ''; }).length;
}

module.exports = UsersControllers;