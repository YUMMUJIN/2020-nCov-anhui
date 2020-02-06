/*! jQuery Validation Plugin - v1.19.0 - 11/28/2018
 * https://jqueryvalidation.org/
 * Copyright (c) 2018 Jörn Zaefferer; Licensed MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery","../jquery.validate.min"],a):"object"==typeof module&&module.exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){return a.extend(a.validator.messages,{required:"ان معلومات کا اندراج ضروری ہے",remote:"ان معلومات کا اندراج ضروری ہے",email:"درج کی ہوئی ای میل درست نہیں ہے",url:"درج کیا گیا پتہ درست نہیں ہے",date:"درج کی گئی تاریخ درست نہیں ہے",dateISO:"معیار کے مطابق نہیں ہے (ISO) درج کی گئی تاریخ",number:"درج کیےگئے ہندسے درست نہیں ہیں",digits:"صرف ہندسے اندراج کئے جاسکتے ہیں",creditcard:"درج کیا گیا کارڈ نمبر درست نہیں ہے",equalTo:"اندراج کا موازنہ درست نہیں ہے",extension:"اندراج درست نہیں ہے",maxlength:a.validator.format("زیادہ سے زیادہ {0} کا اندراج کر سکتے ہیں"),minlength:a.validator.format("کم سے کم {0} کا اندراج کرنا ضروری ہے"),rangelength:a.validator.format("اندراج کا {0} اور {1}کے درمیان ہونا ضروری ہے"),range:a.validator.format("اندراج کا {0} اور {1} کے درمیان ہونا ضروری ہے"),max:a.validator.format("زیادہ سے زیادہ {0} کا اندراج کر سکتے ہیں"),min:a.validator.format("کم سے کم {0} کا اندراج کرنا ضروری ہے")}),a});