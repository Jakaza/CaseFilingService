
export function emailTemplateRegistration( userCredential){
  return `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
 <head>
  <meta charset="UTF-8">
  <meta content="width=device-width, initial-scale=1" name="viewport">
  <meta name="x-apple-disable-message-reformatting">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta content="telephone=no" name="format-detection">
  <title>Welcome to the SAP System – Your Login Details</title><!--[if (mso 16)]>
    <style type="text/css">
    a {text-decoration: none;}
    </style>
    <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
<noscript>
         <xml>
           <o:OfficeDocumentSettings>
           <o:AllowPNG></o:AllowPNG>
           <o:PixelsPerInch>96</o:PixelsPerInch>
           </o:OfficeDocumentSettings>
         </xml>
      </noscript>
<![endif]--><!--[if mso]><xml>
    <w:WordDocument xmlns:w="urn:schemas-microsoft-com:office:word">
      <w:DontUseAdvancedTypographyReadingMail/>
    </w:WordDocument>
    </xml><![endif]-->
  <style type="text/css">
.rollover:hover .rollover-first {
  max-height:0px!important;
  display:none!important;
}
.rollover:hover .rollover-second {
  max-height:none!important;
  display:block!important;
}
.rollover span {
  font-size:0px;
}
u + .body img ~ div div {
  display:none;
}
#outlook a {
  padding:0;
}
span.MsoHyperlink,
span.MsoHyperlinkFollowed {
  color:inherit;
  mso-style-priority:99;
}
a.es-button {
  mso-style-priority:100!important;
  text-decoration:none!important;
}
a[x-apple-data-detectors],
#MessageViewBody a {
  color:inherit!important;
  text-decoration:none!important;
  font-size:inherit!important;
  font-family:inherit!important;
  font-weight:inherit!important;
  line-height:inherit!important;
}
.es-desk-hidden {
  display:none;
  float:left;
  overflow:hidden;
  width:0;
  max-height:0;
  line-height:0;
  mso-hide:all;
}
@media only screen and (max-width:600px) {.es-p-default { } *[class="gmail-fix"] { display:none!important } p, a { line-height:150%!important } h1, h1 a { line-height:120%!important } h2, h2 a { line-height:120%!important } h3, h3 a { line-height:120%!important } h4, h4 a { line-height:120%!important } h5, h5 a { line-height:120%!important } h6, h6 a { line-height:120%!important } .es-header-body p { } .es-content-body p { } .es-footer-body p { } .es-infoblock p { } h1 { font-size:36px!important; text-align:left } h2 { font-size:26px!important; text-align:left } h3 { font-size:20px!important; text-align:left } h4 { font-size:24px!important; text-align:left } h5 { font-size:20px!important; text-align:left } h6 { font-size:16px!important; text-align:left } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:36px!important } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:26px!important } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important } .es-header-body h4 a, .es-content-body h4 a, .es-footer-body h4 a { font-size:24px!important } .es-header-body h5 a, .es-content-body h5 a, .es-footer-body h5 a { font-size:20px!important } .es-header-body h6 a, .es-content-body h6 a, .es-footer-body h6 a { font-size:16px!important } .es-menu td a { font-size:12px!important } .es-header-body p, .es-header-body a { font-size:14px!important } .es-content-body p, .es-content-body a { font-size:14px!important } .es-footer-body p, .es-footer-body a { font-size:14px!important } .es-infoblock p, .es-infoblock a { font-size:12px!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3, .es-m-txt-c h4, .es-m-txt-c h5, .es-m-txt-c h6 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3, .es-m-txt-r h4, .es-m-txt-r h5, .es-m-txt-r h6 { text-align:right!important } .es-m-txt-j, .es-m-txt-j h1, .es-m-txt-j h2, .es-m-txt-j h3, .es-m-txt-j h4, .es-m-txt-j h5, .es-m-txt-j h6 { text-align:justify!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3, .es-m-txt-l h4, .es-m-txt-l h5, .es-m-txt-l h6 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-m-txt-r .rollover:hover .rollover-second, .es-m-txt-c .rollover:hover .rollover-second, .es-m-txt-l .rollover:hover .rollover-second { display:inline!important } .es-m-txt-r .rollover span, .es-m-txt-c .rollover span, .es-m-txt-l .rollover span { line-height:0!important; font-size:0!important; display:block } .es-spacer { display:inline-table } a.es-button, button.es-button { font-size:20px!important; padding:10px 20px 10px 20px!important; line-height:120%!important } a.es-button, button.es-button, .es-button-border { display:inline-block!important } .es-m-fw, .es-m-fw.es-fw, .es-m-fw .es-button { display:block!important } .es-m-il, .es-m-il .es-button, .es-social, .es-social td, .es-menu { display:inline-block!important } .es-adaptive table, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .adapt-img { width:100%!important; height:auto!important } .es-mobile-hidden, .es-hidden { display:none!important } .es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } .h-auto { height:auto!important } }
@media screen and (max-width:384px) {.mail-message-content { width:414px!important } }
</style>
 </head>
 <body class="body" style="width:100%;height:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
  <div dir="ltr" class="es-wrapper-color" lang="en" style="background-color:#FAFAFA"><!--[if gte mso 9]>
			<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
				<v:fill type="tile" color="#fafafa"></v:fill>
			</v:background>
		<![endif]-->
   <table width="100%" cellspacing="0" cellpadding="0" class="es-wrapper" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#FAFAFA">
     <tr>
      <td valign="top" style="padding:0;Margin:0">
       <table cellspacing="0" cellpadding="0" align="center" class="es-content" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
         <tr>
          <td align="center" style="padding:0;Margin:0">
           <table cellspacing="0" cellpadding="0" align="center" class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" role="none">
             <tr>
              <td align="left" style="Margin:0;padding-top:20px;padding-right:20px;padding-bottom:5px;padding-left:20px">
               <table width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                 <tr>
                  <td valign="top" align="center" style="padding:0;Margin:0;width:560px">
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="right" style="padding:0;Margin:0"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#666666;font-size:14px">2025</p></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table></td>
         </tr>
       </table>
       <table cellspacing="0" cellpadding="0" align="center" class="es-content" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
         <tr>
          <td align="center" style="padding:0;Margin:0">
           <table cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" class="es-content-body" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
             <tr>
              <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-right:20px;padding-left:20px">
               <table width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                 <tr>
                  <td valign="top" align="center" style="padding:0;Margin:0;width:560px">
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="left" style="padding:0;Margin:0;padding-top:5px;padding-bottom:10px"><h3 class="es-m-txt-l" style="Margin:0;font-family:arial, 'helvetica neue', helvetica, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:20px;font-style:normal;font-weight:bold;line-height:24px;color:#333333">Dear ${userCredential.firstname},</h3></td>
                     </tr>
                     <tr>
                      <td align="left" style="padding:0;Margin:0;padding-top:5px;padding-bottom:10px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">Welcome to the team! You have been successfully added to the SAP system. Below are your login details:</p>
                       <ul style="font-family:arial, 'helvetica neue', helvetica, sans-serif;padding:0px 0px 0px 40px;margin-top:15px;margin-bottom:15px">
                        <li style="color:#333333;margin:0px 0px 15px;font-size:14px"><strong>Username:</strong> ${userCredential.email}</li>
                        <li style="color:#333333;margin:0px 0px 15px;font-size:14px"><strong>Temporary Password:</strong> ${userCredential.pass}</li>
                       </ul><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">To access the system, please log in at [SAP System URL] and change your password upon first login for security purposes.</p><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">If you have any questions or need assistance, feel free to reach out to [Support Contact/IT Department].</p><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">We’re glad to have you on board and look forward to working with you!</p><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px"><br></p><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">Best regards</p><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">SAP Support</p></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table></td>
         </tr>
       </table>
       <table cellspacing="0" cellpadding="0" align="center" class="es-content" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
         <tr>
          <td align="center" style="padding:0;Margin:0">
           <table cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" class="es-content-body" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
             <tr>
              <td align="left" style="padding:20px;Margin:0"><!--[if mso]><table style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:296px" valign="top"><![endif]-->
               <table cellspacing="0" cellpadding="0" align="left" class="es-left" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                 <tr>
                  <td align="left" style="padding:0;Margin:0;width:276px">
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="left" class="es-m-txt-l" style="padding:0;Margin:0;font-size:0px"><img src="https://fueeqgj.stripocdn.email/content/guids/CABINET_5855bdf78ca537e4d15709a026af93a6/images/89501626684388018.png" alt="" width="186" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></td>
                     </tr>
                   </table></td>
                  <td class="es-hidden" style="padding:0;Margin:0;width:20px"></td>
                 </tr>
               </table><!--[if mso]></td><td style="width:96px" valign="top"><![endif]-->
               <table cellspacing="0" cellpadding="0" align="left" class="es-left" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                 <tr>
                  <td align="left" style="padding:0;Margin:0;width:96px">
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="right" class="es-m-txt-c" style="padding:0;Margin:0;padding-bottom:5px;padding-top:5px;font-size:0px"><img src="https://fueeqgj.stripocdn.email/content/guids/CABINET_1980659766642eb2d49de597c9357afc93a15e156b53c15b6a1dfc81a83bef46/images/saps.png" alt="" width="96" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></td>
                     </tr>
                   </table></td>
                 </tr>
               </table><!--[if mso]></td><td style="width:20px"></td><td style="width:148px" valign="top"><![endif]-->
               <table cellspacing="0" cellpadding="0" align="right" class="es-right" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                 <tr>
                  <td align="left" style="padding:0;Margin:0;width:148px">
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="left" style="padding:0;Margin:0"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">Tel: +27 (0) 12 393 1000 <br>SAPS Head OfficePretoria <br>0001</p></td>
                     </tr>
                     <tr>
                      <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;padding-bottom:5px;padding-top:5px;font-size:0">
                       <table cellspacing="0" cellpadding="0" class="es-table-not-adapt es-social" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr>
                          <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px"><img title="Facebook" src="https://fueeqgj.stripocdn.email/content/assets/img/social-icons/logo-black/facebook-logo-black.png" alt="Fb" width="24" height="24" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></td>
                          <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px"><img title="X" src="https://fueeqgj.stripocdn.email/content/assets/img/social-icons/logo-black/x-logo-black.png" alt="X" width="24" height="24" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></td>
                          <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px"><img title="Instagram" src="https://fueeqgj.stripocdn.email/content/assets/img/social-icons/logo-black/instagram-logo-black.png" alt="Inst" width="24" height="24" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></td>
                          <td valign="top" align="center" style="padding:0;Margin:0"><img title="Youtube" src="https://fueeqgj.stripocdn.email/content/assets/img/social-icons/logo-black/youtube-logo-black.png" alt="Yt" width="24" height="24" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
               </table><!--[if mso]></td></tr></table><![endif]--></td>
             </tr>
           </table></td>
         </tr>
       </table></td>
     </tr>
   </table>
  </div>
 </body>
</html>
  
  `
}

export function emailTemplateCaseAssignAlert( caseDetails){
  return `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
 <head>
  <meta charset="UTF-8">
  <meta content="width=device-width, initial-scale=1" name="viewport">
  <meta name="x-apple-disable-message-reformatting">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta content="telephone=no" name="format-detection">
  <title>Welcome to the SAP System – Your Login Details</title><!--[if (mso 16)]>
    <style type="text/css">
    a {text-decoration: none;}
    </style>
    <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
<noscript>
         <xml>
           <o:OfficeDocumentSettings>
           <o:AllowPNG></o:AllowPNG>
           <o:PixelsPerInch>96</o:PixelsPerInch>
           </o:OfficeDocumentSettings>
         </xml>
      </noscript>
<![endif]--><!--[if mso]><xml>
    <w:WordDocument xmlns:w="urn:schemas-microsoft-com:office:word">
      <w:DontUseAdvancedTypographyReadingMail/>
    </w:WordDocument>
    </xml><![endif]-->
  <style type="text/css">
.rollover:hover .rollover-first {
  max-height:0px!important;
  display:none!important;
}
.rollover:hover .rollover-second {
  max-height:none!important;
  display:block!important;
}
.rollover span {
  font-size:0px;
}
u + .body img ~ div div {
  display:none;
}
#outlook a {
  padding:0;
}
span.MsoHyperlink,
span.MsoHyperlinkFollowed {
  color:inherit;
  mso-style-priority:99;
}
a.es-button {
  mso-style-priority:100!important;
  text-decoration:none!important;
}
a[x-apple-data-detectors],
#MessageViewBody a {
  color:inherit!important;
  text-decoration:none!important;
  font-size:inherit!important;
  font-family:inherit!important;
  font-weight:inherit!important;
  line-height:inherit!important;
}
.es-desk-hidden {
  display:none;
  float:left;
  overflow:hidden;
  width:0;
  max-height:0;
  line-height:0;
  mso-hide:all;
}
@media only screen and (max-width:600px) {.es-p-default { } *[class="gmail-fix"] { display:none!important } p, a { line-height:150%!important } h1, h1 a { line-height:120%!important } h2, h2 a { line-height:120%!important } h3, h3 a { line-height:120%!important } h4, h4 a { line-height:120%!important } h5, h5 a { line-height:120%!important } h6, h6 a { line-height:120%!important } .es-header-body p { } .es-content-body p { } .es-footer-body p { } .es-infoblock p { } h1 { font-size:36px!important; text-align:left } h2 { font-size:26px!important; text-align:left } h3 { font-size:20px!important; text-align:left } h4 { font-size:24px!important; text-align:left } h5 { font-size:20px!important; text-align:left } h6 { font-size:16px!important; text-align:left } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:36px!important } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:26px!important } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important } .es-header-body h4 a, .es-content-body h4 a, .es-footer-body h4 a { font-size:24px!important } .es-header-body h5 a, .es-content-body h5 a, .es-footer-body h5 a { font-size:20px!important } .es-header-body h6 a, .es-content-body h6 a, .es-footer-body h6 a { font-size:16px!important } .es-menu td a { font-size:12px!important } .es-header-body p, .es-header-body a { font-size:14px!important } .es-content-body p, .es-content-body a { font-size:14px!important } .es-footer-body p, .es-footer-body a { font-size:14px!important } .es-infoblock p, .es-infoblock a { font-size:12px!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3, .es-m-txt-c h4, .es-m-txt-c h5, .es-m-txt-c h6 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3, .es-m-txt-r h4, .es-m-txt-r h5, .es-m-txt-r h6 { text-align:right!important } .es-m-txt-j, .es-m-txt-j h1, .es-m-txt-j h2, .es-m-txt-j h3, .es-m-txt-j h4, .es-m-txt-j h5, .es-m-txt-j h6 { text-align:justify!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3, .es-m-txt-l h4, .es-m-txt-l h5, .es-m-txt-l h6 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-m-txt-r .rollover:hover .rollover-second, .es-m-txt-c .rollover:hover .rollover-second, .es-m-txt-l .rollover:hover .rollover-second { display:inline!important } .es-m-txt-r .rollover span, .es-m-txt-c .rollover span, .es-m-txt-l .rollover span { line-height:0!important; font-size:0!important; display:block } .es-spacer { display:inline-table } a.es-button, button.es-button { font-size:20px!important; padding:10px 20px 10px 20px!important; line-height:120%!important } a.es-button, button.es-button, .es-button-border { display:inline-block!important } .es-m-fw, .es-m-fw.es-fw, .es-m-fw .es-button { display:block!important } .es-m-il, .es-m-il .es-button, .es-social, .es-social td, .es-menu { display:inline-block!important } .es-adaptive table, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .adapt-img { width:100%!important; height:auto!important } .es-mobile-hidden, .es-hidden { display:none!important } .es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } .h-auto { height:auto!important } }
@media screen and (max-width:384px) {.mail-message-content { width:414px!important } }
</style>
 </head>
 <body class="body" style="width:100%;height:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
  <div dir="ltr" class="es-wrapper-color" lang="en" style="background-color:#FAFAFA"><!--[if gte mso 9]>
			<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
				<v:fill type="tile" color="#fafafa"></v:fill>
			</v:background>
		<![endif]-->
   <table width="100%" cellspacing="0" cellpadding="0" class="es-wrapper" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#FAFAFA">
     <tr>
      <td valign="top" style="padding:0;Margin:0">
       <table cellspacing="0" cellpadding="0" align="center" class="es-content" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
         <tr>
          <td align="center" style="padding:0;Margin:0">
           <table cellspacing="0" cellpadding="0" align="center" class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" role="none">
             <tr>
              <td align="left" style="Margin:0;padding-top:20px;padding-right:20px;padding-bottom:5px;padding-left:20px">
               <table width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                 <tr>
                  <td valign="top" align="center" style="padding:0;Margin:0;width:560px">
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="right" style="padding:0;Margin:0"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#666666;font-size:14px">2025</p></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table></td>
         </tr>
       </table>
       <table cellspacing="0" cellpadding="0" align="center" class="es-content" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
         <tr>
          <td align="center" style="padding:0;Margin:0">
           <table cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" class="es-content-body" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
             <tr>
              <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-right:20px;padding-left:20px">
               <table width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                 <tr>
                  <td valign="top" align="center" style="padding:0;Margin:0;width:560px">
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="left" style="padding:0;Margin:0;padding-top:5px;padding-bottom:10px"><h3 class="es-m-txt-l" style="Margin:0;font-family:arial, 'helvetica neue', helvetica, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:20px;font-style:normal;font-weight:bold;line-height:24px;color:#333333">Dear ${caseDetails.firstname},</h3></td>
                     </tr>
                     <tr>
                      <td align="left" style="padding:0;Margin:0;padding-top:5px;padding-bottom:10px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">​We would like to inform you that your case (<strong>Case Number: ${caseDetails.caseNumber}</strong>) has been assigned to a police officer for further handling.</p><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px"><strong>Assigned Officer Details:</strong></p>
                       <ul style="font-family:arial, 'helvetica neue', helvetica, sans-serif;padding:0px 0px 0px 40px;margin-top:15px;margin-bottom:15px">
                        <li style="color:#333333;margin:0px 0px 15px;font-size:14px"><strong>Name:</strong> ${caseDetails.officerFirstname}</li>
                        <li style="color:#333333;margin:0px 0px 15px;font-size:14px"><strong>Rank:</strong> ${caseDetails.officerRank}</li>
                        <li style="color:#333333;margin:0px 0px 15px;font-size:14px"><strong>Badge Number:</strong> ${caseDetails.officerBadgeNumber}</li>
                        <li style="color:#333333;margin:0px 0px 15px;font-size:14px"><strong>Contact:</strong> ${caseDetails.officerNumber}</li>
                       </ul><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">The officer will be in touch with you soon to provide updates and assistance regarding your case. If you have any urgent concerns or need further information, please do not hesitate to contact us at [Support Contact].</p><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">Thank you.</p><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">Best regards,</p><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">SAPS Team</p></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table></td>
         </tr>
       </table>
       <table cellspacing="0" cellpadding="0" align="center" class="es-content" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
         <tr>
          <td align="center" style="padding:0;Margin:0">
           <table cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" class="es-content-body" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
             <tr>
              <td align="left" style="padding:20px;Margin:0"><!--[if mso]><table style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:296px" valign="top"><![endif]-->
               <table cellspacing="0" cellpadding="0" align="left" class="es-left" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                 <tr>
                  <td align="left" style="padding:0;Margin:0;width:276px">
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="left" class="es-m-txt-l" style="padding:0;Margin:0;font-size:0px"><img src="https://fueeqgj.stripocdn.email/content/guids/CABINET_5855bdf78ca537e4d15709a026af93a6/images/89501626684388018.png" alt="" width="186" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></td>
                     </tr>
                   </table></td>
                  <td class="es-hidden" style="padding:0;Margin:0;width:20px"></td>
                 </tr>
               </table><!--[if mso]></td><td style="width:96px" valign="top"><![endif]-->
               <table cellspacing="0" cellpadding="0" align="left" class="es-left" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                 <tr>
                  <td align="left" style="padding:0;Margin:0;width:96px">
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="right" class="es-m-txt-c" style="padding:0;Margin:0;padding-bottom:5px;padding-top:5px;font-size:0px"><img src="https://fueeqgj.stripocdn.email/content/guids/CABINET_1980659766642eb2d49de597c9357afc93a15e156b53c15b6a1dfc81a83bef46/images/saps.png" alt="" width="96" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></td>
                     </tr>
                   </table></td>
                 </tr>
               </table><!--[if mso]></td><td style="width:20px"></td><td style="width:148px" valign="top"><![endif]-->
               <table cellspacing="0" cellpadding="0" align="right" class="es-right" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                 <tr>
                  <td align="left" style="padding:0;Margin:0;width:148px">
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="left" style="padding:0;Margin:0"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">Tel: +27 (0) 12 393 1000 <br>SAPS Head OfficePretoria <br>0001</p></td>
                     </tr>
                     <tr>
                      <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;padding-bottom:5px;padding-top:5px;font-size:0">
                       <table cellspacing="0" cellpadding="0" class="es-table-not-adapt es-social" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr>
                          <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px"><img title="Facebook" src="https://fueeqgj.stripocdn.email/content/assets/img/social-icons/logo-black/facebook-logo-black.png" alt="Fb" width="24" height="24" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></td>
                          <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px"><img title="X" src="https://fueeqgj.stripocdn.email/content/assets/img/social-icons/logo-black/x-logo-black.png" alt="X" width="24" height="24" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></td>
                          <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px"><img title="Instagram" src="https://fueeqgj.stripocdn.email/content/assets/img/social-icons/logo-black/instagram-logo-black.png" alt="Inst" width="24" height="24" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></td>
                          <td valign="top" align="center" style="padding:0;Margin:0"><img title="Youtube" src="https://fueeqgj.stripocdn.email/content/assets/img/social-icons/logo-black/youtube-logo-black.png" alt="Yt" width="24" height="24" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
               </table><!--[if mso]></td></tr></table><![endif]--></td>
             </tr>
           </table></td>
         </tr>
       </table></td>
     </tr>
   </table>
  </div>
 </body>
</html>
  `
}


export function emailTemplateOpenCase( caseDetails){
  return `
    <html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <meta name="x-apple-disable-message-reformatting">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="telephone=no" name="format-detection">
    <title>
      Welcome to the SAP System – Your Login Details
    </title>
    <!--[if (mso 16)]>
    <style type="text/css">
    a {text-decoration: none;}
    </style>
    <![endif]-->
    <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->
    <!--[if gte mso 9]>
<noscript>
         <xml>
           <o:OfficeDocumentSettings>
           <o:AllowPNG></o:AllowPNG>
           <o:PixelsPerInch>96</o:PixelsPerInch>
           </o:OfficeDocumentSettings>
         </xml>
      </noscript>
<![endif]-->
    <!--[if mso]><xml>
    <w:WordDocument xmlns:w="urn:schemas-microsoft-com:office:word">
      <w:DontUseAdvancedTypographyReadingMail/>
    </w:WordDocument>
    </xml><![endif]-->
  </head>
  <body class="body">
    <div dir="ltr" class="es-wrapper-color">
      <!--[if gte mso 9]>
			<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
				<v:fill type="tile" color="#fafafa"></v:fill>
			</v:background>
		<![endif]-->
      <table width="100%" cellspacing="0" cellpadding="0" class="es-wrapper">
        <tbody>
          <tr>
            <td valign="top" class="esd-email-paddings">
              <table cellspacing="0" cellpadding="0" align="center" class="es-content esd-header-popover">
                <tbody>
                  <tr>
                    <td align="center" class="esd-stripe">
                      <table width="600" cellspacing="0" cellpadding="0" align="center" class="es-content-body" style="background-color:transparent">
                        <tbody>
                          <tr>
                            <td align="left" class="esd-structure es-p20t es-p5b es-p20r es-p20l">
                              <table width="100%" cellspacing="0" cellpadding="0">
                                <tbody>
                                  <tr>
                                    <td width="560" valign="top" align="center" class="esd-container-frame">
                                      <table width="100%" cellspacing="0" cellpadding="0">
                                        <tbody>
                                          <tr>
                                            <td align="right" class="esd-block-text">
                                              <p style="color:#666666">
                                                2025
                                              </p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table cellspacing="0" cellpadding="0" align="center" class="es-content">
                <tbody>
                  <tr>
                    <td align="center" class="esd-stripe">
                      <table width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" class="es-content-body">
                        <tbody>
                          <tr>
                            <td align="left" class="esd-structure es-p20t es-p20r es-p20l">
                              <table width="100%" cellspacing="0" cellpadding="0">
                                <tbody>
                                  <tr>
                                    <td width="560" valign="top" align="center" class="esd-container-frame">
                                      <table width="100%" cellspacing="0" cellpadding="0">
                                        <tbody>
                                          <tr>
                                            <td align="left" class="esd-block-text es-p5t es-p10b">
                                              <h3 class="es-m-txt-l">
                                                Dear ${caseDetails.firstname},
                                              </h3>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td align="left" class="esd-block-text es-p5t es-p10b">
                                              <p>
                                                We have successfully received your case submission. Below are the details of your case:
                                              </p>
                                              <ul>
                                                <li>
                                                  <strong>Case Title:</strong> ${caseDetails.title}
                                                </li>
                                                <li>
                                                  <strong>Case Number:</strong> ${caseDetails.caseNumber}
                                                </li>
                                                <li>
                                                  <strong>Case Type:</strong> ${caseDetails.caseType}
                                                </li>
                                                <li>
                                                  <strong>Status:</strong> ${caseDetails.status}
                                                </li>
                                                <li>
                                                  <strong>Station:</strong> ${caseDetails.policeStation}
                                                </li>
                                              </ul>
                                              <p>
                                                Our team is currently reviewing your case, and we will keep you updated on any developments. If an officer is assigned to your case, you will receive a follow-up email with their details.
                                              </p>
                                              <p>
                                                If you have any further information to add or questions regarding your case, please feel free to respond to this email.
                                              </p>
                                              <p>
                                                <strong>Best regards,</strong><br>SAPS TEAM
                                              </p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table cellspacing="0" cellpadding="0" align="center" class="es-content esd-footer-popover">
                <tbody>
                  <tr>
                    <td align="center" class="esd-stripe">
                      <table width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" class="es-content-body">
                        <tbody>
                          <tr>
                            <td align="left" class="esd-structure es-p20">
                              <!--[if mso]><table width="560" cellpadding="0" cellspacing="0"><tr><td width="296" valign="top"><![endif]-->
                              <table cellspacing="0" cellpadding="0" align="left" class="es-left">
                                <tbody>
                                  <tr>
                                    <td width="276" align="left" class="esd-container-frame">
                                      <table width="100%" cellspacing="0" cellpadding="0">
                                        <tbody>
                                          <tr>
                                            <td align="left" class="esd-block-image es-m-txt-l" style="font-size:0px">
                                              <a target="_blank" href="">
                                                <img src="https://fueeqgj.stripocdn.email/content/guids/CABINET_5855bdf78ca537e4d15709a026af93a6/images/89501626684388018.png" alt="" width="186" style="display:block">
                                              </a>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                    <td width="20" class="es-hidden"></td>
                                  </tr>
                                </tbody>
                              </table>
                              <!--[if mso]></td><td width="96" valign="top"><![endif]-->
                              <table cellspacing="0" cellpadding="0" align="left" class="es-left">
                                <tbody>
                                  <tr>
                                    <td width="96" align="left" class="esd-container-frame">
                                      <table width="100%" cellspacing="0" cellpadding="0">
                                        <tbody>
                                          <tr>
                                            <td align="right" class="esd-block-image es-p5t es-p5b es-m-txt-c" style="font-size:0px">
                                              <a target="_blank">
                                                <img src="https://fueeqgj.stripocdn.email/content/guids/CABINET_1980659766642eb2d49de597c9357afc93a15e156b53c15b6a1dfc81a83bef46/images/saps.png" alt="" width="96" style="display: block">
                                              </a>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <!--[if mso]></td><td width="20"></td><td width="148" valign="top"><![endif]-->
                              <table cellspacing="0" cellpadding="0" align="right" class="es-right">
                                <tbody>
                                  <tr>
                                    <td width="148" align="left" class="esd-container-frame">
                                      <table width="100%" cellspacing="0" cellpadding="0">
                                        <tbody>
                                          <tr>
                                            <td esd-links-underline="none" align="left" class="esd-block-text">
                                              <p>
                                                Tel: +27 (0) 12 393 1000 <br>SAPS Head OfficePretoria
<br>0001
                                              </p>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td align="left" class="esd-block-social es-m-txt-c es-p5t es-p5b" style="font-size:0">
                                              <table cellspacing="0" cellpadding="0" class="es-table-not-adapt es-social">
                                                <tbody>
                                                  <tr>
                                                    <td valign="top" align="center" class="es-p10r">
                                                      <a target="_blank" href="">
                                                        <img title="Facebook" src="https://fueeqgj.stripocdn.email/content/assets/img/social-icons/logo-black/facebook-logo-black.png" alt="Fb" width="24" height="24">
                                                      </a>
                                                    </td>
                                                    <td valign="top" align="center" class="es-p10r">
                                                      <a target="_blank" href="">
                                                        <img title="X" src="https://fueeqgj.stripocdn.email/content/assets/img/social-icons/logo-black/x-logo-black.png" alt="X" width="24" height="24">
                                                      </a>
                                                    </td>
                                                    <td valign="top" align="center" class="es-p10r">
                                                      <a target="_blank" href="">
                                                        <img title="Instagram" src="https://fueeqgj.stripocdn.email/content/assets/img/social-icons/logo-black/instagram-logo-black.png" alt="Inst" width="24" height="24">
                                                      </a>
                                                    </td>
                                                    <td valign="top" align="center">
                                                      <a target="_blank" href="">
                                                        <img title="Youtube" src="https://fueeqgj.stripocdn.email/content/assets/img/social-icons/logo-black/youtube-logo-black.png" alt="Yt" width="24" height="24">
                                                      </a>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <!--[if mso]></td></tr></table><![endif]-->
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </body>
</html>
  
  `
}