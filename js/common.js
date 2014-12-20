// JavaScript Document

function validEmail(email)
{
    var exclude=/[^@\-\.\w]|^[_@\.\-]|[\._\-]{2}|[@\.]{2}|(@)[^@]*\1/;
    var checkend=/\.[a-zA-Z]{2,3}$/;
    if((email.search(exclude) != -1) || (email.search(checkend) == -1)) {
        return false;
    }
    var atPos = email.indexOf("@",0);
    var pPos1 = email.indexOf(".",0);
    var periodPos = email.indexOf(".",atPos);
    var pos1 = pPos1;
    var pos2 = 0;

    while (pos2 > -1)
    {
        pos2 = email.indexOf(".",pos1+1);
        if (pos2 == pos1+1) {
            return false;
        }
        else {
            pos1 = pos2;
        }
    }

    if (atPos == -1) {
        return false;
    }
    if (atPos == 0) {
        return false;
    }
    if (pPos1 == 0) {
        return false;
    }
    if(email.indexOf("@",atPos+1) > -1) {
        return false;
    }
    if(periodPos == -1) {
        return false;
    }
    if(atPos+1 == periodPos) {
        return false;
    }
    if(periodPos+3 > email.length) {
        return false;
    }
    return true;
}

function isBlank(fieldName)
{
    var len,k,flg;
    flg=true;
    if(fieldName!=null)
    {
        len=fieldName.length;
        for(k=0;k<len;k++)
        {
            if(fieldName.substring(k,k+1)!=" ")
                flg=false;
        }
    }
    return flg;
}

function charsOnlyWithSpaces(fieldName)
{
    var validChars = "abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var temp;

    for(var i=0; i < fieldName.length; i++)
    {
        temp = fieldName.substring(i,i+1);
        if(validChars.indexOf(temp) == "-1")
        {
            return false;
        }
    }
}

function numbersOnly(fieldName)
{
    var validChars = "0123456789";
    var temp;

    for(var i=0; i < fieldName.length; i++)
    {
        temp = fieldName.substring(i,i+1);
        if(validChars.indexOf(temp) == "-1") {
            return false;
        }
    }
}