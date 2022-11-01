# Software Developer Resume/CV Builder

A React-based web app to create and manage your personal resume and export it in a pdf format. Firebase OAuth registration which unlocks more templates when you create an account.

## Usage

Link to the web app can be found at [dev-cv-builder.netlify.app](https://dev-cv-builder.netlify.app).

## Compatibility

App is created to take in space to properly display all inputted elements. Create for desktop use and a info message available once it detected a mobile-based device to warn for user experience.

## Navigation

In the landing page you will see an option to start your resume right away or create your account. All of the data will be stored regardless if you create one. All storage data is stored and managed from the LocalStorage.

![landingPage](/src/img/readme-img/landing.png)

If you choose to create your own account, you will be sent to do so using your own credentials or sign up wt Google account. If you do so, you will be able to choose from the templates available right away.

![signup](/src/img/readme-img/signup.png)

First-time users will get a small instructions created with react-toastify, refs and CSS styling to give a quick start guide and explanation how to navigate the app and create your resume.

![instructions](/src/img/readme-img/instructions.png)

## Functionality

The app has an accordion-style Control Panel from which you are 3 portions:

1. Sections - opening all the diffrent modal to input information for the modal which you want to use. Most sections options side menu with a show/hide option and well as renaming your field option.
2. Fonts - from here you can change your fonts with multiple diffrent choices ranging from serif to sans-serif, monospace, and cursive font types.
3. Design - adjustment in the color gamma of the title section can be done from here and is a useful tool to give more personal taste to your resume.

Each one of the section modals are directly displayed to the CVPreview section after the modal is completed. The preview is stylized so it give a aesthetically pleasant experince and a good-looking resume.
![cvPreview](/src/img/readme-img/cvpreview.png)

## Exporting

All of your data is safe and secure through the local storing and persisting of data. After you are done with your resume you simply click on download resume and export it. Make sure you click on "Safe as a pdf" in order to save it and print it later on, or print it right away id applicable.

## Contact

For suggestions and improvements, please contact me @kkanchev94@gmail.com

## License

The MIT License (MIT)

Copyright (c) 2022 Kamen Kanchev

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
