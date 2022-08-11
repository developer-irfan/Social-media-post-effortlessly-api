const SocialPost = require('social-post-api');
const social = new SocialPost("CSHSEPH-QK94MKB-P27BP6W-VV2AA9P");

const getPostData = () => {
    return {
        post: "Engine Altan",
        media_urls:["https://1.bp.blogspot.com/-8fTa6upfN2o/XxhzQA03CsI/AAAAAAAAAqY/v7HcGHcf9dkdB89XKNwGWfe3596gjqSWACLcBGAsYHQ/s616/Engin_Altan.jpg"],
        platforms:["twitter", "facebook"]
    };
};

const run = async () => {
    const content = getPostData();
    const json = await social.post(content).catch(console.error);
    console.log(json);
}
run();