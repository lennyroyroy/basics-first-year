/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: 'User1',
    image: '/test-site/img/docusaurus.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const siteConfig = {
  title: 'The Basics: Your First Year in Tech' /* title for your website */,
  tagline: 'Meta Description',
  title_display:'The Basics',
  tagline_display: 'Your First Year in Tech',
  docsSideNavCollapsible: true,
  wrapPagesHTML: true,
  url: 'https://facebook.github.io' /* your website url */,
  baseUrl: '/test-site/' /* base url for your project */,
  projectName: 'test-site',
  headerLinks: [
    {doc: 'doc1', label: 'Slides'},
    {doc: 'doc2', label: 'Videos'},
    {doc: 'doc3', label: 'Challenges'},
    { blog: true, label: 'Blog' }
  ],
  users,
  /* path to images for header/footer */
  headerIcon: 'img/LC-white-full.png',
  footerIcon: 'img/LR-white@2x.png',
  favicon: 'img/favicon.ico',
  /* colors for website */
  colors: {
    primaryColor: '#e74c3c',
    secondaryColor: '#804D47',
  },
  /* custom fonts for website */
  /*fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },*/
  
  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Lennyroy Codes`,
  // gaTrackingId: 'UA-146614083-1',
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'monokai',
  },
    scrollToTop: true,
    scrollToTopOptions: {
    zIndex: 100,
  },


  scripts: ['https://buttons.github.io/buttons.js'],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: 'https://github.com/facebook/test-site',
  /* On page navigation for the current documentation page */
  // onPageNav: 'separate',
};

module.exports = siteConfig;
