/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

const {StyleSheet} = require('aphrodite')
const globalStyles = require('./global')
const {theme} = require('./theme')

const styles = StyleSheet.create({
  formControl: {
    background: '#fff',
    border: `solid 1px ${globalStyles.color.black20}`,
    borderRadius: globalStyles.radius.borderRadius,
    boxShadow: `inset 0 1px 1px ${globalStyles.color.black10}`,
    boxSizing: 'border-box',
    display: 'block',
    color: globalStyles.color.darkGray,
    fontSize: globalStyles.spacing.textAreaFontSize,
    height: '2.25em',
    outline: 'none',
    padding: '0.4em',
    width: '100%'
  },

  // Textbox -- copied from textbox.js
  textbox: {
    boxSizing: 'border-box',
    width: 'auto'
  },
  textbox__outlineable: {
    ':focus': {
      outlineColor: globalStyles.color.statsBlue,
      outlineOffset: '-4px',
      outlineStyle: 'solid',
      outlineWidth: '1px'
    }
  },
  textbox__isSettings: {
    width: '280px'
  },

  // TextArea -- copied from textbox.js
  textArea: {
    padding: '5px'
  },
  textArea__isDefault: {
    fontSize: globalStyles.spacing.textAreaFontSize
  },

  // Dialogs
  flyoutDialog: {
    background: globalStyles.color.toolbarBackground,
    borderRadius: globalStyles.radius.borderRadius,
    boxShadow: globalStyles.shadow.flyoutDialogBoxShadow,
    color: '#000',
    fontSize: '13px',
    // Issue #7949
    padding: `${globalStyles.spacing.dialogInsideMargin} 30px`,
    position: 'absolute',
    top: globalStyles.spacing.dialogTopOffset,
    // Issue #7930
    boxSizing: 'border-box',
    maxWidth: '600px',
    maxHeight: `calc(80vh - ${globalStyles.spacing.downloadsBarHeight})`
  },

  // itemList.less
  listItem: {
    cursor: 'default',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    padding: '8px 12px',
    userSelect: 'none',

    ':hover': {
      backgroundColor: globalStyles.color.lightGray
    }
  },
  aboutListItem: {
    display: 'flex'
  },
  aboutItemSeparator: {
    color: '#aaa',
    padding: '0 4px'
  },
  aboutItemTitle: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  aboutItemLocation: {
    color: '#aaa',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },

  // margin/padding
  noMargin: {
    margin: 0
  },
  noMarginTop: {
    marginTop: 0
  },
  noMarginBottom: {
    marginBottom: 0
  },
  noMarginLeft: {
    marginLeft: 0
  },
  noMarginRight: {
    marginRight: 0
  },
  noPadding: {
    padding: 0
  },
  noPaddingTop: {
    paddingTop: 0
  },
  noPaddingBottom: {
    paddingBottom: 0
  },
  noPaddingLeft: {
    paddingLeft: 0
  },
  noPaddingRight: {
    paddingRight: 0
  },
  requiresRestart: {
    fontStyle: 'italic',
    marginBottom: '2em'
  },

  // User select
  userSelect: {
    cursor: 'text',

    // #11641
    userSelect: 'text'
  },
  userSelectNone: {
    userSelect: 'none',
    cursor: 'default'
  },

  // notificationBar
  notificationBar: {
    '-webkit-app-region': 'no-drag',
    display: 'inline-block',
    boxSizing: 'border-box',
    width: '100%',
    cursor: 'default',
    userSelect: 'none',
    // if there's more than one notification per site,
    // ensure border is on the last only
    ':last-child': {
      borderBottom: `5px solid ${globalStyles.color.notificationBottomBorderColor}`
    },
    // last-child will always be orange, but others can be gray
    ':not(:last-child)': {
      borderBottom: `1px solid ${theme.tabsToolbar.border.color}`
    }
  },
  notificationBar__notificationItem: {
    backgroundColor: globalStyles.color.notificationItemColor,
    boxSizing: 'border-box',
    boxShadow: `0 -1px 0 ${theme.tabsToolbar.border.color}`,
    lineHeight: '24px',
    padding: '8px 20px'
  },
  notificationBar__greetingStyle: {
    backgroundColor: '#fff',
    padding: '8px 20px',
    width: '100%'
  },
  notificationItem__greeting: {
    color: globalStyles.color.braveOrange,
    fontSize: '16px',
    margin: 'auto 10px auto 0',
    userSelect: 'none'
  },
  notificationItem__message: {
    color: '#000',
    fontSize: '15px',
    margin: 'auto 6px auto 0',
    userSelect: 'none',
    cursor: 'default'
  },
  notificationItem__secondaryMessage: {
    color: '#888',
    fontSize: '14px',
    padding: '0',
    margin: 'auto 0 auto 10px'
  },

  siteDetailsPageContent: {
    /* TODO: refactor siteDetails.less */
    marginTop: '0 !important',
    marginLeft: globalStyles.spacing.aboutPageSectionPadding
  },

  isCommonForm: {
    fontSize: globalStyles.fontSize.flyoutDialog,
    width: '100%'
  },

  linkText: {
    display: 'inline-block',
    textDecoration: 'underline',
    color: globalStyles.color.braveOrange,
    cursor: 'pointer',
    margin: '0',

    ':hover': {
      color: '#000'
    }
  },

  linkText_small: {
    fontSize: '14px'
  }
})

module.exports = styles
