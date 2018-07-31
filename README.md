# Kentico Cloud sample Vue.js single-page application
[![Build Status](https://api.travis-ci.org/Kentico/cloud-sample-app-vue.svg?branch=master)](https://travis-ci.org/Kentico/cloud-sample-app-vue)
[![Live Demo](https://img.shields.io/badge/live-demo-brightgreen.svg)](http://kentico-cloud-sample-app-vue.surge.sh)
[![Forums](https://img.shields.io/badge/chat-on%20forums-orange.svg)](https://forums.kenticocloud.com)
[![Analytics](https://ga-beacon.appspot.com/UA-69014260-4/Kentico/cloud-sample-app-vue?pixel)](https://github.com/igrigorik/ga-beacon)

This is a sample website written in JavaScript utilizing the Kentico Cloud Delivery API to manage and retrieve content. You can register your account for free at <https://app.kenticocloud.com>.

## Application setup

1. Install the latest version of NodeJS and npm. You can download both at <https://nodejs.org/en/download/>.
2. Clone the sample application repository.
3. Navigate to the root folder of the application in the command line.
4. Type `npm install` to install required npm packages.
5. Type `npm run serve` to start a development server.
6. The application opens in your browser at <http://localhost:8080>.

### Connecting to your sample project

At the first run of the app, you'll be presented with a configuration page. It will allow you to connect the app to your Kentico Cloud sample project or create a new one. You'll also be able to start a trial and convert to a free plan when the trial expires. 

Alternatively, you can connect your project manually as per the chapter below.

#### Connecting to your project manually

If you want to change the source Kentico Cloud project, follow these steps:

1. In Kentico Cloud, choose Project settings from the app menu.
2. Under Development, choose API keys.
3. Copy your Project ID and Preview API key.
4. Open the `src\Client.js` file in the sample application folder.
5. Find the `projectId` constant.
6. Change the values of the constants using the Project ID key you copied.
7. Save the file.

When you now run the application, it will retrieve content from your sample project.

## Previewing content from your project

To preview unpublished content in the sample application, follow these steps:

1. In Kentico Cloud, choose Project settings from the app menu.
2. Under Development, choose API keys.
3. Copy your Project ID and Preview API key.
4. Open the `src\Client.js` file in the sample application folder.
5. Find the `projectId` and `previewApiKey` constants.
6. Change the values of the constants using the Project ID and Preview API key you copied.
7. Save the file.

When you now run the application, you will see all project content including the unpublished version of content items.

## Content administration

1. Navigate to <https://app.kenticocloud.com> in your browser.
2. Sign in with your credentials.
3. Manage content in the content administration interface of your sample project.

You can learn more about content editing with Kentico Cloud in the [documentation](http://help.kenticocloud.com/).

## Content delivery

You can retrieve content either through the Kentico Cloud Delivery SDKs or the Kentico Cloud Delivery API:

* For published content, use `https://deliver.kenticocloud.com/PROJECT_ID/items`.
* For unpublished content, use `https://preview-deliver.kenticocloud.com/PROJECT_ID/items`.

For more info about the API, see the [API reference](https://developer.kenticocloud.com/reference).

You can find the Delivery and other SDKs at <https://github.com/Kentico>.

## Tracking visitors and their activity

By default, you can see sample visitor data in Kentico Cloud, even if you already feed the single-page application with your own content. Tracking real visitors needs to be set up separately and here's how to.

In single-page applications, you have to use custom activities to track visitor activity. This is how you set up tracking visits of About Us page:

1. In Kentico Cloud, choose Project settings from the app menu.
2. Under Development, choose API keys.
3. Copy your Project ID.
4. Open the `public\index.html` file in the sample application folder.
5. Find function call `ket('start', '');` and use your Project ID as its second parameter.
6. Save the file.

7. Go back to your Project settings in Kentico Cloud
8. Under Development, choose Activity tracking.
9. Create a new custom activity and copy its codename.
10. Open the `src\Utilities\ActivityLogging.js` file in the sample application folder.
11. Find function call `window.ket('action', '');` and use the codename you copied as its second parameter.
12. Save the file.

When you now run the application and visit the About Us page, you should be able to see your visit in Analytics of Kentico Cloud. You can also create a new dynamic segment of people who did the custom activity you created and see that the segment is not empty. It should contain you as an anonymous visitor. You can learn more about creating segments with Kentico Cloud in the [documentation](https://help.kenticocloud.com/contact-tracking-and-content-personalization/segments/creating-segments-of-your-visitors).

## Deployment

You can use, for example, [surge](http://surge.sh/) to deploy your app live. Check out the step-by-step guide on our [blog](https://kenticocloud.com/blog/3-steps-to-rapidly-deploy-headless-single-page-app).
