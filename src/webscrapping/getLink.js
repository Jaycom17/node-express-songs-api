import puppeteer from "puppeteer";

//Base url to search a youtube video
const BASE_URL = "https://www.youtube.com/results?search_query=";

//Youtube url
const YOUTUBE_URL = "https://www.youtube.com";

/**
 * Fix the url to search a song
 * @param {*} nameSong Name of the song
 * @returns Fixed url
 */
function fixUrl(nameSong) {
  return `${BASE_URL}${nameSong.split(" ").join("+")}`;
}

/**
 * Make a request to get the link of a song
 * @param {*} nameSong Name of the song
 * @returns Link of the song and image
 */
export const getLink = async (nameSong) => {
  //launch the browser
  const browser = await puppeteer.launch({
    headless: true,
  });
  const page = await browser.newPage();

  //Go to the url where the video is
  await page.goto(fixUrl(nameSong));

  //search for the video and image
  const result = await page.evaluate(() => {
    let info = {};
    const element = document.querySelector(
      'ytd-thumbnail[class="style-scope ytd-video-renderer"] a[class="yt-simple-endpoint inline-block style-scope ytd-thumbnail"]'
    );
    info.link = element.getAttribute("href");
    info.image = element.querySelector("img").getAttribute("src");
    return info;
  });

  //close the browser
  await browser.close();

  //add the youtube url to the link
  result.link = `${YOUTUBE_URL}${result.link}`;

  //return the result
  return result;
};
