const express = require("express");
const cheerio = require("cheerio")
const request = require("request")
const websiteDb = require("../model/websiteNameModel")
const homeRouter = express.Router()
//------------router to add items
homeRouter.post("/", (req, res) => {
    //---------get data from domain name----------
    request(req.body.add, function (error, response, html) {
        if (!error && response.statusCode == 200) {
  //----------------use cheerio module to get each items in web page---------
            var $ = cheerio.load(html);
               // Get text 
            // console.log($.text());
   //----------------finding and couting each word in webpage----------
            var text = $.text().split(' ');
            var wordCount = 0;
            for (var i = 0; i < text.length; i++) {
                if (text[i] !== ' ') {
                    wordCount++;
                }
            }
//-----------finding image link present in the web page----------------
            var images = $('img').attr("src")
            var videos = $('video')
            console.log("images are " + images)
//---------------finding the back links present in webpage------------
            // const links = $('a').each(function () {
            //     var url = $(this).attr("href");
            //     console.log("url links" + url)
            // });
            console.log("word count is " + wordCount);
            console.log(req.body.websiteName);
            const items = {
                websiteName: req.body.add,
                wordCount: wordCount,
                favourite: false,
                // back_links: links,
                imageLink: images,
            }
//------------------save each items in db--------------------------
            const websiteModel = websiteDb(items)
            websiteModel.save().then((details) => {
                console.log("data is " + details);

            })
        }
    });
})
//--------------------router to show the whole items from db-----------------
homeRouter.get("/view", (req, res) => {
    websiteDb.find().then((dataa) => {
        console.log("back end dataaa  :" + dataa);
        res.status(200).json({ Dataa: dataa })
    })
})
//------------------------router to delete an item from db-------------------
homeRouter.delete("/:id1", async (req, res) => {
    const id = req.params.id1;
    await websiteDb.findByIdAndRemove(id).exec();
    res.send("deleted")
})
//-----------------------router to update that to add webpage in favourites-------------
homeRouter.put("/update/:id1", async (req, res) => {
    const id = req.params.id1;
    const items = {
        websiteName: req.body.add,
        favourite: (!false),
    }
    await websiteDb.findByIdAndUpdate(id, items).then((data) => {
        console.log("updated " + data);
    })
    res.send("updated")
})
module.exports = homeRouter