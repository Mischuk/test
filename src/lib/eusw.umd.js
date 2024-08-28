
//================================================================================

// eusw.umd.begin.js

//================================================================================
//================================================================================

(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		define([], factory);
	} else if (typeof module === 'object' && module.exports) {
		module.exports = factory();
	} else {
		root.returnExports = factory();
	}
}(this, function () {

//================================================================================

//================================================================================


//================================================================================

// euswconsts.js

//================================================================================
//================================================================================

var EU_SIGN_WEB_INSTALL_DOWNLOAD_URL		= 'https://iit.com.ua/download/productfiles';

var EU_SIGN_WEB_INSTALL_WIN					= 'EUSignWebInstall.exe';
var EU_SIGN_WEB_INSTALL_MAC					= 'EUSignWebInstall.pkg';
var EU_SIGN_WEB_INSTALL_LINUX_X32			= 'euswi.deb';
var EU_SIGN_WEB_INSTALL_LINUX_X64			= 'euswi.64.deb';
var EU_SIGN_WEB_INSTALL_LINUX_RPM_X32		= 'euswi.rpm';
var EU_SIGN_WEB_INSTALL_LINUX_RPM_X64		= 'euswi.64.rpm';
var EU_SIGN_WEB_INSTALL_LINUX_TAR_X32		= 'euswi.tar';
var EU_SIGN_WEB_INSTALL_LINUX_TAR_X64		= 'euswi.64.tar';
var EU_SIGN_WEB_INSTALL_UNIX_X32			= null;
var EU_SIGN_WEB_INSTALL_UNIX_X64			= null;
var EU_SIGN_WEB_INSTALL_ANDROID				= "EUSignWebInstall.apk";

var EU_SIGN_WEB_UPDATE_WIN					= 'EUSignWebUpdate.exe';
var EU_SIGN_WEB_UPDATE_MAC					= EU_SIGN_WEB_INSTALL_MAC;
var EU_SIGN_WEB_UPDATE_LINUX_X32			= EU_SIGN_WEB_INSTALL_LINUX_X32;
var EU_SIGN_WEB_UPDATE_LINUX_X64			= EU_SIGN_WEB_INSTALL_LINUX_X64;
var EU_SIGN_WEB_UPDATE_LINUX_RPM_X32		= EU_SIGN_WEB_INSTALL_LINUX_RPM_X32;
var EU_SIGN_WEB_UPDATE_LINUX_RPM_X64		= EU_SIGN_WEB_INSTALL_LINUX_RPM_X64;
var EU_SIGN_WEB_UPDATE_LINUX_TAR_X32		= EU_SIGN_WEB_INSTALL_LINUX_TAR_X32;
var EU_SIGN_WEB_UPDATE_LINUX_TAR_X64		= EU_SIGN_WEB_INSTALL_LINUX_TAR_X64;
var EU_SIGN_WEB_UPDATE_UNIX_X32				= EU_SIGN_WEB_INSTALL_UNIX_X32;
var EU_SIGN_WEB_UPDATE_UNIX_X64				= EU_SIGN_WEB_INSTALL_UNIX_X64;
var EU_SIGN_WEB_UPDATE_ANDROID				= EU_SIGN_WEB_INSTALL_ANDROID;

var EU_SIGN_WEB_MANUAL_WIN					= 'EUSignWebOManual.pdf';
var EU_SIGN_WEB_MANUAL_MAC					= 'EUSignWebOManual.pdf';
var EU_SIGN_WEB_MANUAL_LINUX				= 'EUSignWebOManual.pdf';
var EU_SIGN_WEB_MANUAL_UNIX					= null;

var EU_SIGN_CHROME_WEB_EXTENSION_INSTALL	= 'https://chrome.google.com/webstore/detail/%D1%96%D1%96%D1%82-%D0%BA%D0%BE%D1%80%D0%B8%D1%81%D1%82%D1%83%D0%B2%D0%B0%D1%87-%D1%86%D1%81%D0%BA-1-%D0%B1%D1%96%D0%B1%D0%BB/jffafkigfgmjafhpkoibhfefeaebmccg?utm_source=chrome-app-launcher-info-dialog';
var EU_SIGN_FIREFOX_WEB_EXTENSION_INSTALL	= 'https://eu.iit.com.ua/download/productfiles/eusw@iit.com.ua.xpi';
var EU_SIGN_OPERA_WEB_EXTENSION_INSTALL		= EU_SIGN_CHROME_WEB_EXTENSION_INSTALL;//'https://addons.opera.com/uk/extensions/details/iit-end-user-ca-1-sign-web-extension/?display=uk';

//--------------------------------------------------------------------------------

var EU_SIGN_APPLET_CODEBASE					= "https://sign.eu.iit.com.ua";
var EU_SIGN_APPLET_CODE						= "com.iit.certificateAuthority.endUser.libraries.signJava.EndUser.class";
var EU_SIGN_APPLET_NAME						= "EUSignJava.jar";
var EU_SIGN_APPLET_VERSION					= "1.3.102";
var EU_SIGN_APPLET_CHECK_JRE_URL			= "https://www.java.com/ru/download/installed.jsp";
var EU_SIGN_APPLET_LOAD_DELAY				= 100;
var EU_SIGN_APPLET_LOAD_WAITS				= 2 * 60 * 10;

//--------------------------------------------------------------------------------

var EU_SIGN_AGENT_DEFAULT_ADDRESS			= "localhost";
var EU_SIGN_AGENT_DEFAULT_HTTP_POPT			= "8081";
var EU_SIGN_AGENT_DEFAULT_HTTPS_POPT		= "8083";

var EU_SIGN_WEB_EXTENSION_ADDRESS_CHROME	= "chrome-extension://jffafkigfgmjafhpkoibhfefeaebmccg/";
var EU_SIGN_WEB_EXTENSION_ADDRESS_FIREFOX	= "eusw@iit.com.ua";
var EU_SIGN_WEB_EXTENSION_ADDRESS			= EU_SIGN_WEB_EXTENSION_ADDRESS_CHROME;

var EU_SIGN_WEB_NPAPI_ADDRESS				= "application/x-eusign-cp";
var EU_SIGN_WEB_NPAPI_LOAD_DELAY			= 100;
var EU_SIGN_WEB_NPAPI_LOAD_WAITS			= 1 * 50;

var EU_SIGN_WEB_ACTIVE_X_ADDRESS			= "clsid:B7E24C75-E343-4DA2-A8D3-C80970FB7D7B";
var EU_SIGN_WEB_ACTIVE_X_LOAD_DELAY			= 100;
var EU_SIGN_WEB_ACTIVE_X_LOAD_WAITS			= 1 * 50;

var EU_SIGN_WEB_MONITOR_STATUS_INTERVAL		= 10 * 60 * 1000;

//--------------------------------------------------------------------------------

var EU_SIGN_CP_IFACE_VERSION				= '1.3.61';

//================================================================================

//================================================================================


//================================================================================

// eustringcoder.js

//================================================================================
//================================================================================

var EU_SIGN_CP_ENCODING_UTF_8				= 'UTF-8';
var EU_SIGN_CP_ENCODING_UTF_16_LE			= 'UTF-16LE';
var EU_SIGN_CP_ENCODING_CP1251				= 'windows-1251';

//================================================================================

var EndUserUTF8Coder = function() {
	this.vendor = 'JSC IIT';
	this.classVersion = 1;
	this.className = 'EndUserUTF8Coder';
};
 
//--------------------------------------------------------------------------------

EndUserUTF8Coder.prototype.encode = function(str) {
	var out = [], p = 0;
	for (var i = 0; i < str.length; i++) {
		var c = str.charCodeAt(i);
		if (c < 128) {
			out[p++] = c;
		} else if (c < 2048) {
			out[p++] = (c >> 6) | 192;
			out[p++] = (c & 63) | 128;
		} else {
			out[p++] = (c >> 12) | 224;
			out[p++] = ((c >> 6) & 63) | 128;
			out[p++] = (c & 63) | 128;
		}
	}
	return out;
};

//--------------------------------------------------------------------------------

EndUserUTF8Coder.prototype.decode = function(bytes) {
	var out = [], pos = 0, c = 0;
	var c1, c2, c3;
	while (pos < bytes.length) {
		c1 = bytes[pos++];
		if (c1 < 128) {
			out[c++] = String.fromCharCode(c1);
		} else if (c1 > 191 && c1 < 224) {
			c2 = bytes[pos++];
			out[c++] = String.fromCharCode((c1 & 31) << 6 | c2 & 63);
		} else {
			c2 = bytes[pos++];
			c3 = bytes[pos++];
			out[c++] = String.fromCharCode(
				(c1 & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
		}
	}
	return out.join('');
};

//--------------------------------------------------------------------------------

var EndUserUTF16LECoder = function() {
	this.vendor = 'JSC IIT';
	this.classVersion = 1;
	this.className = 'EndUserUTF16LECoder';
};
 
//--------------------------------------------------------------------------------

EndUserUTF16LECoder.prototype.encode = function(str) {
	var out = [];
	var c;

	for (var i = 0; i < str.length; i++) {
		c = str.charCodeAt(i);
		out.push(c & 0xFF);
		out.push((c & 0xFF00) >> 8);
	}

	return out;
};

//--------------------------------------------------------------------------------

EndUserUTF16LECoder.prototype.decode = function(bytes) {
	var i = 0;
	var ret = '';
	var length;

	if ((bytes.length%2) != 0)
		return null;

	length = bytes.length;
	if (length > 0 && 
		bytes[length - 2] == 0 && 
		bytes[length - 1] == 0) {
		length -= 2;
	}
		
	while (i < length) {
		ret += String.fromCharCode(bytes[i] | (bytes[i+1] << 8)); 
		i += 2;
	}

	return ret;
};

//--------------------------------------------------------------------------------

var EndUserCP1251Coder = function() {
	this.vendor = 'JSC IIT';
	this.classVersion = 1;
	this.className = 'EndUserCP1251Coder';

	this.m_cp1251_table = {
		0: 0, 1: 1, 2: 2, 3: 3, 4: 4,
		5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 
		10: 10, 11: 11, 12: 12, 13: 13, 14: 14,
		15: 15, 16: 16, 17: 17, 18: 18, 19: 19,
		20: 20, 21: 21, 22: 22, 23: 23, 24: 24,
		25: 25, 26: 26, 27: 27, 28: 28, 29: 29, 
		30: 30, 31: 31, 32: 32, 33: 33, 34: 34,
		35: 35, 36: 36, 37: 37, 38: 38, 39: 39, 
		40: 40, 41: 41, 42: 42, 43: 43, 44: 44,
		45: 45, 46: 46, 47: 47, 48: 48, 49: 49, 
		50: 50, 51: 51, 52: 52, 53: 53, 54: 54,
		55: 55, 56: 56, 57: 57, 58: 58, 59: 59,
		60: 60, 61: 61, 62: 62, 63: 63, 64: 64,
		65: 65, 66: 66, 67: 67, 68: 68, 69: 69, 
		70: 70, 71: 71, 72: 72, 73: 73, 74: 74,
		75: 75, 76: 76, 77: 77, 78: 78, 79: 79, 
		80: 80, 81: 81, 82: 82, 83: 83, 84: 84,
		85: 85, 86: 86, 87: 87, 88: 88, 89: 89,
		90: 90, 91: 91, 92: 92, 93: 93, 94: 94,
		95: 95, 96: 96, 97: 97, 98: 98, 99: 99, 
		100: 100, 101: 101, 102: 102, 103: 103, 104: 104,
		105: 105, 106: 106, 107: 107, 108: 108, 109: 109, 
		110: 110, 111: 111, 112: 112, 113: 113, 114: 114,
		115: 115, 116: 116, 117: 117, 118: 118, 119: 119, 
		120: 120, 121: 121, 122: 122, 123: 123, 124: 124,
		125: 125, 126: 126, 127: 127, 1027: 129, 8225: 135,
		1046: 198, 8222: 132, 1047: 199, 1168: 165, 1048: 200,
		1113: 154, 1049: 201, 1045: 197, 1050: 202, 1028: 170,
		160: 160, 1040: 192, 1051: 203, 164: 164, 166: 166, 167: 167,
		169: 169, 171: 171, 172: 172, 173: 173, 174: 174, 1053: 205,
		176: 176, 177: 177, 1114: 156, 181: 181, 182: 182, 183: 183,
		8221: 148, 187: 187, 1029: 189, 1056: 208, 1057: 209, 1058: 210,
		8364: 136, 1112: 188, 1115: 158, 1059: 211, 1060: 212, 1030: 178,
		1061: 213, 1062: 214, 1063: 215, 1116: 157, 1064: 216, 1065: 217,
		1031: 175, 1066: 218, 1067: 219, 1068: 220, 1069: 221, 1070: 222,
		1032: 163, 8226: 149, 1071: 223, 1072: 224, 8482: 153, 1073: 225,
		8240: 137, 1118: 162, 1074: 226, 1110: 179, 8230: 133, 1075: 227,
		1033: 138, 1076: 228, 1077: 229, 8211: 150, 1078: 230, 1119: 159,
		1079: 231, 1042: 194, 1080: 232, 1034: 140, 1025: 168, 1081: 233,
		1082: 234, 8212: 151, 1083: 235, 1169: 180, 1084: 236, 1052: 204,
		1085: 237, 1035: 142, 1086: 238, 1087: 239, 1088: 240, 1089: 241,
		1090: 242, 1036: 141, 1041: 193, 1091: 243, 1092: 244, 8224: 134,
		1093: 245, 8470: 185, 1094: 246, 1054: 206, 1095: 247, 1096: 248,
		8249: 139, 1097: 249, 1098: 250, 1044: 196, 1099: 251, 1111: 191,
		1055: 207, 1100: 252, 1038: 161, 8220: 147, 1101: 253, 8250: 155,
		1102: 254, 8216: 145, 1103: 255, 1043: 195, 1105: 184, 1039: 143,
		1026: 128, 1106: 144, 8218: 130, 1107: 131, 8217: 146, 1108: 186,
		1109: 190};

	this.m_ut8_table = unescape(
		"%u0402%u0403%u201A%u0453%u201E%u2026%u2020%u2021%u20AC%u2030%u0409" + 
		"%u2039%u040A%u040C%u040B%u040F%u0452%u2018%u2019%u201C%u201D%u2022" + 
		"%u2013%u2014%u0000%u2122%u0459%u203A%u045A%u045C%u045B%u045F%u00A0" + 
		"%u040E%u045E%u0408%u00A4%u0490%u00A6%u00A7%u0401%u00A9%u0404%u00AB" +
		"%u00AC%u00AD%u00AE%u0407%u00B0%u00B1%u0406%u0456%u0491%u00B5%u00B6" + 
		"%u00B7%u0451%u2116%u0454%u00BB%u0458%u0405%u0455%u0457");
};
 
//--------------------------------------------------------------------------------

EndUserCP1251Coder.prototype.encode = function(str) {
	var out = [];
	for (var i = 0; i < str.length; i++) {
		var ord = str.charCodeAt(i);
		if (!(ord in this.m_cp1251_table))
			throw "Character " + str.charAt(i) + " isn't supported by win1251!";
		out.push(this.m_cp1251_table[ord]);
	}

	return out;
};

//--------------------------------------------------------------------------------

EndUserCP1251Coder.prototype.decode = function(bytes) {
	var t;
	var ret = '';

	for (var i = 0; i < bytes.length; i++) {
		t = bytes[i];
		if (t >= 0xC0 && t <= 0xFF)
			ret += String.fromCharCode(t - 0xC0 + 0x0410);
		else if(t >= 0x80 && t <= 0xBF) 
			ret += this.m_ut8_table.charAt(t - 0x80);
		else
			ret += String.fromCharCode(t);
	}

	return ret;
};

//================================================================================

var EndUserStringCoder = {};

//--------------------------------------------------------------------------------

EndUserStringCoder.GetCoder = function(charset) {
	charset = charset.toUpperCase();

	switch (charset) {
		case EU_SIGN_CP_ENCODING_UTF_8:
				return new EndUserUTF8Coder(); 

		case EU_SIGN_CP_ENCODING_UTF_16_LE:
			return new EndUserUTF16LECoder(); 

		case EU_SIGN_CP_ENCODING_CP1251:
			return new EndUserCP1251Coder(); 

		default:
			return null;
	}
};

//--------------------------------------------------------------------------------

EndUserStringCoder.ArrayToString = function(charset, data) {
	var coder;

	if (typeof charset == 'undefined')
		charset = EU_SIGN_CP_ENCODING_UTF_8;

	coder = EndUserStringCoder.GetCoder(charset);
	if (coder == null) {
		var error;
		var errorDescr;

		error = EndUserError.ERROR_BAD_PARAMETER;
		errorDescr = EndUserError.getErrorDescriptionEx(error, 0);

		throw new EndUserException(error, errorDescr);
	}

	return coder.decode(data);
};

//================================================================================

//================================================================================


//================================================================================

// eudatecoder.js

//================================================================================
//================================================================================

var EndUserDateCoder = function() {
	this.vendor = 'JSC IIT';
	this.classVersion = 1;
	this.className = 'EndUserDateCoder';

	this.dateDelimeter = '.';
	this.timeDelimeter = ':';
	this.dateTimeDelimeter = ' ';
	this.format = 'dd.MM.yyyy HH:mm:ss';
};

//--------------------------------------------------------------------------------

EndUserDateCoder.prototype.encode = function(date) {
	var dd = date.getDate();
	var MM = date.getMonth() + 1;
	var yyyy = date.getFullYear();
	var HH = date.getHours();
	var mm = date.getMinutes();
	var ss = date.getSeconds();

	return dd + this.dateDelimeter + MM + this.dateDelimeter + yyyy + 
		this.dateTimeDelimeter + 
		HH + this.timeDelimeter + mm + this.timeDelimeter + ss;
};

//--------------------------------------------------------------------------------

EndUserDateCoder.prototype.decode = function(dateStr) {
	try {
		var arr = dateStr.split(this.dateTimeDelimeter);
		var dateArr = arr[0].split(this.dateDelimeter);
		var timeArr = arr[1].split(this.timeDelimeter);

		var dd = parseInt(dateArr[0]);
		var MM = parseInt(dateArr[1]) - 1;
		var yyyy = parseInt(dateArr[2]);
		if (dd < 0 || dd > 31 ||
			MM < 0 || MM > 12 || yyyy < 0) {
			return null;
		}

		var HH = parseInt(timeArr[0]);
		var mm = parseInt(timeArr[1]);
		var ss = parseInt(timeArr[2]);
		if (HH < 0 || HH > 23 ||
			mm < 0 || mm > 59 ||
			ss < 0 || ss > 59) {
			return null;
		}

		return new Date(yyyy, MM, dd,
			HH, mm, ss, 0);
	} catch (e) {
		return null;
	}
};

//================================================================================

//================================================================================


//================================================================================

// eubase64coder.js

//================================================================================
//================================================================================

var EndUserBase64Coder = function() {
	this.vendor = 'JSC IIT';
	this.classVersion = 1;
	this.className = 'EndUserBase64Coder';

	this.m_map = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
	this.m_codes = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
		80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 
		104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118,
		119, 120, 121, 122, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 43, 47];
};

//--------------------------------------------------------------------------------

EndUserBase64Coder.prototype._getTextDecoder = function() {

	try {
		if (typeof TextDecoder == 'undefined')
			return null;

		var decoder = new TextDecoder("utf-8");
		if (decoder.encoding != "utf-8")
			return null;

		return decoder;
	} catch (e) {
		return null;
	}
};

//--------------------------------------------------------------------------------

EndUserBase64Coder.prototype._encodePart = function(bytes, begin, end) {
	var result = [];
	var tmp, str;

	for (var i = begin; i < end; i += 3) {
		tmp = (bytes[i] << 16) | 
			(bytes[i + 1] << 8) | 
			(bytes[i + 2]);
		str = this.m_map[(tmp >> 18) & 0x3F] + 
			this.m_map[(tmp >> 12) & 0x3F] + 
			this.m_map[(tmp >> 6) & 0x3F] + 
			this.m_map[tmp & 0x3F];

		result.push(str);
	}

	return result.join('');
};

//--------------------------------------------------------------------------------

EndUserBase64Coder.prototype.encode = function(array) {
	var bytes;
	var i, j;
	var tmp;
	var length;
	var str = '';
	var result;

	bytes = (typeof Uint8Array == 'undefined') ? 
		((typeof EndUserUint8Array == 'undefined') ?
			array.slice(0) : new EndUserUint8Array(array)) : 
		new Uint8Array(array);
	length = bytes.length;

	if (length == 0)
		return "";

	var decoder = this._getTextDecoder();
	if (decoder != null) {
		result = new Uint8Array(parseInt(((length + 2) / 3)) * 4);

		for (i = 0, j = 0; i < length - (length % 3); i += 3, j += 4) {
			tmp = (bytes[i] << 16) | 
				(bytes[i + 1] << 8) | 
				(bytes[i + 2]);
			result[j]     = this.m_codes[(tmp >> 18) & 0x3F];
			result[j + 1] = this.m_codes[(tmp >> 12) & 0x3F];
			result[j + 2] = this.m_codes[(tmp >> 6) & 0x3F];
			result[j + 3] = this.m_codes[tmp & 0x3F];
		}

		switch (length % 3) {
			case 1:
				tmp = (bytes[i] << 16);
				result[j]     = this.m_codes[(tmp >> 18) & 0x3F];
				result[j + 1] = this.m_codes[(tmp >> 12) & 0x3F];
				result[j + 2] = 61;
				result[j + 3] = 61;
				break;
			case 2:
				tmp = (bytes[i] << 16) | 
					(bytes[i + 1] << 8);
				result[j]     = this.m_codes[(tmp >> 18) & 0x3F];
				result[j + 1] = this.m_codes[(tmp >> 12) & 0x3F];
				result[j + 2] = this.m_codes[(tmp >> 6) & 0x3F];
				result[j + 3] = 61;
				break;
		}
		str = decoder.decode(result); 
	} else {
		var part = null;
		var partLength = 5 * 1024 * 3;
		var baseLength = length - (length % 3);
		var partsCount = parseInt(baseLength / partLength);
		var lastPart;

		result = [];

		for (i = 0; i < partsCount; i++) {
			part = this._encodePart(bytes, i * partLength, 
				i * partLength + partLength);
			result.push(part);
		}

		if ((partsCount * partLength) < baseLength) {
			part = this._encodePart(bytes, i * partLength, baseLength);
			result.push(part);
		}
	
		switch (length % 3) {
			case 1:
				tmp = (bytes[length - 1] << 16);
				lastPart  = this.m_map[(tmp >> 18) & 0x3F];
				lastPart += this.m_map[(tmp >> 12) & 0x3F];
				lastPart += '=';
				lastPart += '=';
				result.push(lastPart);
				break;
			case 2:
				tmp = (bytes[length - 2] << 16) | 
					(bytes[length - 1] << 8);
				lastPart  = this.m_map[(tmp >> 18) & 0x3F];
				lastPart += this.m_map[(tmp >> 12) & 0x3F];
				lastPart += this.m_map[(tmp >> 6) & 0x3F];
				lastPart += '=';
				result.push(lastPart);
				break;
		}

		str = result.join('');
	}

	return str;
};

//--------------------------------------------------------------------------------

EndUserBase64Coder.prototype.decode = function(base64Str) {
	var bytes;
	var bytesLength;
	var i, j, p;
	var base64StrLength;
	var equals;
	var encoded1, encoded2, encoded3, encoded4;

	if ((base64Str == '') || ((base64Str.length & 0x03) > 0)) {
		return (typeof Uint8Array == 'undefined') ? 
			((typeof EndUserUint8Array == 'undefined') ? 
				[] : new EndUserUint8Array(0))  : 
			(new Uint8Array(0));
	}

	base64StrLength = base64Str.length;	
	equals = (base64Str[base64StrLength - 1] == '=') ? 
		((base64Str[base64StrLength - 2] == '=') ? 2 : 1) : 0;
	bytesLength = (base64StrLength / 4) * 3 - equals;
	
	bytes = (typeof Uint8Array == 'undefined') ? 
		((typeof EndUserUint8Array == 'undefined') ?
			[] : new EndUserUint8Array(bytesLength)) : 
		new Uint8Array(bytesLength);

	for (i = 0, j = 0, p = 0; i < 
			Math.floor((base64StrLength - equals) / 4); i++) {
		encoded1 = this.m_map.indexOf(base64Str[j++]);
		encoded2 = this.m_map.indexOf(base64Str[j++]);
		encoded3 = this.m_map.indexOf(base64Str[j++]);
		encoded4 = this.m_map.indexOf(base64Str[j++]);

		bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
		bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
		bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
	}
	
	switch (equals) {
		case 2:
			encoded1 = this.m_map.indexOf(base64Str[j]);
			encoded2 = this.m_map.indexOf(base64Str[j+1]);
			
			bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
			break;
			
		case 1:
			encoded1 = this.m_map.indexOf(base64Str[j]);
			encoded2 = this.m_map.indexOf(base64Str[j+1]);
			encoded3 = this.m_map.indexOf(base64Str[j+2]);
			
			bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
			bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
			break;
	}

	return bytes;
};

//================================================================================

//================================================================================


//================================================================================

// euutils.js

//================================================================================
//================================================================================

var eu_wait = function(first) { 
	return new (function() { 
		var self = this;
		var callback = function() {
			var args;
			if(self.deferred.length) {
				args = [].slice.call(arguments); 
				args.unshift(callback); 
				self.deferred[0].apply(self, args); 
				self.deferred.shift(); 
			}
		};
		this.deferred = [];
		this.eu_wait = function(run) {
			this.deferred.push(run); 
			return self; 
		};
		first(callback);
	});
};

//================================================================================

var EndUserBrowserInfo = function() {
	var info = this._getBrowserInfo();
	
	this.m_name		= info.name;
	this.m_version	= info.version;
	this.m_arch 	= this._getArch();

	this.m_os_name	= this._getOSName();
};

//--------------------------------------------------------------------------------

EndUserBrowserInfo.BROWSER_NAME_IE = "IE";
EndUserBrowserInfo.BROWSER_NAME_OPERA = "Opera";
EndUserBrowserInfo.BROWSER_NAME_CHROME = "Chrome";
EndUserBrowserInfo.BROWSER_NAME_FIREFOX = "Firefox";
EndUserBrowserInfo.BROWSER_NAME_SAFARI = "Safari";
EndUserBrowserInfo.BROWSER_NAME_EDGE = "Edge";
EndUserBrowserInfo.BROWSER_NAME_UNKNOWN = "Unknown";

EndUserBrowserInfo.OS_NAME_WINDOWS = "Windows";
EndUserBrowserInfo.OS_NAME_LINUX = "Linux";
EndUserBrowserInfo.OS_NAME_UNIX = "Unix";
EndUserBrowserInfo.OS_NAME_MAC = "Mac OS X";
EndUserBrowserInfo.OS_NAME_ANDROID = "Android";
EndUserBrowserInfo.OS_NAME_UNKNOWN = "Unknown";

EndUserBrowserInfo.BROWSER_ARCH_NAME_X86 = "x86";
EndUserBrowserInfo.BROWSER_ARCH_NAME_X64 = "x64";
EndUserBrowserInfo.BROWSER_ARCH_NAME_ARM = "arm";
EndUserBrowserInfo.BROWSER_ARCH_NAME_UNKNOWN = "Unknown";

//--------------------------------------------------------------------------------

EndUserBrowserInfo.prototype._getBrowserInfo = function() {
	var info = {
		name: EndUserBrowserInfo.BROWSER_NAME_UNKNOWN,
		version: ''
	};
	var ua = navigator.userAgent, tem;
	
	var M = ua.match(
		/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
	if (/msie/i.test(M[1]) || /trident/i.test(M[1])) {
		info.name = EndUserBrowserInfo.BROWSER_NAME_IE;

		if (/msie/i.test(M[1])) {
			info.version = parseInt(M[2]);
		} else {
			tem =  /\brv[ :]+(\d+)/g.exec(ua) || [];
			info.version = parseInt(tem[1]);
		}
		
		return info;
	}

	if (M[1] === 'Chrome') {
		tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
		if (tem != null) {
			info.name = tem[1].replace('OPR', 
				EndUserBrowserInfo.BROWSER_NAME_OPERA);
			info.version = parseInt(tem[2]);
	
			return info;
		}
	}

	M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
	if ((tem = ua.match(/version\/(\d+)/i)) != null) 
		M.splice(1, 1, tem[1]);

	info.name = M[0];
	info.version = parseInt(M[1]);

	return info;
};

//--------------------------------------------------------------------------------

EndUserBrowserInfo.prototype._getOSName = function() {
	var np = navigator.platform || "";
	var ua = (navigator.userAgent || "").toLowerCase();
	var osName;

	if (np.indexOf("Win") != -1) {
		osName = EndUserBrowserInfo.OS_NAME_WINDOWS;
	} else if (np.indexOf("Mac") != -1) {
		osName = EndUserBrowserInfo.OS_NAME_MAC;
	} else if (np.indexOf("Android") != -1 || 
		ua.indexOf("android") != -1) {
		osName = EndUserBrowserInfo.OS_NAME_ANDROID;
	} else if (np.indexOf("Linux") != -1) {
		osName = EndUserBrowserInfo.OS_NAME_LINUX;
	} else if (np.indexOf("FreeBSD") != -1) {
		osName = EndUserBrowserInfo.OS_NAME_UNIX;
	} else {
		osName = EndUserBrowserInfo.OS_NAME_UNKNOWN;
	}
	
	return osName;
};

//--------------------------------------------------------------------------------

EndUserBrowserInfo.prototype._getArch = function() {
	var pThis = this;

	var platform = navigator.platform || "";
	var osName = pThis._getOSName();
	var arch;

	switch (osName) {
		case EndUserBrowserInfo.OS_NAME_WINDOWS:
			arch = (platform.indexOf("Win32") != -1) ?
				EndUserBrowserInfo.BROWSER_ARCH_NAME_X86 : 
				EndUserBrowserInfo.BROWSER_ARCH_NAME_X64;
			break;

		case EndUserBrowserInfo.OS_NAME_MAC:
			arch = (platform.indexOf("MacIntel") != -1) ?
				EndUserBrowserInfo.BROWSER_ARCH_NAME_X86 : 
				EndUserBrowserInfo.BROWSER_ARCH_NAME_X64;
			break;
			
		case EndUserBrowserInfo.OS_NAME_UNIX:
		case EndUserBrowserInfo.OS_NAME_LINUX:
		case EndUserBrowserInfo.OS_NAME_ANDROID:
			arch = (platform.indexOf("armv") != -1) ? 
				EndUserBrowserInfo.BROWSER_ARCH_NAME_ARM : 
				((platform.indexOf("x86_64") != -1) ?
					EndUserBrowserInfo.BROWSER_ARCH_NAME_X64 : 
					EndUserBrowserInfo.BROWSER_ARCH_NAME_X32);
			break;
			
		default:
			arch = EndUserBrowserInfo.BROWSER_ARCH_NAME_UNKNOWN;
	}
	
	return arch;
};

//--------------------------------------------------------------------------------

EndUserBrowserInfo.prototype.GetName = function() {
	return this.m_name;
};

//--------------------------------------------------------------------------------

EndUserBrowserInfo.prototype.GetVersion = function() {
	return this.m_version;
};

//--------------------------------------------------------------------------------

EndUserBrowserInfo.prototype.GetArch = function() {
	return this.m_arch;
};

//--------------------------------------------------------------------------------

EndUserBrowserInfo.prototype.GetOSName = function() {
	return this.m_os_name;
};

//================================================================================
//================================================================================


//================================================================================

// jsonrpcclient.js

//================================================================================
//================================================================================

var JSON_RPC_FIELD_NAME_VERSION					= "jsonrpc";
var JSON_RPC_FIELD_NAME_ID						= "id";
var JSON_RPC_FIELD_NAME_METHOD					= "method";
var JSON_RPC_FIELD_NAME_PARAMS					= "params";
var JSON_RPC_FIELD_NAME_RESULT					= "result";
var JSON_RPC_FIELD_NAME_ERROR					= "error";
var JSON_RPC_FIELD_NAME_ERROR_CODE				= "code";
var JSON_RPC_FIELD_NAME_ERROR_MSG				= "message";
var JSON_RPC_FIELD_NAME_SESSION_ID				= "session_id";

var JSON_RPC_FIELD_VALUE_VERSION				= "2.0";

var JSON_RPC_HTTP_HEADER_CONTENT_TYPE			= "application/json-rpc";

//--------------------------------------------------------------------------------

var JSON_RPC_ERROR_NONE							= 0;
var JSON_RPC_ERROR_UNKNOWN						= -1;

var JSON_RPC_ERROR_TRANSPORT_ERROR				= -32300;

var JSON_RPC_ERROR_SYSTEM_ERROR					= -32400;

var JSON_RPC_ERROR_APPLICATION_ERROR			= -32500;
var JSON_RPC_ERROR_INVALID_SESSION				= -32510;

var JSON_RPC_ERROR_INVALID_REQUEST				= -32600;
var JSON_RPC_ERROR_REQUESTED_METHOD_NOT_FOUND	= -32601;
var JSON_RPC_ERROR_INVALID_METHOD_PARAMS		= -32602;
var JSON_RPC_ERROR_INTERNAL_RPC_ERROR			= -32603;

var JSON_RPC_ERROR_PARSE						= -32700;
var JSON_RPC_ERROR_UNSUPPORTED_ENCODING			= -32701;
var JSON_RPC_ERROR_INVALID_ENCODING				= -32702;

var JSON_RPC_ERRORS_STRINGS = [];
JSON_RPC_ERRORS_STRINGS[JSON_RPC_ERROR_NONE] 						= "Executed successfully";
JSON_RPC_ERRORS_STRINGS[JSON_RPC_ERROR_UNKNOWN] 					= "Unknown error";

JSON_RPC_ERRORS_STRINGS[JSON_RPC_ERROR_TRANSPORT_ERROR] 			= "Transport error";

JSON_RPC_ERRORS_STRINGS[JSON_RPC_ERROR_SYSTEM_ERROR]				= "System error";

JSON_RPC_ERRORS_STRINGS[JSON_RPC_ERROR_APPLICATION_ERROR] 			= "Application error";
JSON_RPC_ERRORS_STRINGS[JSON_RPC_ERROR_INVALID_SESSION] 			= "Application error. Invalid session";

JSON_RPC_ERRORS_STRINGS[JSON_RPC_ERROR_INVALID_REQUEST] 			= "Server error. Invalid rpc. Not conforming to spec";
JSON_RPC_ERRORS_STRINGS[JSON_RPC_ERROR_REQUESTED_METHOD_NOT_FOUND] 	= "Server error. Requested method not found";
JSON_RPC_ERRORS_STRINGS[JSON_RPC_ERROR_INVALID_METHOD_PARAMS]		= "Server error. Invalid method parameters";
JSON_RPC_ERRORS_STRINGS[JSON_RPC_ERROR_INTERNAL_RPC_ERROR] 			= "Server error. Internal rpc error";

JSON_RPC_ERRORS_STRINGS[JSON_RPC_ERROR_PARSE] 						= "Parse error. Not well formed";
JSON_RPC_ERRORS_STRINGS[JSON_RPC_ERROR_UNSUPPORTED_ENCODING] 		= "Parse error. Unsupported encoding";
JSON_RPC_ERRORS_STRINGS[JSON_RPC_ERROR_INVALID_ENCODING] 			= "Parse error. Invalid character for encoding";

//================================================================================

var JSON_RPC_CLIENT_TYPE_SIGN_AGENT		= 1;
var JSON_RPC_CLIENT_TYPE_WEB_EXTENSION	= 2;
var JSON_RPC_CLIENT_TYPE_NPAPI			= 3;
var JSON_RPC_CLIENT_TYPE_ACTIVE_X		= 4;

//================================================================================

var JSONRPCClient = function(type, address, port, useHttps) {
	this.Vendor = "JSC IIT";
	this.ClassVersion = "1.0.2";
	this.ClassName = "JSONRPCClient";

	this.m_type = type;
	this.m_log = false;

	this._logFunction('Initialize', 
		arguments, 
		['type', 'address', 'port', 'useHttps']);

	switch (type) {
		case JSON_RPC_CLIENT_TYPE_WEB_EXTENSION:
			this.m_uri = address;
			this.m_callbacks = [];
			this._registerOnExtensionRecieveEventHandler();
			break;

		case JSON_RPC_CLIENT_TYPE_NPAPI:
		case JSON_RPC_CLIENT_TYPE_ACTIVE_X:
			this.m_uri = address;
			this.m_callbacks = [];
			break;

		case JSON_RPC_CLIENT_TYPE_SIGN_AGENT:
		default:
			this.m_uri = "";
			if (useHttps && address.indexOf("https://"))
				this.m_uri += "https://";
			else if (address.indexOf("http://") != 0)
				this.m_uri += "http://";

			this.m_uri += address + ":" + port;
			break;
	}

	this.m_requests = 0;

	this.m_session_id = this._loadSessionId();
};

//--------------------------------------------------------------------------------

JSONRPCClient.prototype._logFunction = function(funcName, args, argsNames) {
	if (!this.m_log)
		return;

	var str = '(';
	for (var i = 0; i < args.length; i++) {
		str += argsNames[i] + ': ' + args[i].toString();
		if (i != (args.length - 1))
			str += ', ';
	}
	str += ')';

	this._log(funcName, str);
};

//--------------------------------------------------------------------------------

JSONRPCClient.prototype._log = function(funcName, data) {
	if (!this.m_log)
		return;

	console.log(funcName + ': ' + data);
};

//--------------------------------------------------------------------------------

JSONRPCClient.prototype._loadSessionId = function() {
	try {
		var session = sessionStorage.getItem(this.ClassName + 
			JSON_RPC_FIELD_NAME_SESSION_ID);
		if ((typeof session == "undefined") ||
				(session == null) || (session == "")) {
			return null;
		}

		return session;
	} catch (e) {
		return null;
	}
};

//--------------------------------------------------------------------------------

JSONRPCClient.prototype._saveSessionId = function(sessionId) {
	try {
		sessionStorage.setItem(this.ClassName + 
			JSON_RPC_FIELD_NAME_SESSION_ID, sessionId);
	} catch (e) {
	}
};

//--------------------------------------------------------------------------------

JSONRPCClient.prototype._removeSessionId = function() {
	try {
		sessionStorage.removeItem(this.ClassName + 
			JSON_RPC_FIELD_NAME_SESSION_ID);
	} catch (e) {
	}
};

//--------------------------------------------------------------------------------

JSONRPCClient.prototype.createXMLHttpRequest = function() {
	if (typeof XMLHttpRequest == 'undefined') {
		XMLHttpRequest = function() {
			try { return new ActiveXObject("Msxml2.XMLHTTP.6.0"); }
				catch(e) {}
			try { return new ActiveXObject("Msxml2.XMLHTTP.3.0"); }
				catch(e) {}
			try { return new ActiveXObject("Msxml2.XMLHTTP"); }
				catch(e) {}
			try { return new ActiveXObject("Microsoft.XMLHTTP"); }
				catch(e) {}
			throw JSON_RPC_ERRORS_STRINGS[JSON_RPC_ERROR_TRANSPORT_ERROR];
		};
	}

	return new XMLHttpRequest();
};

//--------------------------------------------------------------------------------

JSONRPCClient.prototype.makeRequest = function(method, params, id) {
	var request = null;

	try {
		request = {};

		request[JSON_RPC_FIELD_NAME_VERSION] = JSON_RPC_FIELD_VALUE_VERSION;
		request[JSON_RPC_FIELD_NAME_ID] = id;
		request[JSON_RPC_FIELD_NAME_METHOD] = method;
		request[JSON_RPC_FIELD_NAME_PARAMS] = params;
		request[JSON_RPC_FIELD_NAME_SESSION_ID] = this.m_session_id;

		request = JSON.stringify(request);
	} catch (e) {

	}

	return request;
};

//--------------------------------------------------------------------------------

JSONRPCClient.prototype.verifyResponse = function(request_id, response) {
	try {
		if (response[JSON_RPC_FIELD_NAME_VERSION] != 
				JSON_RPC_FIELD_VALUE_VERSION) {
			return false;
		}

		var error = response[JSON_RPC_FIELD_NAME_ERROR];
		if (typeof error == 'undefined') {
			if ((response[JSON_RPC_FIELD_NAME_ID] != request_id) ||
				(typeof response[JSON_RPC_FIELD_NAME_RESULT] == 'undefined')) {
				return false;
			}
		} else {
			if (typeof error[JSON_RPC_FIELD_NAME_ERROR_CODE] == 'undefined' || 
					typeof error[JSON_RPC_FIELD_NAME_ERROR_MSG] == 'undefined') {
				return false;
			}

			if (error[JSON_RPC_FIELD_NAME_ERROR_CODE] != JSON_RPC_ERROR_NONE)
				return false;
		}

		if (typeof response[JSON_RPC_FIELD_NAME_SESSION_ID] != 'undefined') {
			if (this.m_session_id != null &&
				response[JSON_RPC_FIELD_NAME_SESSION_ID] != null) {
				if (this.m_session_id != response[JSON_RPC_FIELD_NAME_SESSION_ID])
					return false;
			} else {
				this.m_session_id = response[JSON_RPC_FIELD_NAME_SESSION_ID];
				this._saveSessionId(this.m_session_id);
			}
		}

		return true;
	} catch (e) {
		return false;
	}
};

//--------------------------------------------------------------------------------

JSONRPCClient.prototype.handleResponse = function(request_id, response) {
	try {
		response = JSON.parse(response);

		if (!this.verifyResponse(request_id, response)) {
			this.m_session_id = null;
			this._removeSessionId();
			return null;
		}

		return response;
	} catch (e) {
		return null;
	}
};

//--------------------------------------------------------------------------------

JSONRPCClient.prototype._sendHttp = function(request, request_id, callback) {
	var xhr;
	var response;
	var pThis = this;

	try {
		xhr = this.createXMLHttpRequest();
		xhr.open("POST", this.m_uri, callback != null);
		xhr.setRequestHeader("Content-Type",
			JSON_RPC_HTTP_HEADER_CONTENT_TYPE);

		if (callback != null) {
			xhr.onload = function() {
				if (xhr.status != 200) {
					callback(null);
					return;
				}

				response = pThis.handleResponse(
					request_id, xhr.response);
				if (response == null) {
					callback(null);
					return;
				}

				callback(response[JSON_RPC_FIELD_NAME_RESULT]);

				return;
			};
			
			xhr.onerror = function() {
				callback(null);
			};
		}

		xhr.send(request);

		if (callback != null)
			return;

		if (xhr.status != 200)
			return null;

		response = this.handleResponse(
			request_id, xhr.response);
		if (response == null)
			return null;

		return response[JSON_RPC_FIELD_NAME_RESULT];
	} catch (e) {
		if (callback != null)
			callback(null);
		else
			return null;
	}
};

//--------------------------------------------------------------------------------

JSONRPCClient.prototype._registerOnExtensionRecieveEventHandler = function() {
	var pThis = this;
	window.addEventListener("message", function(event) {
		if (event.data.sender != pThis.m_uri)
			return;

		try {
			var callback_id = event.data.callback_id;
			var callbackObj = pThis.m_callbacks[callback_id - 1];
			delete pThis.m_callbacks[callback_id - 1];
			
			pThis._logFunction('_registerOnExtensionRecieveEventHandler',
				[callbackObj.request_id, event.data.data], 
				['request_id', 'data']);

			var response = pThis.handleResponse(
				callbackObj.request_id, event.data.data);
			if (response == null) {
				callbackObj.callback(null);
				return;
			}

			callbackObj.callback(response[JSON_RPC_FIELD_NAME_RESULT]);
		} catch (e) {
		}
	}, false);
};

//--------------------------------------------------------------------------------

JSONRPCClient.prototype._sendExtension = function(
	request, request_id, callback) {
	var pThis = this;

	pThis._logFunction('_sendExtension',
		[arguments[0], arguments[1]], 
		["request", "request_id"]);

	if (!callback)
		throw 'Synchronous calls for web extensions not supported';

	if (document.getElementsByClassName(pThis.m_uri).length != 1) {
		callback(null);
		return;
	}
	
	try {
		var callbackObj = {
			'request_id': request_id, 
			'callback': callback
		};

		var callback_id = pThis.m_callbacks.push(callbackObj);

		var rpcRequest = {
			sender: pThis.ClassName,
			request: request,
			callback_id: callback_id
		};

		window.postMessage(rpcRequest, "*");
	} catch (e) {
		callback(null);
	}
};

//--------------------------------------------------------------------------------

JSONRPCClient.prototype._getPluginObject = function() {
	try {
		var objects = document.getElementsByTagName("object");
		for (var i = 0; i < objects.length; i++) {
			var classid = objects[i].classid;
			if (!classid && 
					objects[i].attributes &&
					objects[i].attributes['classid']) {
				classid = objects[i].attributes['classid'].value;
			}
			if (classid === this.m_uri)
				return objects[i];
		}
		return null;
	} catch (e) {
		return null;
	}
};

//--------------------------------------------------------------------------------

JSONRPCClient.prototype._sendPlugin = function(
	request, request_id, callback) {
	var response;
	var pThis = this;

	pThis._logFunction('_sendPlugin',
		[arguments[0], arguments[1]], 
		["request", "request_id"]);

	var pluginObject = pThis._getPluginObject();
	if (pluginObject == null) {
		if (callback != null)
			callback(null);
		return null;
	}

	var _pluginMakeExchange = function(request) {
		try {
			var PLUGIN_MESSAGE_HEADER_SIZE = 5;
			var PLUGIN_MESSAGE_HEADER_PART = "\"part";
			var PLUGIN_MESSAGE_HEADER_LAST = "\"last";
			var PLUGIN_MESSAGE_HEADER_NEXT = "\"next\"";
			var base64Coder = new EndUserBase64Coder();
			var buffer = new EndUserUint8Array(0);

			while (true) {	
				var response = pluginObject.ProcessData(request);

				var header = response.slice(0, PLUGIN_MESSAGE_HEADER_SIZE);
				var body = response.slice(PLUGIN_MESSAGE_HEADER_SIZE, 
					response.length - 1);

				if (body != null || body != '') {
					var part = base64Coder.decode(body);
					var _tmpBuffer = new EndUserUint8Array(
						buffer.length + part.length);

					_tmpBuffer.set(buffer);
					_tmpBuffer.set(part, buffer.length);

					buffer = _tmpBuffer;
				}

				switch (header) {
					case PLUGIN_MESSAGE_HEADER_PART:
						request = PLUGIN_MESSAGE_HEADER_NEXT;
						continue;

					case PLUGIN_MESSAGE_HEADER_LAST:
						return EndUserStringCoder.ArrayToString(
							EU_SIGN_CP_ENCODING_UTF_8, buffer);
	
					default:
						return null;
				}
			}
		} catch (e) {
			return null;
		}
	};
	
	try {
		if (callback != null) {
			setTimeout(function() {
				response = _pluginMakeExchange(request);

				pThis._logFunction('_sendPlugin',
					[request_id, response], 
					['request_id', 'response']);

				response = pThis.handleResponse(
					request_id, response);
				if (response == null) {
					callback(null);
					return;
				}

				callback(response[JSON_RPC_FIELD_NAME_RESULT]);
			}, 1);
			
			return;
		}

		response = _pluginMakeExchange(request);
		response = pThis.handleResponse(
			request_id, response);
		if (response == null)
			return null;

		return response[JSON_RPC_FIELD_NAME_RESULT];
	} catch (e) {
		callback(null);
	}
};

//--------------------------------------------------------------------------------

JSONRPCClient.prototype.send = function(
	request, request_id, callback) {
	var pThis = this;

	switch (pThis.m_type) {
		case JSON_RPC_CLIENT_TYPE_SIGN_AGENT:
			return pThis._sendHttp(request, request_id, callback);

		case JSON_RPC_CLIENT_TYPE_WEB_EXTENSION:
			return pThis._sendExtension(request, request_id, callback);
		
		case JSON_RPC_CLIENT_TYPE_NPAPI:
		case JSON_RPC_CLIENT_TYPE_ACTIVE_X:
			return pThis._sendPlugin(request, request_id, callback);
	}
};

//--------------------------------------------------------------------------------

JSONRPCClient.prototype.execute = function(method, params, callback) {
	var request_id;
	var request;

	request_id = this.m_requests;
	this.m_requests++;

	request = this.makeRequest(method, params, request_id);
	if (request == null) {
		if (callback != null) {
			callback(null);
			return;
		}

		return null;
	}

	if (callback != null) {
		this.send(request, request_id, callback);
		return;
	}

	return this.send(request, request_id, callback);
};

//================================================================================

//================================================================================


//================================================================================

// eustrings.js

//================================================================================
//================================================================================

var EndUserStrings = function() {
};

//================================================================================

EndUserStrings.WEB_LIBRARY_OS_NOT_SUPPORTED = 0x20000;
EndUserStrings.WEB_LIBRARY_NOT_INSTALLED_OR_RUN = 0x20001;
EndUserStrings.WEB_LIBRARY_JAVA_APPLET_NOT_LOADED = 0x20002;

EndUserStrings.WEB_LIBRARY_INSTALLED_VERSION_NOT_SUPPORTED = 0x20003;
EndUserStrings.WEB_LIBRARY_INSTALL_PACKAGE = 0x20004;
EndUserStrings.WEB_LIBRARY_UPDATE_PACKAGE = 0x20005;
EndUserStrings.WEB_LIBRARY_USER_MANUAL = 0x20006;
EndUserStrings.WEB_LIBRARY_WEB_EXTENSION_INSTALL_PACKAGE = 0x20007;
EndUserStrings.WEB_LIBRARY_CHECK_JRE_VERSION = 0x20008;
EndUserStrings.WEB_LIBRARY_WEB_EXTENSION_NOT_INSTALLED_OR_RUN = 0x20009;

//--------------------------------------------------------------------------------

EndUserStrings.DESCRIPTIONS = [];
EndUserStrings.DESCRIPTIONS[
	EndUserStrings.WEB_LIBRARY_OS_NOT_SUPPORTED] = 
[
	'Інсталяційний пакет web-бібліотеки підпису для вашої системи відсутній', 
	'Инсталяционный  пакет web-библиотеки подписи для вашей системы отсутствует',
	'The installation package of the library for the web signature for your system is absent'
];
EndUserStrings.DESCRIPTIONS[
	EndUserStrings.WEB_LIBRARY_NOT_INSTALLED_OR_RUN] = 
[
	'Бібліотеку web-підпису не запущено або не інстальовано у системі. Для продовження необхідно запустити або інсталювати бібліотеку web-підпису.', 
	'Библиотеку web-подписи не запущено или не установлено в системе. Для продолжения необходимо запустить или установить библиотеку web-подписи.', 
	'The library for the web signature isn\'t started or not installed in system. To continue, it is necessary to start or install library for the web signature.'
];
EndUserStrings.DESCRIPTIONS[
	EndUserStrings.WEB_LIBRARY_INSTALLED_VERSION_NOT_SUPPORTED] = 
[
	'Інстальована версія web-бібліотеки підпису більше не підтримується. Для продовження необхідно інсталювати оновлену версію web-бібліотеки підпису.', 
	'Инсталированная версия web-библиотеки подписи больше не поддерживается. Для продолжения необходимо установить обновленную версию web-библиотеки подписи.', 
	'The installed version of library for the web signature isn\'t supported any more. To continue, it is necessary to install the updated version of the library for the web signature.'
];
EndUserStrings.DESCRIPTIONS[
	EndUserStrings.WEB_LIBRARY_JAVA_APPLET_NOT_LOADED] = 
[
	'Java-апплет не завантажено. Необхідно перевірити версію JRE', 
	'Java-апплет не загружен. Необходимо проверить версию JRE', 
	'Java applet isn\'t loaded. It is necessary to check the version of JRE'
];
EndUserStrings.DESCRIPTIONS[
	EndUserStrings.WEB_LIBRARY_INSTALL_PACKAGE] = 
[
	'Інсталяційний пакет web-бібліотеки підпису',
	'Инсталяционный пакет web-библиотеки подписи', 
	'Install package of library for the web signature'
];
EndUserStrings.DESCRIPTIONS[
	EndUserStrings.WEB_LIBRARY_UPDATE_PACKAGE] = 
[
	'Оновлення web-бібліотеки підпису', 
	'Обновление web-библиотеки подписи', 
	'Update of library for the web signature'
];
EndUserStrings.DESCRIPTIONS[
	EndUserStrings.WEB_LIBRARY_USER_MANUAL] = 
[
	'Настанова користувача', 
	'Руководство пользователя', 
	'User manual'
];
EndUserStrings.DESCRIPTIONS[
	EndUserStrings.WEB_LIBRARY_WEB_EXTENSION_INSTALL_PACKAGE] = 
[
	'Інсталяційний пакет бібліотеки підпису (web-розширення)',
	'Инсталяционный пакет библиотеки подписи (web-расширение)', 
	'Install package of library for the web signature (web-extension)'
];
EndUserStrings.DESCRIPTIONS[
	EndUserStrings.WEB_LIBRARY_CHECK_JRE_VERSION] = 
[
	'Перевірити версію JRE', 
	'Проверить версию JRE', 
	'Check JRE version'
];
EndUserStrings.DESCRIPTIONS[
	EndUserStrings.WEB_LIBRARY_WEB_EXTENSION_NOT_INSTALLED_OR_RUN] = 
[
	'Веб-розширення для роботи бібліотеки web-підпису не запущено або не інстальовано в браузері. Для продовження необхідно запустити або інсталювати веб-розширення.', 
	'Веб-расширение для работы библиотеки web-подписи не запущено или не установлено в браузере. Для продолжения необходимо запустить или установить веб-расширение.', 
	'The web extension for the web signature library is not running or installed in the browser. To continue, you need to run or install the web extension.'
];

//--------------------------------------------------------------------------------

EndUserStrings.getString = function(string, language) {
	var descrArr;
	var descr;

	descrArr = EndUserStrings.DESCRIPTIONS[string];
	if (typeof descrArr == 'undefined') {
		descrArr = "";
	}

	descr = descrArr[language - 1];
	if (typeof descr == 'undefined')
		return descrArr[0];

	return descr;
};

//================================================================================

//================================================================================


//================================================================================

// euswll.js

//================================================================================
//=============================================================================

var EndUserLibraryLoader = function(libraryType, id, language, 
	noJavaApplet, webExtensionFirst) {
	this.m_id = id;
	this.m_library = null;
	this.m_language = language;
	this.m_supportedLibraryTypes = [];
	this.m_supportedLibraryTypesIndex = 0;
	this.m_noJavaApplet = noJavaApplet | false;
	this.m_webExtensionFirst = webExtensionFirst | false;
	this.m_errorResult = null;

	switch (libraryType) {
		case EndUserLibraryLoader.LIBRARY_TYPE_JAVA_APPLET:
		case EndUserLibraryLoader.LIBRARY_TYPE_SIGN_AGENT:
		case EndUserLibraryLoader.LIBRARY_TYPE_WEB_EXTENSION:
		case EndUserLibraryLoader.LIBRARY_TYPE_NPAPI:
		case EndUserLibraryLoader.LIBRARY_TYPE_ACTIVE_X:
			this.m_libraryType = libraryType;
			break;

		default:
			this.m_libraryType = EndUserLibraryLoader.LIBRARY_TYPE_DEFAULT;
			break;
	}

	if (this.m_libraryType == EndUserLibraryLoader.LIBRARY_TYPE_DEFAULT) {
		if (this.m_webExtensionFirst && 
				EndUserLibraryLoader.isWebExtensionSupported()) {
			this.m_supportedLibraryTypes.push(
				EndUserLibraryLoader.LIBRARY_TYPE_WEB_EXTENSION);
		}

		if (EndUserLibraryLoader.isSignAgentSupported()) {
			this.m_supportedLibraryTypes.push(
				EndUserLibraryLoader.LIBRARY_TYPE_SIGN_AGENT);
		}

		if (!this.m_webExtensionFirst && 
				EndUserLibraryLoader.isWebExtensionSupported()) {
			this.m_supportedLibraryTypes.push(
				EndUserLibraryLoader.LIBRARY_TYPE_WEB_EXTENSION);
		}

		if (EndUserLibraryLoader.isNPAPISupported()) {
			this.m_supportedLibraryTypes.push(
				EndUserLibraryLoader.LIBRARY_TYPE_NPAPI);
		}

		if (EndUserLibraryLoader.isActiveXSupported()) {
			this.m_supportedLibraryTypes.push(
				EndUserLibraryLoader.LIBRARY_TYPE_ACTIVE_X);
		}
		
		if (!this.m_noJavaApplet && 
				EndUserLibraryLoader.isJavaAppletSupported()) {
			this.m_supportedLibraryTypes.push(
				EndUserLibraryLoader.LIBRARY_TYPE_JAVA_APPLET);
		}
	} else {
		this.m_supportedLibraryTypes.push(this.m_libraryType);
	}

	this.onload = function(library){};
	this.onerror = function(msg, errorCode, libraryOrNull){};
	this.getLibraryType = function() {return this.m_libraryType;};
};

//=============================================================================

EndUserLibraryLoader.LIBRARY_TYPE_DEFAULT		= 0;
EndUserLibraryLoader.LIBRARY_TYPE_JAVA_APPLET	= 1;
EndUserLibraryLoader.LIBRARY_TYPE_SIGN_AGENT	= 2;
EndUserLibraryLoader.LIBRARY_TYPE_WEB_EXTENSION	= 3;
EndUserLibraryLoader.LIBRARY_TYPE_NPAPI			= 4;
EndUserLibraryLoader.LIBRARY_TYPE_ACTIVE_X		= 5;

EndUserLibraryLoader.EU_DEFAULT_LANG = 0;
EndUserLibraryLoader.EU_UA_LANG = 1;
EndUserLibraryLoader.EU_RU_LANG = 2;
EndUserLibraryLoader.EU_EN_LANG = 3;

//=============================================================================

EndUserLibraryLoader.isJavaAppletSupported = function() {
	var info = new EndUserBrowserInfo();

	if (this.m_noJavaApplet)
		return false;
	
	switch (info.GetName()) {
		case EndUserBrowserInfo.BROWSER_NAME_FIREFOX:
			if (info.GetVersion() > 44)
				return false;
			return true;
			
		case EndUserBrowserInfo.BROWSER_NAME_CHROME:
			if (info.GetVersion() > 44)
				return false;
			return true;
		
		case EndUserBrowserInfo.BROWSER_NAME_OPERA:
			if (info.GetVersion() > 30)
				return false;
			return true;

		case EndUserBrowserInfo.BROWSER_NAME_EDGE:
		case EndUserBrowserInfo.BROWSER_NAME_UNKNOWN:
			return false;

		default:
			return true;
	}
};

//-----------------------------------------------------------------------------

EndUserLibraryLoader.isSignAgentSupported = function() {
	var info = new EndUserBrowserInfo();

	switch (info.GetName()) {
		case EndUserBrowserInfo.BROWSER_NAME_IE:
			if (info.GetVersion() < 10)
				return false;
			break;

		case EndUserBrowserInfo.BROWSER_NAME_SAFARI:
			if (info.GetVersion() < 7)
				return false;
			break;

		case EndUserBrowserInfo.BROWSER_NAME_UNKNOWN:
			return false;

		default:
			break;
	}

	switch (info.GetOSName()) {
		case EndUserBrowserInfo.OS_NAME_WINDOWS:
			break;

		case EndUserBrowserInfo.OS_NAME_MAC:
			break;

		case EndUserBrowserInfo.OS_NAME_ANDROID:
			/*break;*/
			return false;

		case EndUserBrowserInfo.OS_NAME_UNKNOWN:
			return false;

		default:
			return false;
	}

	return true;
};

//-----------------------------------------------------------------------------

EndUserLibraryLoader.isWebExtensionSupported = function() {
	var info = new EndUserBrowserInfo();

	switch (info.GetName()) {
		case EndUserBrowserInfo.BROWSER_NAME_CHROME:
			break;

		case EndUserBrowserInfo.BROWSER_NAME_OPERA:
			if (info.GetVersion() < 35)
				return false;
			break;

		case EndUserBrowserInfo.BROWSER_NAME_FIREFOX:
			if (info.GetVersion() < 50)
				return false;
			break;

		case EndUserBrowserInfo.BROWSER_NAME_UNKNOWN:
			return false;

		default:
			return false;
	}

	switch (info.GetOSName()) {
		case EndUserBrowserInfo.OS_NAME_ANDROID:
		case EndUserBrowserInfo.OS_NAME_UNKNOWN:
			return false;

		default:
			break;
	}

	return true;
};

//-----------------------------------------------------------------------------

EndUserLibraryLoader.isNPAPISupported = function() {
	var info = new EndUserBrowserInfo();

	switch (info.GetName()) {
		case EndUserBrowserInfo.BROWSER_NAME_FIREFOX:
			if (info.GetVersion() > 51)
				return false;
			break;

		default:
			return false;
	}

	return true;
};

//-----------------------------------------------------------------------------

EndUserLibraryLoader.isActiveXSupported = function() {
	var info = new EndUserBrowserInfo();

	switch (info.GetName()) {
		case EndUserBrowserInfo.BROWSER_NAME_IE:
			if (info.GetVersion() < 9 || 
				(info.GetArch() == EndUserBrowserInfo.BROWSER_ARCH_NAME_X64)) {
				return false;
			}
			break;

		default:
			return false;
	}

	return true;
};

//-----------------------------------------------------------------------------

EndUserLibraryLoader.isWebExtensionInstalled = function() {
	var info = new EndUserBrowserInfo();
	var webExtensionAddress = (info.GetName() == 
		EndUserBrowserInfo.BROWSER_NAME_FIREFOX) ? 
		EU_SIGN_WEB_EXTENSION_ADDRESS_FIREFOX : 
		EU_SIGN_WEB_EXTENSION_ADDRESS;

	if (document.getElementsByClassName(webExtensionAddress).length != 1)
		return false;

	return true;
};

//=============================================================================

EndUserLibraryLoader.prototype.getLibraryType = function() {
	return this.m_libraryType;
};

//-----------------------------------------------------------------------------

EndUserLibraryLoader.prototype.load = function() {
	var pThis = this;

	setTimeout(function() {
		pThis._load(pThis.m_supportedLibraryTypes[
			pThis.m_supportedLibraryTypesIndex]);
		}, 1);
};

//-----------------------------------------------------------------------------

EndUserLibraryLoader.prototype.unload = function() {
	var el = document.getElementById(this.m_id);
	if (el && el.parentNode)
		el.parentNode.removeChild(el);
};

//=============================================================================

EndUserLibraryLoader.prototype._load = function(libraryType) {
	switch (libraryType) {
		case EndUserLibraryLoader.LIBRARY_TYPE_JAVA_APPLET: {
			this._loadSignApplet();
			return;
		}

		case EndUserLibraryLoader.LIBRARY_TYPE_SIGN_AGENT: {
			this._loadSignAgent();
			return;
		}

		case EndUserLibraryLoader.LIBRARY_TYPE_WEB_EXTENSION: {
			this._loadWebExtension();
			return;
		}
		
		case EndUserLibraryLoader.LIBRARY_TYPE_NPAPI: {
			this._loadNPAPI();
			return;
		}
		
		case EndUserLibraryLoader.LIBRARY_TYPE_ACTIVE_X: {
			this._loadActiveX();
			return;
		}	
	}
};

//-----------------------------------------------------------------------------

EndUserLibraryLoader.prototype._onLoad = function() {
	this.m_libraryType = this.m_supportedLibraryTypes[
		this.m_supportedLibraryTypesIndex];
	try {
		this.onload(this.m_library);
	} catch (e) {
		console.log(e);
	}
};

//-----------------------------------------------------------------------------

EndUserLibraryLoader.prototype._onLoadError = function(
	loadNext, msg, code, library) {
	if (this.m_errorResult == null) {
		this.m_errorResult = {
			"msg": msg,
			"code": code,
			"library": library
		};
	}

	var el = document.getElementById(this.m_id);
	if (el && el.parentNode)
		el.parentNode.removeChild(el);

	if (!loadNext) {
		try {
			this.onerror(
				this.m_errorResult.msg, 
				this.m_errorResult.code,
				this.m_errorResult.library);
		} catch (e) {
			console.log(e);
		}
		return;
	}

	this.m_supportedLibraryTypesIndex++;
	if (this.m_supportedLibraryTypesIndex >= 
			this.m_supportedLibraryTypes.length) {
		try {
			this.onerror(
				this.m_errorResult.msg, 
				this.m_errorResult.code,
				this.m_errorResult.library);
		} catch (e) {
			console.log(e);
		}
		return;
	}

	this.load();
};

//-----------------------------------------------------------------------------

EndUserLibraryLoader.prototype._loadSignApplet = function() {
	var applet = document.createElement("applet");

	applet.setAttribute("codebase", EU_SIGN_APPLET_CODEBASE);
	applet.setAttribute("code", EU_SIGN_APPLET_CODE);
	applet.setAttribute("archive", EU_SIGN_APPLET_NAME);
	applet.setAttribute("cache_archive", EU_SIGN_APPLET_NAME);
	applet.setAttribute("cache_version", EU_SIGN_APPLET_VERSION);
	applet.setAttribute("separate_jvm", true);

	applet.setAttribute("id", this.m_id);
	applet.setAttribute("width", "100%");
	applet.setAttribute("height", "1");

	document.body.appendChild(applet);

	this.m_library = document.getElementById(this.m_id);

	this._waitForSignAppletLoad(this, 
		EU_SIGN_APPLET_LOAD_DELAY,
		EU_SIGN_APPLET_LOAD_WAITS);
};

//-----------------------------------------------------------------------------

EndUserLibraryLoader.prototype._waitForSignAppletLoad = function(
	pThis, delay, waits) {
	try {
		pThis.m_library.SetUIMode(false);
	} catch (e) {
		if (waits != 0) {
			setTimeout(function () {
				pThis._waitForSignAppletLoad(
					pThis, delay, waits - 1);
			}, delay, waits);
			return;
		}

		var msg = '';

		msg = EndUserError.getErrorDescriptionEx(
			EndUserError.ERROR_LIBRARY_COMUNICATION_FAILED, 
			pThis.m_language) + '. ';
		msg += EndUserStrings.getString(
			EndUserStrings.WEB_LIBRARY_JAVA_APPLET_NOT_LOADED,
			pThis.m_language);

		msg += '<br><br>';

		msg += '<a style="text-indent:18px" href="' + 
			EU_SIGN_APPLET_CHECK_JRE_URL + '">' + 
			EndUserStrings.getString(
				EndUserStrings.WEB_LIBRARY_CHECK_JRE_VERSION,
				pThis.m_language) + '</a>';

		pThis._onLoadError(true, msg,
			EndUserError.ERROR_LIBRARY_COMUNICATION_FAILED,
			null);

		return;
	}

	pThis._onLoad(pThis.m_library);
};

//=============================================================================

EndUserLibraryLoader.prototype._appendWebWrapperObject = function(
	address, port, isAddressClassId, isActiveX) {
	try {
		var library = new EUSignCP(address, port);

		var object = document.createElement("object");
		object.setAttribute("id", this.m_id);
		if (isAddressClassId) {
			if (isActiveX) {
				object.setAttribute("classid", address);
				object.setAttribute("height", "1px");
			} else {
				object.type = address;
				object.classid = address;
				object.height = "1px";
			}
		} else {
			object.classid = "EUSignCP.class";
			object.style = "display:none";
			object.style.visibility = "hidden";
		}
		document.body.appendChild(object);

		for (var field in library)
			object[field] = library[field];

		this.m_library = document.getElementById(this.m_id);

		return true;
	} catch (e) {
		return false;
	}
};

//-----------------------------------------------------------------------------

EndUserLibraryLoader.prototype._onLoadWebLibraryError = function(error) {
	var pThis = this;
	var library = pThis.m_library;

	var loadNext = true;
	var installWebExt = false;
	var msg = '';

	installWebExt = EndUserLibraryLoader.isWebExtensionSupported() && 
		!EndUserLibraryLoader.isWebExtensionInstalled() && 
		pThis.m_webExtensionFirst;

	msg += EndUserError.getErrorDescriptionEx(
		EndUserError.ERROR_LIBRARY_COMUNICATION_FAILED, 
		pThis.m_language);

	msg += ". ";

	switch (error.GetErrorCode()) {
		case EndUserError.ERROR_LIBRARY_COMUNICATION_FAILED:
			msg += EndUserStrings.getString(installWebExt ? 
				EndUserStrings.WEB_LIBRARY_WEB_EXTENSION_NOT_INSTALLED_OR_RUN :
				EndUserStrings.WEB_LIBRARY_NOT_INSTALLED_OR_RUN,
				pThis.m_language);
		break;
		
		case EndUserError.ERROR_LIBRARY_VERSION_NOT_SUPPORTED:
			msg += EndUserStrings.getString(
				EndUserStrings.WEB_LIBRARY_INSTALLED_VERSION_NOT_SUPPORTED,
				pThis.m_language);
			loadNext = false;
			pThis.m_errorResult = null;
		break;

		default:
			msg += EndUserError.getErrorDescriptionEx(
				error.GetErrorCode(), pThis.m_language) + ".";
			break;
	} 

	msg += '<br><br>';

	if (library.GetInstallURL() != null) {
		if (error.GetErrorCode() == 
				EndUserError.ERROR_LIBRARY_VERSION_NOT_SUPPORTED) {
			msg += '<div><a style="text-indent:18px" href="' + 
				library.GetUpdateURL() + '">' + 
				EndUserStrings.getString(
					EndUserStrings.WEB_LIBRARY_UPDATE_PACKAGE, 
					pThis.m_language) + '</a></div>';
		} else {
			if (installWebExt) {
				msg += '<div><a style="text-indent:18px" href="' + 
					library.GetWebExtensionInstallURL() + '">' + 
					EndUserStrings.getString(
						EndUserStrings.WEB_LIBRARY_WEB_EXTENSION_INSTALL_PACKAGE, 
						pThis.m_language) + '</a></div>';
			} else {
				msg += '<div><a style="text-indent:18px" href="' + 
					library.GetInstallURL() + '">' + 
					EndUserStrings.getString(
						EndUserStrings.WEB_LIBRARY_INSTALL_PACKAGE, 
						pThis.m_language) + '</a></div>';
			}
		}

		msg += '<div><a style="text-indent:18px" href="' + 
			library.GetHelpURL() + '">' + 
			EndUserStrings.getString(
				EndUserStrings.WEB_LIBRARY_USER_MANUAL, 
				pThis.m_language) + '</a></div>';
	} else {
		msg += "<div>" + EndUserStrings.getString(
			EndUserStrings.WEB_LIBRARY_OS_NOT_SUPPORTED, 
			pThis.m_language) + "</div>";
	}

	pThis._onLoadError(loadNext, msg,
		error.GetErrorCode(), library);
};

//-----------------------------------------------------------------------------

EndUserLibraryLoader.prototype._loadWebLibrary = function() {
	var pThis = this;

	pThis.m_library.Load(
		function() {
			pThis._onLoad();
		}, 
		function(error) {
			pThis._onLoadWebLibraryError(error);
		});
};

//-----------------------------------------------------------------------------

EndUserLibraryLoader.prototype._loadSignAgent = function() {
	if (!this._appendWebWrapperObject(
			EU_SIGN_AGENT_DEFAULT_ADDRESS, 
			(window.location.protocol == 'http:') ? 
				EU_SIGN_AGENT_DEFAULT_HTTP_POPT : 
				EU_SIGN_AGENT_DEFAULT_HTTPS_POPT, 
			false, false)) {
		
		var msg = EndUserError.getErrorDescriptionEx(
			EndUserError.ERROR_LIBRARY_COMUNICATION_FAILED, 
			this.m_language);
		this._onLoadError(true, msg, 
			EndUserError.ERROR_LIBRARY_COMUNICATION_FAILED,
			null);
		return;
	}

	this._loadWebLibrary();
};

//-----------------------------------------------------------------------------

EndUserLibraryLoader.prototype._loadWebExtension = function() {
	if (!this._appendWebWrapperObject(
			EU_SIGN_WEB_EXTENSION_ADDRESS, "", false, false)) {
		var msg = EndUserError.getErrorDescriptionEx(
			EndUserError.ERROR_LIBRARY_COMUNICATION_FAILED, 
			this.m_language);
		this._onLoadError(true, msg, 
			EndUserError.ERROR_LIBRARY_COMUNICATION_FAILED,
			null);
		return;
	}

	this._loadWebLibrary();
};

//=============================================================================

EndUserLibraryLoader.prototype._loadPlugin = function(
	classId, loadDelay, loadWaits, isActiveX) {
	if (!this._appendWebWrapperObject(
			classId, "", true, isActiveX)) {
		var msg = EndUserError.getErrorDescriptionEx(
			EndUserError.ERROR_LIBRARY_COMUNICATION_FAILED, 
			this.m_language);
		this._onLoadError(true, msg, 
			EndUserError.ERROR_LIBRARY_COMUNICATION_FAILED,
			null);
		return;
	}

	this._waitForPluginLoad(this, loadDelay, loadWaits);
};

//-----------------------------------------------------------------------------

EndUserLibraryLoader.prototype._waitForPluginLoad = function(
	pThis, delay, waits) {
	pThis.m_library.Load(
		function() {
			pThis._onLoad();
		},
		function(error) {
			if ((error.GetErrorCode() == 
					EndUserError.ERROR_LIBRARY_COMUNICATION_FAILED) && 
				(waits != 0)) {
				setTimeout(function () {
					pThis._waitForPluginLoad(
						pThis, delay, waits - 1);
				}, delay, waits);
				return;
			}

			pThis._onLoadWebLibraryError(error);
		});
};

//=============================================================================


EndUserLibraryLoader.prototype._loadNPAPI = function() {
	this._loadPlugin(
		EU_SIGN_WEB_NPAPI_ADDRESS, 
		EU_SIGN_WEB_NPAPI_LOAD_DELAY,
		EU_SIGN_WEB_NPAPI_LOAD_WAITS,
		false);
};

//=============================================================================

EndUserLibraryLoader.prototype._loadActiveX = function() {
	this._loadPlugin(
		EU_SIGN_WEB_ACTIVE_X_ADDRESS, 
		EU_SIGN_WEB_ACTIVE_X_LOAD_DELAY,
		EU_SIGN_WEB_ACTIVE_X_LOAD_WAITS,
		true);
};

//=============================================================================

//================================================================================


//================================================================================

// eutypes.js

//================================================================================
//================================================================================

var EU_SIGN_CP_FIELD_NAME_CLASS_VERSION		= 'classVersion';
var EU_SIGN_CP_FIELD_NAME_CLASS_NAME		= 'className';
var EU_SIGN_CP_FIELD_NAME_CLASS_FIELDS		= 'classFields';

//================================================================================

var EndUserArrayList = function() {
	this.vendor = 'JSC IIT';
	this.parentClassName = 'Object';
	this.className = 'EndUserArrayList';
	this.classVersion = 1;
	this.m_array = [];
};

//--------------------------------------------------------------------------------

EndUserArrayList.prototype.add = function(obj) {
	this.m_array.push(obj);
	return true;
};

//--------------------------------------------------------------------------------

EndUserArrayList.prototype.clear = function() {
	this.m_array = [];
};

//--------------------------------------------------------------------------------

EndUserArrayList.prototype.get = function(index) {
	return this.m_array[index];
};

//--------------------------------------------------------------------------------

EndUserArrayList.prototype.size = function() {
	return this.m_array.length;
};

//================================================================================

if (!Object.create) {
	Object.create = function(o, properties) {
		if ((typeof o !== 'object' && typeof o !== 'function') ||
			(o === null) || (typeof properties != 'undefined')) {
			throw new Error('Invalid arguments');
		}

		function F() {}

		F.prototype = o;

		return new F();
	};
}

//--------------------------------------------------------------------------------

if (!Uint8Array.prototype.slice) {
	Uint8Array.prototype.slice = Uint8Array.prototype.subarray;
}

//--------------------------------------------------------------------------------

var EndUserUint8Array = null;
if (typeof Uint8Array == 'undefined') {
	EndUserUint8Array = function(arg1) {
		var result;
		if (typeof arg1 === "number") {
			result = new Array(arg1);
			for (var i = 0; i < arg1; ++i)
				result[i] = 0;
		} else {
			result = arg1.slice(0);
		}

		result.buffer = result;
		result.subarray = function(start, end) {
			return result.slice(start, end);
		};
		result.set = function(array, offset) {
			if (arguments.length < 2) offset = 0;
			for (var i = 0, n = array.length; i < n; ++i, ++offset)
				result[offset] = array[i] & 0xFF;
		};
		result.byteLength = result.length;
		if (typeof arg1 === "object" && arg1.buffer)
		  result.buffer = arg1.buffer;

		return result;
	};
} else {
	EndUserUint8Array = Uint8Array;
}

//--------------------------------------------------------------------------------

function InheritObject(child, parent) {
	child.prototype = Object.create(parent.prototype);
	child.prototype.constructor = child;
}

//================================================================================

function IsEndUserTransferableObject(object) {
	if (object == null || (typeof object != 'object'))
		return false;

	if (object.className != 'EndUserTransferableObject' &&
		 object.parentClassName != 'EndUserTransferableObject') {
		return false;
	}

	return true;
}

//--------------------------------------------------------------------------------

var EndUserTransferableObject = function() {
	this.vendor = 'JSC IIT';
	this.parentClassName = 'Object';
	this.className = 'EndUserTransferableObject';
	this.classVersion = 1;

	this.isFilled = false;

	this.fields = {};
};

//--------------------------------------------------------------------------------

EndUserTransferableObject.makeTransferable = function(objectConstructor) {
	InheritObject(objectConstructor, EndUserTransferableObject);
	EndUserTransferableObject[(new objectConstructor()).className] = 
		objectConstructor;
};

//--------------------------------------------------------------------------------

EndUserTransferableObject.prototype.base64Coder = new EndUserBase64Coder();
EndUserTransferableObject.prototype.dateCoder = new EndUserDateCoder();

//--------------------------------------------------------------------------------

EndUserTransferableObject.prototype.setClassInfo = function(
	name, version) {

	this.parentClassName = 'EndUserTransferableObject';
	this.className = name;
	this.classVersion = version;
};

//--------------------------------------------------------------------------------

EndUserTransferableObject.prototype.initializeFields = function() {
	for (var key in this.fields) {
		switch (this.fields[key]) {
			case 'boolean':
				this[key] = false;
				break;

			case 'int':
			case 'long':
			case 'number':
				this[key] = 0;
				break;

			case 'string':
				this[key] = '';
				break;

			case 'EndUserKeyMedia':
				this[key] = new EndUserKeyMedia();
				break;

			default:
				this[key] = null;
		}
	}
};

//--------------------------------------------------------------------------------

EndUserTransferableObject.prototype.set = function(object) {
	if (this.className != object.className)
		throw 'invalid class';

	for (var key in this.fields)
		this[key] = object[key];
};

//--------------------------------------------------------------------------------

EndUserTransferableObject.prototype.encode = function() {
	var object;
	var fields;

	fields = new Object();
	object = new Object();

	for (var key in this.fields) {
		if (this[key] == null) {
			fields[key] = null;
			continue;
		}

		if (IsEndUserTransferableObject(this[key])) {
			fields[key] = this[key].encode();
		} else if (this.fields[key] == 'byteArray') {
			fields[key] = this.base64Coder.encode(this[key]);
		} else if(this.fields[key] == 'time') {
			fields[key] = this.dateCoder.encode(this[key]);
		} else {
			fields[key] = this[key];
		}
	}

	object[EU_SIGN_CP_FIELD_NAME_CLASS_NAME] = this.className;
	object[EU_SIGN_CP_FIELD_NAME_CLASS_VERSION] = this.classVersion;
	object[EU_SIGN_CP_FIELD_NAME_CLASS_FIELDS] = fields;

	return object;
};

//--------------------------------------------------------------------------------

EndUserTransferableObject.prototype.decode = function(object) {
	try {
		if (object[EU_SIGN_CP_FIELD_NAME_CLASS_VERSION] == null || 
			object[EU_SIGN_CP_FIELD_NAME_CLASS_FIELDS] == null) {
			return false;
		}

		var fields = object[EU_SIGN_CP_FIELD_NAME_CLASS_FIELDS];

		for (var key in this.fields) {
			if (this.fields[key] == 'time') {
				this[key] = this.dateCoder.decode(fields[key]);
			} else if (this.fields[key] == 'EndUserOwnerInfo') {
				this[key] = new EndUserOwnerInfo();
				this[key].decode(fields[key]);
			} else if (this.fields[key] == 'EndUserTimeInfo') {
				this[key] = new EndUserTimeInfo();
				this[key].decode(fields[key]);
			} else if (this.fields[key] == 'EndUserKeyMedia') {
				this[key] = new EndUserKeyMedia();
				this[key].decode(fields[key]);
			} else if (this.fields[key] == 'EndUserCertificateInfoEx') {
				this[key] = new EndUserCertificateInfoEx();
				this[key].decode(fields[key]);
			} else if (this.fields[key] == 'byteArray') {
				if (fields[key] != null)
					this[key] = this.base64Coder.decode(fields[key]);
			} else if (this.fields[key] == 'array') {
				this[key] = [];
				var array = fields[key];
				for (var i = 0; i < array.length; i++) {
					var className = array[i][EU_SIGN_CP_FIELD_NAME_CLASS_NAME];
					var classVariable = new (EndUserTransferableObject[className])();
					if (typeof classVariable !== 'undefined') {
						if (!classVariable.decode(array[i]))
							throw 'invalid class';

						if (classVariable.className == 'EndUserByteArray')
							classVariable = classVariable.GetData();

						this[key].push(classVariable);
					} else {
						this[key].push(array[i]);
					}
				}
			} else {
				this[key] = fields[key];
			}
		}

		return true;
	} catch (e) {
		this.isFilled = false;
		return false;
	}
};

//================================================================================

var EndUserByteArray = function(data) {
	this.setClassInfo('EndUserByteArray', 1);

	this.fields = {
		'data': 'byteArray'
	};

	this.initializeFields();
	this.data = data;
};

EndUserTransferableObject.makeTransferable(EndUserByteArray);

EndUserByteArray.prototype.GetData = function() {
	return this.data;
};

EndUserByteArray.prototype.SetData = function(data) {
	this.data = data;
};

//================================================================================

var EndUserKeyMedia = function() {
	this.setClassInfo('EndUserKeyMedia', 1);

	this.fields = {
		'typeIndex': 'long',
		'devIndex': 'long',
		'password': 'string'
	};

	this.initializeFields();
};

EndUserTransferableObject.makeTransferable(EndUserKeyMedia);

EndUserKeyMedia.prototype.GetTypeIndex = function() {
	return this.typeIndex;
};

EndUserKeyMedia.prototype.SetTypeIndex = function(typeIndex) {
	this.typeIndex = typeIndex;
};

EndUserKeyMedia.prototype.GetDevIndex = function() {
	return this.devIndex;
};

EndUserKeyMedia.prototype.SetDevIndex = function(devIndex) {
	this.devIndex = devIndex;
};

EndUserKeyMedia.prototype.GetPassword = function() {
	return this.password;
};

EndUserKeyMedia.prototype.SetPassword = function(password) {
	this.password = password;
};

//================================================================================

var EndUserFileStoreSettings = function() {
	this.setClassInfo('EndUserFileStoreSettings', 1);

	this.fields = {
		'path': 'string',
		'checkCRLs': 'boolean',
		'autoRefresh': 'boolean',
		'ownCRLsOnly': 'boolean',
		'fullAndDeltaCRLs': 'boolean',
		'autoDownloadCRLs': 'boolean',
		'saveLoadedCerts': 'boolean',
		'expireTime': 'long'
	};

	this.initializeFields();
	this.expireTime = 3600;
};

EndUserTransferableObject.makeTransferable(EndUserFileStoreSettings);

EndUserFileStoreSettings.prototype.GetPath = function() {
	return this.path;
};

EndUserFileStoreSettings.prototype.SetPath = function(path) {
	this.path = path;
};

EndUserFileStoreSettings.prototype.GetCheckCRLs = function() {
	return this.checkCRLs;
};

EndUserFileStoreSettings.prototype.SetCheckCRLs = function(checkCRLs) {
	this.checkCRLs = checkCRLs;
};

EndUserFileStoreSettings.prototype.GetAutoRefresh = function() {
	return this.autoRefresh;
};

EndUserFileStoreSettings.prototype.SetAutoRefresh = function(autoRefresh) {
	this.autoRefresh = autoRefresh;
};

EndUserFileStoreSettings.prototype.GetOwnCRLsOnly = function() {
	return this.ownCRLsOnly;
};

EndUserFileStoreSettings.prototype.SetOwnCRLsOnly = function(ownCRLsOnly) {
	this.ownCRLsOnly = ownCRLsOnly;
};

EndUserFileStoreSettings.prototype.GetFullAndDeltaCRLs = function() {
	return this.fullAndDeltaCRLs;
};

EndUserFileStoreSettings.prototype.SetFullAndDeltaCRLs = function(
	fullAndDeltaCRLs) {
	this.fullAndDeltaCRLs = fullAndDeltaCRLs;
};

EndUserFileStoreSettings.prototype.GetAutoDownloadCRLs = function() {
	return this.autoDownloadCRLs;
};

EndUserFileStoreSettings.prototype.SetAutoDownloadCRLs = function(
	autoDownloadCRLs) {
	this.autoDownloadCRLs = autoDownloadCRLs;
};

EndUserFileStoreSettings.prototype.GetSaveLoadedCerts = function() {
	return this.saveLoadedCerts;
};

EndUserFileStoreSettings.prototype.SetSaveLoadedCerts = function(
	saveLoadedCerts) {
	this.saveLoadedCerts = saveLoadedCerts;
};

EndUserFileStoreSettings.prototype.GetExpireTime = function() {
	return this.expireTime;
};

EndUserFileStoreSettings.prototype.SetExpireTime = function(expireTime) {
	this.expireTime = expireTime;
};

//--------------------------------------------------------------------------------

var EndUserProxySettings = function() {
	this.setClassInfo('EndUserProxySettings', 1);

	this.fields = {
		'useProxy': 'boolean',
		'anonymous': 'boolean',
		'address': 'string',
		'port': 'string',
		'user': 'string',
		'password': 'string',
		'savePassword': 'boolean'
	};

	this.initializeFields();
	this.port = "80";
};

EndUserTransferableObject.makeTransferable(EndUserProxySettings);

EndUserProxySettings.prototype.GetUseProxy = function() {
	return this.useProxy;
};

EndUserProxySettings.prototype.SetUseProxy = function(useProxy) {
	this.useProxy = useProxy;
};

EndUserProxySettings.prototype.GetAnonymous = function() {
	return this.anonymous;
};

EndUserProxySettings.prototype.SetAnonymous = function(anonymous) {
	this.anonymous = anonymous;
};

EndUserProxySettings.prototype.GetAddress = function() {
	return this.address;
};

EndUserProxySettings.prototype.SetAddress = function(address) {
	this.address = address;
};

EndUserProxySettings.prototype.GetPort = function() {
	return this.port;
};

EndUserProxySettings.prototype.SetPort = function(port) {
	this.port = port;
};

EndUserProxySettings.prototype.GetUser = function() {
	return this.user;
};

EndUserProxySettings.prototype.SetUser = function(user) {
	this.user = user;
};

EndUserProxySettings.prototype.GetPassword = function() {
	return this.password;
};

EndUserProxySettings.prototype.SetPassword = function(password) {
	this.password = password;
};

EndUserProxySettings.prototype.GetSavePassword = function() {
	return this.savePassword;
};

EndUserProxySettings.prototype.SetSavePassword = function(savePassword) {
	this.savePassword = savePassword;
};

//--------------------------------------------------------------------------------

var EndUserTSPSettings = function() {
	this.setClassInfo('EndUserTSPSettings', 1);

	this.fields = {
		'getStamps': 'boolean',
		'address': 'string',
		'port': 'string'
	};

	this.initializeFields();
	this.port = "80";
};

EndUserTransferableObject.makeTransferable(EndUserTSPSettings);

EndUserTSPSettings.prototype.GetGetStamps = function() {
	return this.getStamps;
};

EndUserTSPSettings.prototype.SetGetStamps = function(getStamps) {
	this.getStamps = getStamps;
};

EndUserTSPSettings.prototype.GetAddress = function() {
	return this.address;
};

EndUserTSPSettings.prototype.SetAddress = function(address) {
	this.address = address;
};

EndUserTSPSettings.prototype.GetPort = function() {
	return this.port;
};

EndUserTSPSettings.prototype.SetPort = function(port) {
	this.port = port;
};

//--------------------------------------------------------------------------------

var EndUserOCSPSettings = function() {
	this.setClassInfo('EndUserOCSPSettings', 1);

	this.fields = {
		'useOCSP': 'boolean',
		'beforeStore': 'boolean',
		'address': 'string',
		'port': 'string'
	};

	this.initializeFields();
	this.port = "80";
};

EndUserTransferableObject.makeTransferable(EndUserOCSPSettings);

EndUserOCSPSettings.prototype.GetUseOCSP = function() {
	return this.useOCSP;
};

EndUserOCSPSettings.prototype.SetUseOCSP = function(useOCSP) {
	this.useOCSP = useOCSP;
};

EndUserOCSPSettings.prototype.GetBeforeStore = function() {
	return this.beforeStore;
};

EndUserOCSPSettings.prototype.SetBeforeStore = function(beforeStore) {
	this.beforeStore = beforeStore;
};

EndUserOCSPSettings.prototype.GetAddress = function() {
	return this.address;
};

EndUserOCSPSettings.prototype.SetAddress = function(address) {
	this.address = address;
};

EndUserOCSPSettings.prototype.GetPort = function() {
	return this.port;
};

EndUserOCSPSettings.prototype.SetPort = function(port) {
	this.port = port;
};

//--------------------------------------------------------------------------------

var EndUserLDAPSettings = function() {
	this.setClassInfo('EndUserLDAPSettings', 1);

	this.fields = {
		'useLDAP': 'boolean',
		'address': 'string',
		'port': 'string',
		'anonymous': 'boolean',
		'user': 'string',
		'password': 'string'
	};

	this.initializeFields();
	this.port = "389";
};

EndUserTransferableObject.makeTransferable(EndUserLDAPSettings);

EndUserLDAPSettings.prototype.GetUseLDAP = function() {
	return this.useLDAP;
};

EndUserLDAPSettings.prototype.SetUseLDAP = function(useLDAP) {
	this.useLDAP = useLDAP;
};

EndUserLDAPSettings.prototype.GetAddress = function() {
	return this.address;
};

EndUserLDAPSettings.prototype.SetAddress = function(address) {
	this.address = address;
};

EndUserLDAPSettings.prototype.GetPort = function() {
	return this.port;
};

EndUserLDAPSettings.prototype.SetPort = function(port) {
	this.port = port;
};

EndUserLDAPSettings.prototype.GetAnonymous = function() {
	return this.anonymous;
};

EndUserLDAPSettings.prototype.SetAnonymous = function(anonymous) {
	this.anonymous = anonymous;
};

EndUserLDAPSettings.prototype.GetUser = function() {
	return this.user;
};

EndUserLDAPSettings.prototype.SetUser = function(user) {
	this.user = user;
};

EndUserLDAPSettings.prototype.GetPassword = function() {
	return this.password;
};

EndUserLDAPSettings.prototype.SetPassword = function(password) {
	this.password = password;
};

//--------------------------------------------------------------------------------

var EndUserCMPSettings = function() {
	this.setClassInfo('EndUserCMPSettings', 1);

	this.fields = {
		'useCMP': 'boolean',
		'address': 'string',
		'port': 'string',
		'commonName': 'string'
	};

	this.initializeFields();
	this.port = "80";
};

EndUserTransferableObject.makeTransferable(EndUserCMPSettings);

EndUserCMPSettings.prototype.GetUseCMP = function() {
	return this.useCMP;
};

EndUserCMPSettings.prototype.SetUseCMP = function(useCMP) {
	this.useCMP = useCMP;
};

EndUserCMPSettings.prototype.GetAddress = function() {
	return this.address;
};

EndUserCMPSettings.prototype.SetAddress = function(address) {
	this.address = address;
};

EndUserCMPSettings.prototype.GetPort = function() {
	return this.port;
};

EndUserCMPSettings.prototype.SetPort = function(port) {
	this.port = port;
};

EndUserCMPSettings.prototype.GetCommonName = function() {
	return this.commonName;
};

EndUserCMPSettings.prototype.SetCommonName = function(commonName) {
	this.commonName = commonName;
};

//--------------------------------------------------------------------------------

var EndUserModeSettings = function() {
	this.setClassInfo('EndUserModeSettings', 1);

	this.fields = {
		'offlineMode': 'boolean'
	};

	this.initializeFields();
};

EndUserTransferableObject.makeTransferable(EndUserModeSettings);

EndUserModeSettings.prototype.GetOfflineMode = function() {
	return this.offlineMode;
};

EndUserModeSettings.prototype.SetOfflineMode = function(offlineMode) {
	this.offlineMode = offlineMode;
};

//--------------------------------------------------------------------------------

var EndUserOCSPAccessInfoModeSettings = function() {
	this.setClassInfo(
		'EndUserOCSPAccessInfoModeSettings', 1);

	this.fields = {
		'enabled': 'boolean'
	};

	this.initializeFields();
};

EndUserTransferableObject.makeTransferable(EndUserOCSPAccessInfoModeSettings);

EndUserOCSPAccessInfoModeSettings.prototype.GetEnabled = function() {
	return this.enabled;
};

EndUserOCSPAccessInfoModeSettings.prototype.SetEnabled = function(enabled) {
	this.enabled = enabled;
};

//--------------------------------------------------------------------------------

var EndUserOCSPAccessInfoSettings = function() {
	this.setClassInfo('EndUserOCSPAccessInfoSettings', 1);

	this.fields = {
		'issuerCN': 'string',
		'address': 'string',
		'port': 'string'
	};

	this.initializeFields();
};

EndUserTransferableObject.makeTransferable(EndUserOCSPAccessInfoSettings);

EndUserOCSPAccessInfoSettings.prototype.GetIssuerCN = function() {
	return this.issuerCN;
};

EndUserOCSPAccessInfoSettings.prototype.SetIssuerCN = function(issuerCN) {
	this.issuerCN = issuerCN;
};

EndUserOCSPAccessInfoSettings.prototype.GetAddress = function() {
	return this.address;
};

EndUserOCSPAccessInfoSettings.prototype.SetAddress = function(address) {
	this.address = address;
};

EndUserOCSPAccessInfoSettings.prototype.GetPort = function() {
	return this.port;
};

EndUserOCSPAccessInfoSettings.prototype.SetPort = function(port) {
	this.port = port;
};

//--------------------------------------------------------------------------------

var EndUserKeyMediaSettings = function() {
	this.setClassInfo('EndUserKeyMediaSettings', 1);

	this.fields = {
		'sourceType': 'long',
		'showErrors': 'boolean',
		'keyMedia': 'EndUserKeyMedia'
	};

	this.initializeFields();

	this.sourceType = 1;
	this.showErrors = true;
};

EndUserTransferableObject.makeTransferable(EndUserKeyMediaSettings);

EndUserKeyMediaSettings.prototype.GetSourceType = function() {
	return this.sourceType;
};

EndUserKeyMediaSettings.prototype.SetSourceType = function(sourceType) {
	this.sourceType = sourceType;
};

EndUserKeyMediaSettings.prototype.GetShowErrors = function() {
	return this.showErrors;
};

EndUserKeyMediaSettings.prototype.SetShowErrors = function(showErrors) {
	this.showErrors = showErrors;
};

EndUserKeyMediaSettings.prototype.GetKeyMedia = function() {
	return this.keyMedia;
};

EndUserKeyMediaSettings.prototype.SetKeyMedia = function(keyMedia) {
	this.keyMedia = keyMedia;
};

//================================================================================

var EndUserOwnerInfo = function() {
	this.setClassInfo('EndUserOwnerInfo', 1);

	this.fields = {
		'isFilled': 'boolean',
		'issuer': 'string',
		'issuerCN': 'string',
		'serial': 'string',
		'subject': 'string',
		'subjCN': 'string',
		'subjOrg': 'string',
		'subjOrgUnit': 'string',
		'subjTitle': 'string',
		'subjState': 'string',
		'subjLocality': 'string',
		'subjFullName': 'string',
		'subjAddress': 'string',
		'subjPhone': 'string',
		'subjEMail': 'string',
		'subjDNS': 'string',
		'subjEDRPOUCode': 'string',
		'subjDRFOCode': 'string'
	};

	this.initializeFields();
};

EndUserTransferableObject.makeTransferable(EndUserOwnerInfo);

EndUserOwnerInfo.prototype.IsFilled = function() {
	return this.isFilled;
};

EndUserOwnerInfo.prototype.GetIssuer = function() {
	return this.issuer;
};

EndUserOwnerInfo.prototype.GetIssuerCN = function() {
	return this.issuerCN;
};

EndUserOwnerInfo.prototype.GetSerial = function() {
	return this.serial;
};

EndUserOwnerInfo.prototype.GetSubject = function() {
	return this.subject;
};

EndUserOwnerInfo.prototype.GetSubjCN = function() {
	return this.subjCN;
};

EndUserOwnerInfo.prototype.GetSubjOrg = function() {
	return this.subjOrg;
};

EndUserOwnerInfo.prototype.GetSubjOrgUnit = function() {
	return this.subjOrgUnit;
};

EndUserOwnerInfo.prototype.GetSubjTitle = function() {
	return this.subjTitle;
};

EndUserOwnerInfo.prototype.GetSubjState = function() {
	return this.subjState;
};

EndUserOwnerInfo.prototype.GetSubjLocality = function() {
	return this.subjLocality;
};

EndUserOwnerInfo.prototype.GetSubjFullName = function() {
	return this.subjFullName;
};

EndUserOwnerInfo.prototype.GetSubjAddress = function() {
	return this.subjAddress;
};

EndUserOwnerInfo.prototype.GetSubjPhone = function() {
	return this.subjPhone;
};

EndUserOwnerInfo.prototype.GetSubjEMail = function() {
	return this.subjEMail;
};

EndUserOwnerInfo.prototype.GetSubjDNS = function() {
	return this.subjDNS;
};

EndUserOwnerInfo.prototype.GetSubjEDRPOUCode = function() {
	return this.subjEDRPOUCode;
};

EndUserOwnerInfo.prototype.GetSubjDRFOCode = function() {
	return this.subjDRFOCode;
};

//================================================================================

var EndUserTimeInfo = function() {
	this.setClassInfo('EndUserTimeInfo', 2);

	this.fields = {
		'version': 'number',
		'isTimeAvail': 'boolean',
		'isTimeStamp': 'boolean',
		'time': 'time',
		'isSignTimeStampAvail': 'boolean',
		'signTimeStamp': 'time'
	};

	this.initializeFields();
};

EndUserTransferableObject.makeTransferable(EndUserTimeInfo);

EndUserTimeInfo.prototype.GetVersion = function() {
	return this.version;
};

EndUserTimeInfo.prototype.IsTimeAvail = function() {
	return this.isTimeAvail;
};

EndUserTimeInfo.prototype.IsTimeStamp = function() {
	return this.isTimeStamp;
};

EndUserTimeInfo.prototype.GetTime = function() {
	return this.time;
};

EndUserTimeInfo.prototype.IsSignTimeStampAvail = function() {
	return this.isSignTimeStampAvail;
};

EndUserTimeInfo.prototype.GetSignTimeStamp = function() {
	return this.signTimeStamp;
};

//================================================================================

var EndUserSignInfo = function() {
	this.setClassInfo('EndUserSignInfo', 1);

	this.fields = {
		'ownerInfo': 'EndUserOwnerInfo',
		'timeInfo': 'EndUserTimeInfo',
		'data': 'byteArray'
	};

	this.initializeFields();
};

EndUserTransferableObject.makeTransferable(EndUserSignInfo);

EndUserSignInfo.prototype.GetOwnerInfo = function() {
	return this.ownerInfo;
};

EndUserSignInfo.prototype.GetTimeInfo = function() {
	return this.timeInfo;
};

EndUserSignInfo.prototype.GetData = function() {
	return this.data;
};

EndUserSignInfo.prototype.GetDataString = function(charset) {
	return EndUserStringCoder.ArrayToString(charset, this.data);
};

//================================================================================

var EndUserSenderInfo = function() {
	this.setClassInfo('EndUserSenderInfo', 1);

	this.fields = {
		'ownerInfo': 'EndUserOwnerInfo',
		'timeInfo': 'EndUserTimeInfo',
		'data': 'byteArray'
	};

	this.initializeFields();
};

EndUserTransferableObject.makeTransferable(EndUserSenderInfo);

EndUserSenderInfo.prototype.GetOwnerInfo = function() {
	return this.ownerInfo;
};

EndUserSenderInfo.prototype.GetTimeInfo = function() {
	return this.timeInfo;
};

EndUserSenderInfo.prototype.GetData = function() {
	return this.data;
};

EndUserSenderInfo.prototype.GetDataString = function(charset) {
	return EndUserStringCoder.ArrayToString(charset, this.data);
};

//================================================================================

var EndUserCertificateInfo = function() {
	this.setClassInfo('EndUserCertificateInfo', 1);

	this.fields = {
		'isFilled': 'boolean',

		'version': 'long',

		'issuer': 'string',
		'issuerCN': 'string',
		'serial': 'string',

		'subject': 'string',
		'subjCN': 'string',
		'subjOrg': 'string',
		'subjOrgUnit': 'string',
		'subjTitle': 'string',
		'subjState': 'string',
		'subjLocality': 'string',
		'subjFullName': 'string',
		'subjAddress': 'string',
		'subjPhone': 'string',
		'subjEMail': 'string',
		'subjDNS': 'string',
		'subjEDRPOUCode': 'string',
		'subjDRFOCode': 'string',

		'subjNBUCode': 'string',
		'subjSPFMCode': 'string',
		'subjOCode': 'string',
		'subjOUCode': 'string',
		'subjUserCode': 'string',

		'certBeginTime': 'time',
		'certEndTime': 'time',
		'isPrivKeyTimesAvail': 'boolean',
		'privKeyBeginTime': 'time',
		'privKeyEndTime': 'time',

		'publicKeyBits': 'long',
		'publicKey': 'string',
		'publicKeyID': 'string',

		'isECDHPublicKeyAvail': 'boolean',
		'ECDHPublicKeyBits': 'long',
		'ECDHPublicKey': 'string',
		'ECDHPublicKeyID': 'string',

		'issuerPublicKeyID': 'string',
		
		'keyUsage': 'string',
		'extKeyUsages': 'string',
		'policies': 'string',

		'crlDistribPoint1': 'string',
		'crlDistribPoint2': 'string',

		'isPowerCert': 'boolean',

		'isSubjTypeAvail': 'boolean',
		'isSubjCA': 'boolean'
	};

	this.initializeFields();
};

EndUserTransferableObject.makeTransferable(EndUserCertificateInfo);

EndUserCertificateInfo.prototype.IsFilled = function() {
	return this.isFilled;
};

EndUserCertificateInfo.prototype.GetVersion = function() {
	return this.version;
};

EndUserCertificateInfo.prototype.GetIssuer = function() {
	return this.issuer;
};

EndUserCertificateInfo.prototype.GetIssuerCN = function() {
	return this.issuerCN;
};

EndUserCertificateInfo.prototype.GetSerial = function() {
	return this.serial;
};

EndUserCertificateInfo.prototype.GetSubject = function() {
	return this.subject;
};

EndUserCertificateInfo.prototype.GetSubjCN = function() {
	return this.subjCN;
};

EndUserCertificateInfo.prototype.GetSubjOrg = function() {
	return this.subjOrg;
};

EndUserCertificateInfo.prototype.GetSubjOrgUnit = function() {
	return this.subjOrgUnit;
};

EndUserCertificateInfo.prototype.GetSubjTitle = function() {
	return this.subjTitle;
};

EndUserCertificateInfo.prototype.GetSubjState = function() {
	return this.subjState;
};

EndUserCertificateInfo.prototype.GetSubjLocality = function() {
	return this.subjLocality;
};

EndUserCertificateInfo.prototype.GetSubjFullName = function() {
	return this.subjFullName;
};

EndUserCertificateInfo.prototype.GetSubjAddress = function() {
	return this.subjAddress;
};

EndUserCertificateInfo.prototype.GetSubjPhone = function() {
	return this.subjPhone;
};

EndUserCertificateInfo.prototype.GetSubjEMail = function() {
	return this.subjEMail;
};

EndUserCertificateInfo.prototype.GetSubjDNS = function() {
	return this.subjDNS;
};

EndUserCertificateInfo.prototype.GetSubjEDRPOUCode = function() {
	return this.subjEDRPOUCode;
};

EndUserCertificateInfo.prototype.GetSubjDRFOCode = function() {
	return this.subjDRFOCode;
};

EndUserCertificateInfo.prototype.GetSubjNBUCode = function() {
	return this.subjNBUCode;
};

EndUserCertificateInfo.prototype.GetSubjSPFMCode = function() {
	return this.subjSPFMCode;
};

EndUserCertificateInfo.prototype.GetSubjOCode = function() {
	return this.subjOCode;
};

EndUserCertificateInfo.prototype.GetSubjOUCode = function() {
	return this.subjOUCode;
};

EndUserCertificateInfo.prototype.GetSubjUserCode = function() {
	return this.subjUserCode;
};

EndUserCertificateInfo.prototype.GetCertBeginTime = function() {
	return this.certBeginTime;
};

EndUserCertificateInfo.prototype.GetCertEndTime = function() {
	return this.certEndTime;
};

EndUserCertificateInfo.prototype.IsPrivKeyTimesAvail = function() {
	return this.isPrivKeyTimesAvail;
};

EndUserCertificateInfo.prototype.GetPrivKeyBeginTime = function() {
	return this.privKeyBeginTime;
};

EndUserCertificateInfo.prototype.GetPrivKeyEndTime = function() {
	return this.privKeyEndTime;
};

EndUserCertificateInfo.prototype.GetPublicKeyBits = function() {
	return this.publicKeyBits;
};

EndUserCertificateInfo.prototype.GetPublicKey = function() {
	return this.publicKey;
};

EndUserCertificateInfo.prototype.GetPublicKeyID = function() {
	return this.publicKeyID;
};

EndUserCertificateInfo.prototype.IsECDHPublicKeyAvail = function() {
	return this.isECDHPublicKeyAvail;
};

EndUserCertificateInfo.prototype.GetECDHPublicKeyBits = function() {
	return this.ECDHPublicKeyBits;
};

EndUserCertificateInfo.prototype.GetECDHPublicKey = function() {
	return this.ECDHPublicKey;
};

EndUserCertificateInfo.prototype.GetECDHPublicKeyID = function() {
	return this.ECDHPublicKeyID;
};

EndUserCertificateInfo.prototype.GetIssuerPublicKeyID = function() {
	return this.issuerPublicKeyID;
};

EndUserCertificateInfo.prototype.GetKeyUsage = function() {
	return this.keyUsage;
};

EndUserCertificateInfo.prototype.GetExtKeyUsages = function() {
	return this.extKeyUsages;
};

EndUserCertificateInfo.prototype.GetPolicies = function() {
	return this.policies;
};

EndUserCertificateInfo.prototype.GetCRLDistribPoint1 = function() {
	return this.crlDistribPoint1;
};

EndUserCertificateInfo.prototype.GetCRLDistribPoint2 = function() {
	return this.crlDistribPoint2;
};

EndUserCertificateInfo.prototype.IsPowerCert = function() {
	return this.isPowerCert;
};

EndUserCertificateInfo.prototype.IsSubjTypeAvail = function() {
	return this.isSubjTypeAvail;
};

EndUserCertificateInfo.prototype.IsSubjCA = function() {
	return this.isSubjCA;
};

//--------------------------------------------------------------------------------

var EndUserCertificateInfoEx = function() {
	this.setClassInfo('EndUserCertificateInfoEx', 8);

	this.fields = {
		'isFilled': 'boolean',

		'version': 'long',

		'issuer': 'string',
		'issuerCN': 'string',
		'serial': 'string',

		'subject': 'string',
		'subjCN': 'string',
		'subjOrg': 'string',
		'subjOrgUnit': 'string',
		'subjTitle': 'string',
		'subjState': 'string',
		'subjLocality': 'string',
		'subjFullName': 'string',
		'subjAddress': 'string',
		'subjPhone': 'string',
		'subjEMail': 'string',
		'subjDNS': 'string',
		'subjEDRPOUCode': 'string',
		'subjDRFOCode': 'string',

		'subjNBUCode': 'string',
		'subjSPFMCode': 'string',
		'subjOCode': 'string',
		'subjOUCode': 'string',
		'subjUserCode': 'string',

		'certBeginTime': 'time',
		'certEndTime': 'time',
		'isPrivKeyTimesAvail': 'boolean',
		'privKeyBeginTime': 'time',
		'privKeyEndTime': 'time',

		'publicKeyBits': 'long',
		'publicKey': 'string',
		'publicKeyID': 'string',

		'issuerPublicKeyID': 'string',

		'keyUsage': 'string',
		'extKeyUsages': 'string',
		'policies': 'string',

		'crlDistribPoint1': 'string',
		'crlDistribPoint2': 'string',

		'isPowerCert': 'boolean',

		'isSubjTypeAvail': 'boolean',
		'isSubjCA': 'boolean',
		'chainLength': 'int',

		'UPN': 'string',

		'publicKeyType': 'long',
		'keyUsageType': 'long',
		
		'RSAModul': 'string',
		'RSAExponent': 'string',

		'OCSPAccessInfo': 'string',
		'issuerAccessInfo': 'string',
		'TSPAccessInfo': 'string',

		'isLimitValueAvailable': 'boolean',
		'limitValue': 'long',
		'limitValueCurrency': 'string',

		'subjType': 'long',
		'subjSubType': 'long',

		'subjUNZR': 'string',
		'subjCountry': 'string',

		'fingerprint': 'string',

		'isQSCD': 'boolean',

		'subjUserID': 'string'
	};

	this.initializeFields();

	var pThis = this;
	this.IsLimitValueAvailable = function() {
		return pThis.isLimitValueAvailable;
	};
};

EndUserTransferableObject.makeTransferable(EndUserCertificateInfoEx);

EndUserCertificateInfoEx.prototype.IsFilled = function() {
	return this.isFilled;
};

EndUserCertificateInfoEx.prototype.GetVersion = function() {
	return this.version;
};

EndUserCertificateInfoEx.prototype.GetIssuer = function() {
	return this.issuer;
};

EndUserCertificateInfoEx.prototype.GetIssuerCN = function() {
	return this.issuerCN;
};

EndUserCertificateInfoEx.prototype.GetSerial = function() {
	return this.serial;
};

EndUserCertificateInfoEx.prototype.GetSubject = function() {
	return this.subject;
};

EndUserCertificateInfoEx.prototype.GetSubjCN = function() {
	return this.subjCN;
};

EndUserCertificateInfoEx.prototype.GetSubjOrg = function() {
	return this.subjOrg;
};

EndUserCertificateInfoEx.prototype.GetSubjOrgUnit = function() {
	return this.subjOrgUnit;
};

EndUserCertificateInfoEx.prototype.GetSubjTitle = function() {
	return this.subjTitle;
};

EndUserCertificateInfoEx.prototype.GetSubjState = function() {
	return this.subjState;
};

EndUserCertificateInfoEx.prototype.GetSubjLocality = function() {
	return this.subjLocality;
};

EndUserCertificateInfoEx.prototype.GetSubjFullName = function() {
	return this.subjFullName;
};

EndUserCertificateInfoEx.prototype.GetSubjAddress = function() {
	return this.subjAddress;
};

EndUserCertificateInfoEx.prototype.GetSubjPhone = function() {
	return this.subjPhone;
};

EndUserCertificateInfoEx.prototype.GetSubjEMail = function() {
	return this.subjEMail;
};

EndUserCertificateInfoEx.prototype.GetSubjDNS = function() {
	return this.subjDNS;
};

EndUserCertificateInfoEx.prototype.GetSubjEDRPOUCode = function() {
	return this.subjEDRPOUCode;
};

EndUserCertificateInfoEx.prototype.GetSubjDRFOCode = function() {
	return this.subjDRFOCode;
};

EndUserCertificateInfoEx.prototype.GetSubjNBUCode = function() {
	return this.subjNBUCode;
};

EndUserCertificateInfoEx.prototype.GetSubjSPFMCode = function() {
	return this.subjSPFMCode;
};

EndUserCertificateInfoEx.prototype.GetSubjOCode = function() {
	return this.subjOCode;
};

EndUserCertificateInfoEx.prototype.GetSubjOUCode = function() {
	return this.subjOUCode;
};

EndUserCertificateInfoEx.prototype.GetSubjUserCode = function() {
	return this.subjUserCode;
};

EndUserCertificateInfoEx.prototype.GetCertBeginTime = function() {
	return this.certBeginTime;
};

EndUserCertificateInfoEx.prototype.GetCertEndTime = function() {
	return this.certEndTime;
};

EndUserCertificateInfoEx.prototype.IsPrivKeyTimesAvail = function() {
	return this.isPrivKeyTimesAvail;
};

EndUserCertificateInfoEx.prototype.GetPrivKeyBeginTime = function() {
	return this.privKeyBeginTime;
};

EndUserCertificateInfoEx.prototype.GetPrivKeyEndTime = function() {
	return this.privKeyEndTime;
};

EndUserCertificateInfoEx.prototype.GetPublicKeyBits = function() {
	return this.publicKeyBits;
};

EndUserCertificateInfoEx.prototype.GetPublicKey = function() {
	return this.publicKey;
};

EndUserCertificateInfoEx.prototype.GetPublicKeyID = function() {
	return this.publicKeyID;
};

EndUserCertificateInfoEx.prototype.GetIssuerPublicKeyID = function() {
	return this.issuerPublicKeyID;
};

EndUserCertificateInfoEx.prototype.GetKeyUsage = function() {
	return this.keyUsage;
};

EndUserCertificateInfoEx.prototype.GetExtKeyUsages = function() {
	return this.extKeyUsages;
};

EndUserCertificateInfoEx.prototype.GetPolicies = function() {
	return this.policies;
};

EndUserCertificateInfoEx.prototype.GetCRLDistribPoint1 = function() {
	return this.crlDistribPoint1;
};

EndUserCertificateInfoEx.prototype.GetCRLDistribPoint2 = function() {
	return this.crlDistribPoint2;
};

EndUserCertificateInfoEx.prototype.IsPowerCert = function() {
	return this.isPowerCert;
};

EndUserCertificateInfoEx.prototype.IsSubjTypeAvail = function() {
	return this.isSubjTypeAvail;
};

EndUserCertificateInfoEx.prototype.IsSubjCA = function() {
	return this.isSubjCA;
};

EndUserCertificateInfoEx.prototype.GetChainLength = function() {
	return this.chainLength;
};

EndUserCertificateInfoEx.prototype.GetUPN = function() {
	return this.UPN;
};

EndUserCertificateInfoEx.prototype.GetPublicKeyType = function() {
	return this.publicKeyType;
};

EndUserCertificateInfoEx.prototype.GetKeyUsageType = function() {
	return this.keyUsageType;
};

EndUserCertificateInfoEx.prototype.GetRSAModul = function() {
	return this.RSAModul;
};

EndUserCertificateInfoEx.prototype.GetRSAExponent = function() {
	return this.RSAExponent;
};

EndUserCertificateInfoEx.prototype.GetOCSPAccessInfo = function() {
	return this.OCSPAccessInfo;
};

EndUserCertificateInfoEx.prototype.GetIssuerAccessInfo = function() {
	return this.issuerAccessInfo;
};

EndUserCertificateInfoEx.prototype.GetTSPAccessInfo = function() {
	return this.TSPAccessInfo;
};

EndUserCertificateInfoEx.prototype.IsLimitValueAvail = function() {
	return this.isLimitValueAvailable;
};

EndUserCertificateInfoEx.prototype.GetLimitValue = function() {
	return this.limitValue;
};

EndUserCertificateInfoEx.prototype.GetLimitValueCurrency = function() {
	return this.limitValueCurrency;
};

EndUserCertificateInfoEx.prototype.GetSubjType = function() {
	return this.subjType;
};

EndUserCertificateInfoEx.prototype.GetSubjSubType = function() {
	return this.subjSubType;
};

EndUserCertificateInfoEx.prototype.GetSubjUNZR = function() {
	return this.subjUNZR;
};

EndUserCertificateInfoEx.prototype.GetSubjCountry = function() {
	return this.subjCountry;
};

EndUserCertificateInfoEx.prototype.GetFingerprint = function() {
	return this.fingerprint;
};

EndUserCertificateInfoEx.prototype.IsQSCD = function() {
	return this.isQSCD;
};

EndUserCertificateInfoEx.prototype.GetSubjUserID = function() {
	return this.subjUserID;
};

//--------------------------------------------------------------------------------

var EndUserCertificate = function() {
	this.setClassInfo('EndUserCertificate', 1);

	this.fields = {
		'infoEx': 'EndUserCertificateInfoEx',
		'data': 'byteArray'
	};

	this.initializeFields();
};

EndUserTransferableObject.makeTransferable(EndUserCertificate);

EndUserCertificate.prototype.GetInfoEx = function() {
	return this.infoEx;
};

EndUserCertificate.prototype.SetInfoEx = function(infoEx) {
	this.infoEx = infoEx;
};

EndUserCertificate.prototype.GetData = function() {
	return this.data;
};

EndUserCertificate.prototype.SetData = function(data) {
	this.data = data;
};

//================================================================================

var EndUserCRLInfo = function() {
	this.setClassInfo('EndUserCRLInfo', 1, true, false);

	this.fields = {
		'isFilled': 'boolean',
		'issuer': 'string',
		'issuerCN': 'string',
		'crlNumber': 'long',
		'thisUpdate': 'time',
		'nextUpdate': 'time'
	};

	this.initializeFields();
};

EndUserTransferableObject.makeTransferable(EndUserCRLInfo);

EndUserCRLInfo.prototype.IsFilled = function() {
	return this.isFilled;
};

EndUserCRLInfo.prototype.GetIssuer = function() {
	return this.issuer;
};

EndUserCRLInfo.prototype.GetIssuerCN = function() {
	return this.issuerCN;
};

EndUserCRLInfo.prototype.GetCRLNumber = function() {
	return this.crlNumber;
};

EndUserCRLInfo.prototype.GetThisUpdate = function() {
	return this.thisUpdate;
};

EndUserCRLInfo.prototype.GetNextUpdate = function() {
	return this.nextUpdate;
};

//--------------------------------------------------------------------------------

var EndUserCRLDetailedInfo = function() {
	this.setClassInfo('EndUserCRLDetailedInfo', 1);

	this.fields = {
		'isFilled': 'boolean',
		'version': 'long',
		'issuer': 'string',
		'issuerCN': 'string',
		'issuerPublicKeyID': 'string',
		'crlNumber': 'long',
		'thisUpdate': 'time',
		'nextUpdate': 'time',
		'revokedItemsCount': 'long'
	};

	this.initializeFields();
};

EndUserTransferableObject.makeTransferable(EndUserCRLDetailedInfo);

EndUserCRLDetailedInfo.prototype.IsFilled = function() {
	return this.isFilled;
};

EndUserCRLDetailedInfo.prototype.GetVersion = function() {
	return this.version;
};

EndUserCRLDetailedInfo.prototype.GetIssuer = function() {
	return this.issuer;
};

EndUserCRLDetailedInfo.prototype.GetIssuerCN = function() {
	return this.issuerCN;
};

EndUserCRLDetailedInfo.prototype.GetIssuerPublicKeyID = function() {
	return this.issuerPublicKeyID;
};

EndUserCRLDetailedInfo.prototype.GetCRLNumber = function() {
	return this.crlNumber;
};

EndUserCRLDetailedInfo.prototype.GetThisUpdate = function() {
	return this.thisUpdate;
};

EndUserCRLDetailedInfo.prototype.GetNextUpdate = function() {
	return this.nextUpdate;
};

EndUserCRLDetailedInfo.prototype.GetRevokedItemsCount = function() {
	return this.revokedItemsCount;
};

//--------------------------------------------------------------------------------

var EndUserPrivateKeyInfo = function() {
	this.setClassInfo('EndUserPrivateKeyInfo', 1);

	this.fields = {
		'privateKey': 'byteArray',
		'privateKeyInfo': 'byteArray'
	};

	this.initializeFields();
};

EndUserTransferableObject.makeTransferable(EndUserPrivateKeyInfo);

EndUserPrivateKeyInfo.prototype.GetPrivateKey = function() {
	return this.privateKey;
};

EndUserPrivateKeyInfo.prototype.SetPrivateKey = function(privateKey) {
	this.privateKey = privateKey;
};

EndUserPrivateKeyInfo.prototype.GetPrivateKeyInfo = function() {
	return this.privateKeyInfo;
};

EndUserPrivateKeyInfo.prototype.SetPrivateKeyInfo = function(privateKeyInfo) {
	this.privateKeyInfo = privateKeyInfo;
};

//--------------------------------------------------------------------------------

var EndUserJKSPrivateKey = function() {
	this.setClassInfo('EndUserJKSPrivateKey', 1);

	this.fields = {
		'privateKey': 'byteArray',
		'certificates': 'array'
	};

	var pThis = this;
	this.initializeFields();
};

EndUserTransferableObject.makeTransferable(EndUserJKSPrivateKey);

EndUserJKSPrivateKey.prototype.GetPrivateKey = function() {
	return this.privateKey;
};

EndUserJKSPrivateKey.prototype.GetCertificate = function(index) {
	if (index < 0 || index >= this.certificates.length)
		return null;

	return this.certificates[index];
};

EndUserJKSPrivateKey.prototype.GetCertificatesCount = function() {
	return this.certificates.length;
};

EndUserJKSPrivateKey.prototype.GetCertificates = function() {
	return this.certificates;
};

//================================================================================

var EndUserRequestInfo = function() {
	this.setClassInfo('EndUserRequestInfo', 4);

	this.fields = {
		'request': 'byteArray',
		'requestType': 'number',
		'defaultRequestFileName': 'string',

		'isSimple': 'boolean',

		'subject': 'string',
		'subjCN': 'string',
		'subjOrg': 'string',
		'subjOrgUnit': 'string',
		'subjTitle': 'string',
		'subjState': 'string',
		'subjLocality': 'string',
		'subjFullName': 'string',
		'subjAddress': 'string',
		'subjPhone': 'string',
		'subjEMail': 'string',
		'subjDNS': 'string',
		'subjEDRPOUCode': 'string',
		'subjDRFOCode': 'string',

		'subjNBUCode': 'string',
		'subjSPFMCode': 'string',
		'subjOCode': 'string',
		'subjOUCode':' string',
		'subjUserCode': 'string',

		'certBeginTime': 'time',
		'certEndTime': 'time',
		'isPrivKeyTimesAvail':'boolean',
		'privKeyBeginTime': 'time',
		'privKeyEndTime': 'time',

		'publicKeyType': 'number',

		'publicKeyBits': 'number',
		'RSAModul': 'string',
		'RSAExponent': 'string',
		'publicKey': 'string',
		'publicKeyID': 'string',

		'extKeyUsages': 'string',

		'crlDistribPoint1': 'string',
		'crlDistribPoint2': 'string',

		'isSubjTypeAvail': 'boolean',
		'subjType': 'number',
		'subjSubType': 'number',

		'isSelfSigned': 'boolean',
		'signIssuer': 'string',
		'signSerial': 'string',

		'subjUNZR': 'string',
		'subjCountry': 'string',

		'isQSCD': 'boolean'
	};

	this.initializeFields();
};

EndUserTransferableObject.makeTransferable(EndUserRequestInfo);

EndUserRequestInfo.prototype.GetRequest = function() {
	return this.request;
};

EndUserRequestInfo.prototype.GetRequestType = function() {
	return this.requestType;
};

EndUserRequestInfo.prototype.GetDefaultRequestFileName = function() {
	return this.defaultRequestFileName;
};

EndUserRequestInfo.prototype.IsSimple = function() {
	return this.isSimple;
};

EndUserRequestInfo.prototype.GetSubject = function() {
	return this.subject;
};

EndUserRequestInfo.prototype.GetSubjCN = function() {
	return this.subjCN;
};

EndUserRequestInfo.prototype.GetSubjOrg = function() {
	return this.subjOrg;
};

EndUserRequestInfo.prototype.GetSubjOrgUnit = function() {
	return this.subjOrgUnit;
};

EndUserRequestInfo.prototype.GetSubjTitle = function() {
	return this.subjTitle;
};

EndUserRequestInfo.prototype.GetSubjState = function() {
	return this.subjState;
};

EndUserRequestInfo.prototype.GetSubjLocality = function() {
	return this.subjLocality;
};

EndUserRequestInfo.prototype.GetSubjFullName = function() {
	return this.subjFullName;
};

EndUserRequestInfo.prototype.GetSubjAddress = function() {
	return this.subjAddress;
};

EndUserRequestInfo.prototype.GetSubjPhone = function() {
	return this.subjPhone;
};

EndUserRequestInfo.prototype.GetSubjEMail = function() {
	return this.subjEMail;
};

EndUserRequestInfo.prototype.GetSubjDNS = function() {
	return this.subjDNS;
};

EndUserRequestInfo.prototype.GetSubjEDRPOUCode = function() {
	return this.subjEDRPOUCode;
};

EndUserRequestInfo.prototype.GetSubjDRFOCode = function() {
	return this.subjDRFOCode;
};

EndUserRequestInfo.prototype.GetSubjNBUCode = function() {
	return this.subjNBUCode;
};

EndUserRequestInfo.prototype.GetSubjSPFMCode = function() {
	return this.subjSPFMCode;
};

EndUserRequestInfo.prototype.GetSubjOCode = function() {
	return this.subjOCode;
};

EndUserRequestInfo.prototype.GetSubjOUCode = function() {
	return this.subjOUCode;
};

EndUserRequestInfo.prototype.GetSubjUserCode = function() {
	return this.subjUserCode;
};

EndUserRequestInfo.prototype.GetCertBeginTime = function() {
	return this.certBeginTime;
};

EndUserRequestInfo.prototype.GetCertEndTime = function() {
	return this.certEndTime;
};

EndUserRequestInfo.prototype.IsPrivKeyTimesAvail = function() {
	return this.isPrivKeyTimesAvail;
};

EndUserRequestInfo.prototype.GetPrivKeyBeginTime = function() {
	return this.privKeyBeginTime;
};

EndUserRequestInfo.prototype.GetPrivKeyEndTime = function() {
	return this.privKeyEndTime;
};

EndUserRequestInfo.prototype.GetPublicKeyType = function() {
	return this.publicKeyType;
};

EndUserRequestInfo.prototype.GetPublicKeyBits = function() {
	return this.publicKeyBits;
};

EndUserRequestInfo.prototype.GetRSAModul = function() {
	return this.RSAModul;
};

EndUserRequestInfo.prototype.GetRSAExponent = function() {
	return this.RSAExponent;
};

EndUserRequestInfo.prototype.GetPublicKey = function() {
	return this.publicKey;
};

EndUserRequestInfo.prototype.GetPublicKeyID = function() {
	return this.publicKeyID;
};

EndUserRequestInfo.prototype.GetExtKeyUsages = function() {
	return this.extKeyUsages;
};

EndUserRequestInfo.prototype.GetCRLDistribPoint1 = function() {
	return this.crlDistribPoint1;
};

EndUserRequestInfo.prototype.GetCRLDistribPoint2 = function() {
	return this.crlDistribPoint2;
};

EndUserRequestInfo.prototype.IsSubjTypeAvail = function() {
	return this.isSubjTypeAvail;
};

EndUserRequestInfo.prototype.GetSubjType = function() {
	return this.subjType;
};

EndUserRequestInfo.prototype.GetSubjSubType = function() {
	return this.subjSubType;
};

EndUserRequestInfo.prototype.IsSelfSigned = function() {
	return this.isSelfSigned;
};

EndUserRequestInfo.prototype.GetSignIssuer = function() {
	return this.signIssuer;
};

EndUserRequestInfo.prototype.GetSignSerial = function() {
	return this.signSerial;
};

EndUserRequestInfo.prototype.GetSubjUNZR = function() {
	return this.subjUNZR;
};

EndUserRequestInfo.prototype.GetSubjCountry = function() {
	return this.subjCountry;
};

EndUserRequestInfo.prototype.IsQSCD = function() {
	return this.isQSCD;
};

//================================================================================

var EndUserInfo = function() {
	this.setClassInfo('EndUserInfo', 3);

	this.fields = {
		'commonName': 'string',
		'locality': 'string',
		'state': 'string',
		'organization': 'string',
		'orgUnit': 'string',
		'title': 'string',
		'street': 'string',
		'phone': 'string',
		'surname': 'string',
		'givenname': 'string',
		'EMail': 'string',
		'DNS': 'string',
		'EDRPOUCode': 'string',
		'DRFOCode': 'string',
		'NBUCode': 'string',
		'SPFMCode': 'string',
		'OCode': 'string',
		'OUCode': 'string',
		'userCode': 'string',
		'UPN': 'string',

		'UNZR': 'string',

		'country': 'string'
	};

	this.initializeFields();
};

EndUserTransferableObject.makeTransferable(EndUserInfo);

EndUserInfo.prototype.GetCommonName = function() {
	return this.commonName;
};

EndUserInfo.prototype.SetCommonName = function(commonName) {
	this.commonName = commonName;
};

EndUserInfo.prototype.GetLocality = function() {
	return this.locality;
};

EndUserInfo.prototype.SetLocality = function(locality) {
	this.locality = locality;
};

EndUserInfo.prototype.GetState = function() {
	return this.state;
};

EndUserInfo.prototype.SetState = function(state) {
	this.state = state;
};

EndUserInfo.prototype.GetOrganization = function() {
	return this.organization;
};

EndUserInfo.prototype.SetOrganization = function(organization) {
	this.organization = organization;
};

EndUserInfo.prototype.GetOrgUnit = function() {
	return this.orgUnit;
};

EndUserInfo.prototype.SetOrgUnit = function(orgUnit) {
	this.orgUnit = orgUnit;
};

EndUserInfo.prototype.GetTitle = function() {
	return this.title;
};

EndUserInfo.prototype.SetTitle = function(title) {
	this.title = title;
};

EndUserInfo.prototype.GetStreet = function() {
	return this.street;
};

EndUserInfo.prototype.SetStreet = function(street) {
	this.street = street;
};

EndUserInfo.prototype.GetPhone = function() {
	return this.phone;
};

EndUserInfo.prototype.SetPhone = function(phone) {
	this.phone = phone;
};

EndUserInfo.prototype.GetSurname = function() {
	return this.surname;
};

EndUserInfo.prototype.SetSurname = function(surname) {
	this.surname = surname;
};

EndUserInfo.prototype.GetGivenname = function() {
	return this.givenname;
};

EndUserInfo.prototype.SetGivenname = function(givenname) {
	this.givenname = givenname;
};

EndUserInfo.prototype.GetEMail = function() {
	return this.EMail;
};

EndUserInfo.prototype.SetEMail = function(EMail) {
	this.EMail = EMail;
};

EndUserInfo.prototype.GetDNS = function() {
	return this.DNS;
};

EndUserInfo.prototype.SetDNS = function(DNS) {
	this.DNS = DNS;
};

EndUserInfo.prototype.GetEDRPOUCode = function() {
	return this.EDRPOUCode;
};

EndUserInfo.prototype.SetEDRPOUCode = function(EDRPOUCode) {
	this.EDRPOUCode = EDRPOUCode;
};

EndUserInfo.prototype.GetDRFOCode = function() {
	return this.DRFOCode;
};

EndUserInfo.prototype.SetDRFOCode = function(DRFOCode) {
	this.DRFOCode = DRFOCode;
};

EndUserInfo.prototype.GetNBUCode = function() {
	return this.NBUCode;
};

EndUserInfo.prototype.SetNBUCode = function(NBUCode) {
	this.NBUCode = NBUCode;
};

EndUserInfo.prototype.GetSPFMCode = function() {
	return this.SPFMCode;
};

EndUserInfo.prototype.SetSPFMCode = function(SPFMCode) {
	this.SPFMCode = SPFMCode;
};

EndUserInfo.prototype.GetOCode = function() {
	return this.OCode;
};

EndUserInfo.prototype.SetOCode = function(OCode) {
	this.OCode = OCode;
};

EndUserInfo.prototype.GetOUCode = function() {
	return this.OUCode;
};

EndUserInfo.prototype.SetOUCode = function(OUCode) {
	this.OUCode = OUCode;
};

EndUserInfo.prototype.GetUserCode = function() {
	return this.userCode;
};

EndUserInfo.prototype.SetUserCode = function(userCode) {
	this.userCode = userCode;
};

EndUserInfo.prototype.GetUPN = function() {
	return this.UPN;
};

EndUserInfo.prototype.SetUPN = function(UPN) {
	this.UPN = UPN;
};

EndUserInfo.prototype.GetUNZR = function() {
	return this.UNZR;
};

EndUserInfo.prototype.SetUNZR = function(UNZR) {
	this.UNZR = UNZR;
};

EndUserInfo.prototype.GetCountry = function() {
	return this.country;
};

EndUserInfo.prototype.SetCountry = function(country) {
	this.country = country;
};

//================================================================================

var EndUserParams = function() {
	this.setClassInfo('EndUserParams', 1);

	this.fields = {
		'SN': 'number',
		'commonName': 'string',
		'locality': 'string',
		'state': 'string',
		'organization': 'string',
		'orgUnit': 'string',
		'title': 'string',
		'street': 'string',
		'phone': 'string',
		'surname': 'string',
		'givenname': 'string',
		'EMail': 'string',
		'DNS': 'string',
		'EDRPOUCode': 'string',
		'DRFOCode': 'string',
		'NBUCode': 'string',
		'SPFMCode': 'string',
		'information': 'string',
		'passPhrase': 'string',
		'isPublishCertificate': 'boolean',
		'RAAdminSN': 'number'
	};

	this.initializeFields();
};

EndUserTransferableObject.makeTransferable(EndUserParams);

EndUserParams.prototype.GetSN = function() {
	return this.SN;
};

EndUserParams.prototype.SetSN = function(SN) {
	this.SN = SN;
};

EndUserParams.prototype.GetCommonName = function() {
	return this.commonName;
};

EndUserParams.prototype.SetCommonName = function(commonName) {
	this.commonName = commonName;
};

EndUserParams.prototype.GetLocality = function() {
	return this.locality;
};

EndUserParams.prototype.SetLocality = function(locality) {
	this.locality = locality;
};

EndUserParams.prototype.GetState = function() {
	return this.state;
};

EndUserParams.prototype.SetState = function(state) {
	this.state = state;
};

EndUserParams.prototype.GetOrganization = function() {
	return this.organization;
};

EndUserParams.prototype.SetOrganization = function(organization) {
	this.organization = organization;
};

EndUserParams.prototype.GetOrgUnit = function() {
	return this.orgUnit;
};

EndUserParams.prototype.SetOrgUnit = function(orgUnit) {
	this.orgUnit = orgUnit;
};

EndUserParams.prototype.GetTitle = function() {
	return this.title;
};

EndUserParams.prototype.SetTitle = function(title) {
	this.title = title;
};

EndUserParams.prototype.GetStreet = function() {
	return this.street;
};

EndUserParams.prototype.SetStreet = function(street) {
	this.street = street;
};

EndUserParams.prototype.GetPhone = function() {
	return this.phone;
};

EndUserParams.prototype.SetPhone = function(phone) {
	this.phone = phone;
};

EndUserParams.prototype.GetSurname = function() {
	return this.surname;
};

EndUserParams.prototype.SetSurname = function(surname) {
	this.surname = surname;
};

EndUserParams.prototype.GetGivenname = function() {
	return this.givenname;
};

EndUserParams.prototype.SetGivenname = function(givenname) {
	this.givenname = givenname;
};

EndUserParams.prototype.GetEMail = function() {
	return this.EMail;
};

EndUserParams.prototype.SetEMail = function(EMail) {
	this.EMail = EMail;
};

EndUserParams.prototype.GetDNS = function() {
	return this.DNS;
};

EndUserParams.prototype.SetDNS = function(DNS) {
	this.DNS = DNS;
};

EndUserParams.prototype.GetEDRPOUCode = function() {
	return this.EDRPOUCode;
};

EndUserParams.prototype.SetEDRPOUCode = function(EDRPOUCode) {
	this.EDRPOUCode = EDRPOUCode;
};

EndUserParams.prototype.GetDRFOCode = function() {
	return this.DRFOCode;
};

EndUserParams.prototype.SetDRFOCode = function(DRFOCode) {
	this.DRFOCode = DRFOCode;
};

EndUserParams.prototype.GetNBUCode = function() {
	return this.NBUCode;
};

EndUserParams.prototype.SetNBUCode = function(NBUCode) {
	this.NBUCode = NBUCode;
};

EndUserParams.prototype.GetSPFMCode = function() {
	return this.SPFMCode;
};

EndUserParams.prototype.SetSPFMCode = function(SPFMCode) {
	this.SPFMCode = SPFMCode;
};

EndUserParams.prototype.GetInformation = function() {
	return this.information;
};

EndUserParams.prototype.SetInformation = function(information) {
	this.information = information;
};

EndUserParams.prototype.GetPassPhrase = function() {
	return this.passPhrase;
};

EndUserParams.prototype.SetPassPhrase = function(passPhrase) {
	this.passPhrase = passPhrase;
};

EndUserParams.prototype.GetIsPublishCertificate = function() {
	return this.isPublishCertificate;
};

EndUserParams.prototype.SetIsPublishCertificate = function(
	isPublishCertificate) {
	this.isPublishCertificate = isPublishCertificate;
};

EndUserParams.prototype.GetRAAdminSN = function() {
	return this.RAAdminSN;
};

EndUserParams.prototype.SetRAAdminSN = function(RAAdminSN) {
	this.RAAdminSN = RAAdminSN;
};

//================================================================================

var EndUserOperationContext = function() {
	this.setClassInfo('EndUserOperationContext', 1);

	this.fields = {
		'handle': 'string'
	};

	this.initializeFields();
	this.handle = null;
};

EndUserTransferableObject.makeTransferable(EndUserOperationContext);

EndUserOperationContext.prototype.GetHandle = function() {
	return this.handle;
};

//================================================================================

var EndUserSession = function() {
	this.setClassInfo('EndUserSession', 1);

	this.fields = {
		'handle': 'string',
		'data': 'byteArray'
	};

	this.initializeFields();
};

EndUserTransferableObject.makeTransferable(EndUserSession);

EndUserSession.prototype.GetHandle = function() {
	return this.handle;
};

EndUserSession.prototype.GetData = function() {
	return this.data;
};

EndUserSession.prototype.SetData = function(data) {
	this.data = data;
};

//================================================================================

var EndUserSCClientStatistic = function() {
	this.setClassInfo('EndUserSCClientStatistic', 1);

	this.fields = {
		'activeSessions': 'number',
		'gatedSessions': 'number',
		'unprotectedData': 'number',
		'protectedData': 'number'
	};

	this.initializeFields();
};

EndUserTransferableObject.makeTransferable(EndUserSCClientStatistic);

EndUserSCClientStatistic.prototype.GetActiveSessions = function() {
	return this.activeSessions;
};

EndUserSCClientStatistic.prototype.GetGatedSessions = function() {
	return this.gatedSessions;
};

EndUserSCClientStatistic.prototype.GetUnprotectedData = function() {
	return this.unprotectedData;
};

EndUserSCClientStatistic.prototype.GetProtectedData = function() {
	return this.protectedData;
};

//================================================================================

var EndUserDeviceContext = function() {
	this.setClassInfo('EndUserDeviceContext', 1);

	this.fields = {
		'handle': 'string'
	};

	this.initializeFields();
	this.handle = null;
};

EndUserTransferableObject.makeTransferable(EndUserDeviceContext);

EndUserDeviceContext.prototype.GetHandle = function() {
	return this.handle;
};

//================================================================================

var EndUserTransportHeader = function() {
	this.setClassInfo('EndUserTransportHeader', 1);

	this.fields = {
		'receiptNumber': 'number',
		'cryptoData': 'byteArray'
	};

	this.initializeFields();
};

EndUserTransferableObject.makeTransferable(EndUserTransportHeader);

EndUserTransportHeader.prototype.GetReceiptNumber = function() {
	return this.receiptNumber;
};

EndUserTransportHeader.prototype.GetCryptoData = function() {
	return this.cryptoData;
};

//================================================================================

var EndUserCryptoHeader = function() {
	this.setClassInfo('EndUserCryptoHeader', 1);

	this.fields = {
		'caType': 'string',
		'headerType': 'number',
		'headerSize': 'number',
		'cryptoData': 'byteArray'
	};

	this.initializeFields();
};

EndUserTransferableObject.makeTransferable(EndUserCryptoHeader);

EndUserCryptoHeader.prototype.GetCAType = function() {
	return this.caType;
};

EndUserCryptoHeader.prototype.GetHeaderType = function() {
	return this.headerType;
};

EndUserCryptoHeader.prototype.GetHeaderSize = function() {
	return this.headerSize;
};

EndUserCryptoHeader.prototype.GetCryptoData = function() {
	return this.cryptoData;
};

//================================================================================

var EndUserContext = function() {
	this.setClassInfo('EndUserContext', 1);

	this.fields = {
		'handle': 'string'
	};

	this.initializeFields();
};

EndUserTransferableObject.makeTransferable(EndUserContext);

EndUserContext.prototype.GetHandle = function() {
	return this.handle;
};

//================================================================================

var EndUserHashContext = function() {
	this.setClassInfo('EndUserHashContext', 1);

	this.fields = {
		'handle': 'string'
	};

	this.initializeFields();
};

EndUserTransferableObject.makeTransferable(EndUserHashContext);

EndUserHashContext.prototype.GetHandle = function() {
	return this.handle;
};

//================================================================================

var EndUserPrivateKeyContext = function() {
	this.setClassInfo('EndUserPrivateKeyContext', 1);

	this.fields = {
		'handle': 'string',
		'ownerInfo': 'EndUserOwnerInfo'
	};

	this.initializeFields();
};

EndUserTransferableObject.makeTransferable(EndUserPrivateKeyContext);

EndUserPrivateKeyContext.prototype.GetHandle = function() {
	return this.handle;
};

EndUserPrivateKeyContext.prototype.GetOwnerInfo = function() {
	return this.ownerInfo;
};

//================================================================================


//================================================================================


//================================================================================

// euerror.js

//================================================================================
//================================================================================

var EndUserError = function(errorCode, message) {
	this.errorCode = errorCode;
	this.message = message;

	this.toString = function() {
		return this.message + ' (' + this.errorCode + ')';
	};

	this.GetErrorCode = function() {
		return this.errorCode;
	};

	this.GetMessage = function() {
		return this.message;
	};
};

//--------------------------------------------------------------------------------

EndUserError.ERROR_NONE = 0x0000;
EndUserError.ERROR_UNKNOWN = 0xFFFF;
EndUserError.ERROR_NOT_SUPPORTED = 0xFFFE;

EndUserError.ERROR_NOT_INITIALIZED = 0x0001;
EndUserError.ERROR_BAD_PARAMETER = 0x0002;
EndUserError.ERROR_LIBRARY_LOAD = 0x0003;
EndUserError.ERROR_READ_SETTINGS = 0x0004;
EndUserError.ERROR_TRANSMIT_REQUEST = 0x0005;
EndUserError.ERROR_MEMORY_ALLOCATION = 0x0006;
EndUserError.WARNING_END_OF_ENUM = 0x0007;
EndUserError.ERROR_PROXY_NOT_AUTHORIZED = 0x0008;
EndUserError.ERROR_NO_GUI_DIALOGS = 0x0009;
EndUserError.ERROR_DOWNLOAD_FILE = 0x000A;
EndUserError.ERROR_WRITE_SETTINGS = 0x000B;
EndUserError.ERROR_CANCELED_BY_GUI = 0x000C;
EndUserError.ERROR_OFFLINE_MODE = 0x000D;

EndUserError.ERROR_KEY_MEDIAS_FAILED = 0x0011;
EndUserError.ERROR_KEY_MEDIAS_ACCESS_FAILED = 0x0012;
EndUserError.ERROR_KEY_MEDIAS_READ_FAILED = 0x0013;
EndUserError.ERROR_KEY_MEDIAS_WRITE_FAILED = 0x0014;
EndUserError.WARNING_KEY_MEDIAS_READ_ONLY = 0x0015;
EndUserError.ERROR_KEY_MEDIAS_DELETE = 0x0016;
EndUserError.ERROR_KEY_MEDIAS_CLEAR = 0x0017;
EndUserError.ERROR_BAD_PRIVATE_KEY = 0x0018;

EndUserError.ERROR_PKI_FORMATS_FAILED = 0x0021;
EndUserError.ERROR_CSP_FAILED = 0x0022;
EndUserError.ERROR_BAD_SIGNATURE = 0x0023;
EndUserError.ERROR_AUTH_FAILED = 0x0024;
EndUserError.ERROR_NOT_RECEIVER = 0x0025;

EndUserError.ERROR_STORAGE_FAILED = 0x0031;
EndUserError.ERROR_BAD_CERT = 0x0032;
EndUserError.ERROR_CERT_NOT_FOUND = 0x0033;
EndUserError.ERROR_INVALID_CERT_TIME = 0x0034;
EndUserError.ERROR_CERT_IN_CRL = 0x0035;
EndUserError.ERROR_BAD_CRL = 0x0036;
EndUserError.ERROR_NO_VALID_CRLS = 0x0037;

EndUserError.ERROR_GET_TIME_STAMP = 0x0041;
EndUserError.ERROR_BAD_TSP_RESPONSE = 0x0042;
EndUserError.ERROR_TSP_SERVER_CERT_NOT_FOUND = 0x0043;
EndUserError.ERROR_TSP_SERVER_CERT_INVALID = 0x0044;

EndUserError.ERROR_GET_OCSP_STATUS = 0x0051;
EndUserError.ERROR_BAD_OCSP_RESPONSE = 0x0052;
EndUserError.ERROR_CERT_BAD_BY_OCSP = 0x0053;
EndUserError.ERROR_OCSP_SERVER_CERT_NOT_FOUND = 0x0054;
EndUserError.ERROR_OCSP_SERVER_CERT_INVALID = 0x0055;

EndUserError.ERROR_LDAP_ERROR = 0x0061;

EndUserError.ERROR_LIBRARY_COMUNICATION_FAILED = 0x1001;
EndUserError.ERROR_LIBRARY_VERSION_NOT_SUPPORTED = 0x1002;

EndUserError.ERROR_BROWSER_NOT_SUPPORTED = 0x10001;
EndUserError.ERROR_OPEN_FILE = 0x10010;
EndUserError.ERROR_READ_FILE = 0x10011;
EndUserError.ERROR_WRITE_FILE = 0x10012;

//--------------------------------------------------------------------------------

EndUserError.ERROR_DESCRIPTIONS_EX = [];
EndUserError.ERROR_DESCRIPTIONS_EX[
	EndUserError.ERROR_NONE] = 
[
	'Виконано успішно', 
	'Выполнено успешно',
	'Executed successfully'
];
EndUserError.ERROR_DESCRIPTIONS_EX[
	EndUserError.ERROR_NOT_SUPPORTED] = 
[
	'Операція не підтримується', 
	'Операция не поддерживается',
	'Operation is not supported'
];
EndUserError.ERROR_DESCRIPTIONS_EX[
	EndUserError.ERROR_UNKNOWN] = 
[
	'Невідома помилка', 
	'Неизвестная ошибка',
	'Unknown error'
];
EndUserError.ERROR_DESCRIPTIONS_EX[
	EndUserError.ERROR_LIBRARY_LOAD] = 
[
	'Виникла помилка при завантаженні криптографічної бібліотеки', 
	'Возникла ошибка при загрузке криптографической библиотеки', 
	'Error at load crypto library'
];
EndUserError.ERROR_DESCRIPTIONS_EX[
	EndUserError.ERROR_NOT_INITIALIZED] = 
[
	'Бібліотека не ініціалізована', 
	'Библиотека не инициализирована',
	'Library is not initialized'
];
EndUserError.ERROR_DESCRIPTIONS_EX[
	EndUserError.ERROR_BAD_PARAMETER] = 
[
	'Невірний параметр', 
	'Неверный параметр', 
	'Incorrect parameter'
];
EndUserError.ERROR_DESCRIPTIONS_EX[
	EndUserError.ERROR_BAD_CERT] = 
[
	'Сертифікат пошкоджений або не може бути використаний',
	'Сертификат поврежден или не может быть использован', 
	'Certificate corrupted or cannot be used'
];
EndUserError.ERROR_DESCRIPTIONS_EX[
	EndUserError.ERROR_CERT_NOT_FOUND] = 
[
	'Сертифікат не знайдено',
	'Сертификат не найден', 
	'Certificate not found'
];
EndUserError.ERROR_DESCRIPTIONS_EX[
	EndUserError.ERROR_TRANSMIT_REQUEST] = 
[
	'Виникла помилка при передачі запиту на сервер ЦСК за протоколом HTTP',
	'Возникла ошибка при передаче запроса на сервер ЦСК по протоколу HTTP', 
	'Error at request transfer to CA\'s server by HTTP protocol'
];
EndUserError.ERROR_DESCRIPTIONS_EX[
	EndUserError.ERROR_DOWNLOAD_FILE] = 
[
	'Виникла помилка при завантаженні файлу з HTTP-сервера',
	'Возникла ошибка при загрузке файла с HTTP-сервера', 
	'Error at the load of file from a HTTP-server'
];
EndUserError.ERROR_DESCRIPTIONS_EX[
	EndUserError.ERROR_LIBRARY_COMUNICATION_FAILED] = 
[
	'Виникла помилка при взаємодії з криптографічною бібліотекою', 
	'Возникла ошибка при взаимодействии с криптографической библиотекой', 
	'Error at comunication with crypto library'
];
EndUserError.ERROR_DESCRIPTIONS_EX[
	EndUserError.ERROR_LIBRARY_VERSION_NOT_SUPPORTED] = 
[
	'Встановлена версія бібліотеки не підтримується', 
	'Установленная версия библиотеки не поддерживается', 
	'The installed version of the library is not supported'
];
EndUserError.ERROR_DESCRIPTIONS_EX[
	EndUserError.ERROR_BROWSER_NOT_SUPPORTED] = 
[
	'Ваш браузер не підтримується', 
	'Ваш браузер не поддерживается', 
	'Your browser is not supported'
];

EndUserError.ERROR_DESCRIPTIONS_EX[
	EndUserError.ERROR_OPEN_FILE] = 
[
	'Виникла помилка при відкритті файлу',
	'Возникла ошибка при открытии файла', 
	'Error at open file'
];
EndUserError.ERROR_DESCRIPTIONS_EX[
	EndUserError.ERROR_READ_FILE] = 
[
	'Виникла помилка при зчитуванні файлу', 
	'Возникла ошибка при чтении файла', 
	'Error at read file'
];
EndUserError.ERROR_DESCRIPTIONS_EX[
	EndUserError.ERROR_WRITE_FILE] = 
[
	'Виникла помилка при записі файлу', 
	'Возникла ошибка при записи файла', 
	'Error at write file'
];

//--------------------------------------------------------------------------------

EndUserError.isError = function(error) {
	return (error != EndUserError.ERROR_NONE);
};

EndUserError.isSuccess = function(error) {
	return (error == EndUserError.ERROR_NONE);
};

EndUserError.getErrorDescriptionEx = function(error, language) {
	var descrArr;
	var descr;

	descrArr = EndUserError.ERROR_DESCRIPTIONS_EX[error];
	if (typeof descrArr == 'undefined') {
		descrArr = EndUserError.ERROR_DESCRIPTIONS_EX[
			EndUserError.ERROR_UNKNOWN];
	}

	descr = descrArr[language - 1];
	if (typeof descr == 'undefined')
		return descrArr[0];

	return descr;
};

//================================================================================

function EndUserException(errorCode, message) {
	this.errorCode = errorCode;
	this.message = message;

	this.toString = function() {
		return this.message + ' (' + this.errorCode + ')';
	};

	this.GetErrorCode = function() {
		return this.errorCode;
	};

	this.GetMessage = function() {
		return this.message;
	};
}

//================================================================================

//================================================================================


//================================================================================

// euscp.js

//================================================================================
//================================================================================

var EU_SIGN_CP_FIELD_NAME_RESULT		= 'result';
var EU_SIGN_CP_FIELD_NAME_ERROR			= 'error';
var EU_SIGN_CP_FIELD_NAME_ERROR_CODE	= 'code';
var EU_SIGN_CP_FIELD_NAME_ERROR_MSG		= 'message';

//--------------------------------------------------------------------------------

var EUSignCP = function(address, port) {
	this.vendor = 'JSC IIT';
	this.classVersion = EU_SIGN_CP_IFACE_VERSION;
	this.className = 'EUSignCP';

	this.SUBJECT_TYPE_UNDIFFERENCED = 0;
	this.SUBJECT_TYPE_CA = 1;
	this.SUBJECT_TYPE_CA_SERVER = 2;
	this.SUBJECT_TYPE_RA_ADMINISTRATOR = 3;
	this.SUBJECT_TYPE_END_USER = 4;
	this.EU_SUBJECT_TYPE_UNDIFFERENCED = 
		this.SUBJECT_TYPE_UNDIFFERENCED;
	this.EU_SUBJECT_TYPE_CA = 
		this.SUBJECT_TYPE_CA;
	this.EU_SUBJECT_TYPE_CA_SERVER = 
		this.SUBJECT_TYPE_CA_SERVER;
	this.EU_SUBJECT_TYPE_RA_ADMINISTRATOR =
		this.SUBJECT_TYPE_RA_ADMINISTRATOR;
	this.EU_SUBJECT_TYPE_END_USER =
		this.SUBJECT_TYPE_END_USER;

	this.SUBJECT_CA_SERVER_SUB_TYPE_UNDIFFERENCED = 0;
	this.SUBJECT_CA_SERVER_SUB_TYPE_CMP = 1;
	this.SUBJECT_CA_SERVER_SUB_TYPE_TSP = 2;
	this.SUBJECT_CA_SERVER_SUB_TYPE_OCSP = 3;
	this.EU_SUBJECT_CA_SERVER_SUB_TYPE_UNDIFFERENCED = 
		this.SUBJECT_CA_SERVER_SUB_TYPE_UNDIFFERENCED;
	this.EU_SUBJECT_CA_SERVER_SUB_TYPE_CMP = 
		this.SUBJECT_CA_SERVER_SUB_TYPE_CMP;
	this.EU_SUBJECT_CA_SERVER_SUB_TYPE_TSP = 
		this.SUBJECT_CA_SERVER_SUB_TYPE_TSP;
	this.EU_SUBJECT_CA_SERVER_SUB_TYPE_OCSP = 
		this.SUBJECT_CA_SERVER_SUB_TYPE_OCSP;

	this.CERT_KEY_TYPE_UNKNOWN = 0;
	this.CERT_KEY_TYPE_DSTU4145 = 1;
	this.CERT_KEY_TYPE_RSA = 2;
	this.CERT_KEY_TYPE_ECDSA = 4;
	this.EU_CERT_KEY_TYPE_UNKNOWN = this.CERT_KEY_TYPE_UNKNOWN;
	this.EU_CERT_KEY_TYPE_DSTU4145 = this.CERT_KEY_TYPE_DSTU4145;
	this.EU_CERT_KEY_TYPE_RSA = this.CERT_KEY_TYPE_RSA;
	this.EU_CERT_KEY_TYPE_ECDSA = this.CERT_KEY_TYPE_ECDSA;

	this.KEY_USAGE_UNKNOWN = 0;
	this.KEY_USAGE_DIGITAL_SIGNATUR = 1;
	this.KEY_KEY_USAGE_KEY_AGREEMENT = 16;
	this.EU_KEY_USAGE_UNKNOWN = 
		this.KEY_USAGE_UNKNOWN;
	this.EU_KEY_USAGE_DIGITAL_SIGNATURE = 
		this.KEY_USAGE_DIGITAL_SIGNATUR;
	this.EU_KEY_USAGE_KEY_AGREEMENT = 
		this.KEY_KEY_USAGE_KEY_AGREEMENT;

	this.EU_KEYS_REQUEST_TYPE_UA_DS = 1;
	this.EU_KEYS_REQUEST_TYPE_UA_KEP = 2;
	this.EU_KEYS_REQUEST_TYPE_INTERNATIONAL = 3;

	this.EU_KEYS_TYPE_NONE = 0;
	this.EU_KEYS_TYPE_DSTU_AND_ECDH_WITH_GOSTS = 1;
	this.EU_KEYS_TYPE_RSA_WITH_SHA = 2;

	this.EU_KEYS_LENGTH_DS_UA_191 = 1;
	this.EU_KEYS_LENGTH_DS_UA_257 = 2;
	this.EU_KEYS_LENGTH_DS_UA_307 = 3;
	this.EU_KEYS_LENGTH_DS_UA_FILE = 4;
	this.EU_KEYS_LENGTH_DS_UA_CERT = 5;

	this.EU_KEYS_LENGTH_KEP_UA_257 = 1;
	this.EU_KEYS_LENGTH_KEP_UA_431 = 2;
	this.EU_KEYS_LENGTH_KEP_UA_571 = 3;
	this.EU_KEYS_LENGTH_KEP_UA_FILE = 4;
	this.EU_KEYS_LENGTH_KEP_UA_CERT = 5;

	this.EU_KEYS_LENGTH_DS_RSA_1024 = 1;
	this.EU_KEYS_LENGTH_DS_RSA_2048 = 2;
	this.EU_KEYS_LENGTH_DS_RSA_3072 = 3;
	this.EU_KEYS_LENGTH_DS_RSA_4096 = 4;
	this.EU_KEYS_LENGTH_DS_RSA_FILE = 5;
	this.EU_KEYS_LENGTH_DS_RSA_CERT = 6;

	this.EU_RECIPIENT_APPEND_ISSUER_AND_SERIAL = 1;
	this.EU_RECIPIENT_APPEND_KEY_ID = 2;
	this.EU_RECIPIENT_APPEND_KEY_ID_USC_COMPAT = 3;

	this.EU_SAVE_SETTINGS_PARAMETER = 'SaveSettings';
	this.EU_RESOLVE_OIDS_PARAMETER = 'ResolveOIDs';
	this.EU_MAKE_PKEY_PFX_CONTAINER_PARAMETER = 'MakePKeyPFXContainer';
	this.EU_SIGN_INCLUDE_CONTENT_TIME_STAMP_PARAMETER = 
		'SignIncludeContentTimeStamp';
	this.EU_SIGN_TYPE_PARAMETER = 'SignType';
	this.EU_SIGN_INCLUDE_CA_CERTIFICATES_PARAMETER = 
		'SignIncludeCACertificates';
	this.EU_FS_CALCULATE_FINGERPRINT = 'FSCalculateFingerprint';

	this.EU_SETTINGS_ID_NONE = 0x00;
	this.EU_SETTINGS_ID_MANDATORY = 0x1F;
	this.EU_SETTINGS_ID_ALL = 0x3FF;

	this.EU_SETTINGS_ID_FSTORE = 0x01;
	this.EU_SETTINGS_ID_PROXY = 0x02;
	this.EU_SETTINGS_ID_TSP = 0x04;
	this.EU_SETTINGS_ID_OCSP = 0x08;
	this.EU_SETTINGS_ID_LDAP = 0x10;
	this.EU_SETTINGS_ID_MODE = 0x20;
	this.EU_SETTINGS_ID_CMP = 0x40;
	this.EU_SETTINGS_ID_KM = 0x80;

	this.EU_SETTINGS_ID_OCSP_ACCESS_INFO_MODE = 0x100;
	this.EU_SETTINGS_ID_OCSP_ACCESS_INFO = 0x200;

	this.EU_HEADER_CA_TYPE = "UA1";
	this.EU_HEADER_PART_TYPE_SIGNED = 1;
	this.EU_HEADER_PART_TYPE_ENCRYPTED = 2;
	this.EU_HEADER_PART_TYPE_STAMPED = 3;
	this.EU_HEADER_PART_TYPE_CERTCRYPT = 4;

	this.EU_HEADER_MAX_CA_TYPE_SIZE = 3;

	this.EU_SIGNED_CRYPTO_HEADER = this.EU_HEADER_PART_TYPE_SIGNED;
	this.EU_ENCRYPTED_CRYPTO_HEADER = this.EU_HEADER_PART_TYPE_ENCRYPTED;
	this.EU_TIMESTAMPED_CRYPTO_HEADER = this.EU_HEADER_PART_TYPE_STAMPED;
	this.EU_CERTCRYPT_CRYPTO_HEADER = this.EU_HEADER_PART_TYPE_CERTCRYPT;

	this.EU_DEFAULT_LANG = 0;
	this.EU_UA_LANG = 1;
	this.EU_RU_LANG = 2;
	this.EU_EN_LANG = 3;

	this.EU_CONTENT_ENC_ALGO_TDES_CBC = 4;
	this.EU_CONTENT_ENC_ALGO_AES_128_CBC = 5;
	this.EU_CONTENT_ENC_ALGO_AES_192_CBC = 6;
	this.EU_CONTENT_ENC_ALGO_AES_256_CBC = 7;

	this.EU_DEV_CTX_MIN_PUBLIC_DATA_ID = 0x0010;
	this.EU_DEV_CTX_MAX_PRIVATE_DATA_ID = 0x00AF;

	this.EU_UA_OID_EXT_KEY_USAGE_STAMP = "1.2.804.2.1.1.1.3.9";

	this.EU_CCS_TYPE_REVOKE = 1;
	this.EU_CCS_TYPE_HOLD = 2;

	this.EU_REVOCATION_REASON_UNKNOWN = 0;
	this.EU_REVOCATION_REASON_KEY_COMPROMISE = 1;
	this.EU_REVOCATION_REASON_NEW_ISSURED = 2;

	this.EU_SIGN_TYPE_UNKNOWN = 0;
	this.EU_SIGN_TYPE_CADES_BES = 1;
	this.EU_SIGN_TYPE_CADES_T = 4;
	this.EU_SIGN_TYPE_CADES_C = 8;
	this.EU_SIGN_TYPE_CADES_X_LONG = 16;
	this.EU_SIGN_TYPE_CADES_X_LONG_TRUSTED = 128;

	this.EU_CHECK_PRIVATE_KEY_CONTEXT_PARAMETER = "CheckPrivateKey";
	this.EU_RESOLVE_OIDS_CONTEXT_PARAMETER = "ResolveOIDs";
	this.EU_EXPORATABLE_CONTEXT_CONTEXT_PARAMETER	= "ExportableContext";

	this.EU_RECIPIENT_APPEND_TYPE_BY_ISSUER_SERIAL = 1;
	this.EU_RECIPIENT_APPEND_TYPE_BY_KEY_ID = 2;

	this.EU_CTX_HASH_ALGO_UNKNOWN = 0;
	this.EU_CTX_HASH_ALGO_GOST34311 = 1;
	this.EU_CTX_HASH_ALGO_SHA160 = 2;
	this.EU_CTX_HASH_ALGO_SHA224 = 3;
	this.EU_CTX_HASH_ALGO_SHA256 = 4;

	this.EU_CTX_SIGN_UNKNOWN = 0;
	this.EU_CTX_SIGN_DSTU4145_WITH_GOST34311 = 1;
	this.EU_CTX_SIGN_RSA_WITH_SHA = 2;

	this.EU_FILE_PROCESS_CHUNK_SIZE = 1 * 1024 * 1024;

	this.m_language = this.EU_DEFAULT_LANG;

	this.m_lastErrorCode = EndUserError.ERROR_NONE;
	this.m_lastError = '';
	this.m_charset = EU_SIGN_CP_ENCODING_UTF_8;
	this.m_stringCoder = new EndUserUTF8Coder();
	this.m_base64Coder = new EndUserBase64Coder();
	this.m_dateCoder = new EndUserDateCoder();
	this.m_browserInfo = new EndUserBrowserInfo();

	var jsonRPCClientType = JSON_RPC_CLIENT_TYPE_SIGN_AGENT;
	switch (address) {
		case EU_SIGN_WEB_EXTENSION_ADDRESS:
			jsonRPCClientType = JSON_RPC_CLIENT_TYPE_WEB_EXTENSION;
			if (this.m_browserInfo.GetName() == 
					EndUserBrowserInfo.BROWSER_NAME_FIREFOX) {
				address = EU_SIGN_WEB_EXTENSION_ADDRESS_FIREFOX;
			}
		break;

		case EU_SIGN_WEB_ACTIVE_X_ADDRESS:
			jsonRPCClientType = JSON_RPC_CLIENT_TYPE_ACTIVE_X;
		break;

		case EU_SIGN_WEB_NPAPI_ADDRESS:
			jsonRPCClientType = JSON_RPC_CLIENT_TYPE_NPAPI;
		break;
	}

	this.m_jsonRpcClient = new JSONRPCClient(
		jsonRPCClientType, address, port,
		(window.location.protocol == 'https:'));
	this.m_monitorLibraryTimer = null;
};

//================================================================================

EUSignCP.prototype._funcMakeParams = function(params) {
	var paramsArray = [];

	if (params == null)
		params = [];

	var _funcEncodeParams = function(_params) {
		if (IsEndUserTransferableObject(_params)) {
			return _params.encode();
		} else if (Array.isArray(_params)) {
			var length = _params.length;
			var _paramsArray = [];

			for (var i = 0; i < length; i++)
				_paramsArray[i] = _funcEncodeParams(_params[i]);

			return _paramsArray;
		}
		return _params;
	};

	var length = params.length;
	for (var i = 0; i < length; i++) {
		paramsArray[i] = _funcEncodeParams(params[i]);
	}

	return paramsArray;
};

//--------------------------------------------------------------------------------

EUSignCP.prototype._funcCall = function(
	funcName, funcParams, onSuccess, onError, callback) {

	if (this.IsAsync(onSuccess, onError)) {
		var _onSuccess = (callback == null) ? 
			onSuccess : function(result) {
				callback(result, onSuccess, onError);
			};

		var pThis = this;
		this.m_jsonRpcClient.execute(
			funcName, funcParams, function(_response) {
				pThis._funcHandleResult(_response, _onSuccess, onError);
			});
		return;
	} else {
		var result;

		result = this.m_jsonRpcClient.execute(
			funcName, funcParams, null);

		result = this._funcHandleResult(result);
		if (callback)
			return callback(result);
		else
			return result;
	}
};

//--------------------------------------------------------------------------------

EUSignCP.prototype._funcHandleResult = function(
	result, onSuccess, onError) {
	var error;
	var errorCode;
	var isAsync = this.IsAsync(onSuccess, onError);

	if (result == null) {
		error = this.MakeError(
			EndUserError.ERROR_LIBRARY_COMUNICATION_FAILED, '');

		if (isAsync) {
			onError(error);
			return;
		}

		throw new EndUserException(error.errorCode, error.message); 
	}

	error = result[EU_SIGN_CP_FIELD_NAME_ERROR];
	errorCode = error[EU_SIGN_CP_FIELD_NAME_ERROR_CODE];
	if (EndUserError.isError(errorCode)) {
		if (errorCode == EndUserError.WARNING_END_OF_ENUM) {
			if (isAsync) {
				onSuccess(null);
				return;
			}

			return null;
		}
	
		error = this.MakeError(errorCode, 
			error[EU_SIGN_CP_FIELD_NAME_ERROR_MSG]);

		if (isAsync) {
			onError(error);
			return;
		}

		throw new EndUserException(error.errorCode, error.message); 
	}

	try {
		result = this._funcDecodeResult(
			result[EU_SIGN_CP_FIELD_NAME_RESULT]);
	} catch (e) {
		error = this.MakeError(
			EndUserError.ERROR_LIBRARY_COMUNICATION_FAILED, '');

		if (isAsync) {
			onError(error);
			return;
		}

		throw new EndUserException(error.errorCode, error.message); 
	}

	if (isAsync) {
		onSuccess(result);
		return;
	}

	return result;
};

//--------------------------------------------------------------------------------

EUSignCP.prototype._funcDecodeResult = function(result) {
	if (result == null)
		return null;

	var _funcDecodeParams = function(params) {
		if (Array.isArray(params)) {
			var paramsArray = [];
			var length = params.length;

			for (var i = 0; i < length; i++)
				paramsArray[i] = _funcDecodeParams(params[i]);

			return paramsArray;
		} else if (typeof params == 'object') {
			var className = params[EU_SIGN_CP_FIELD_NAME_CLASS_NAME];
			var decodedParams;

			decodedParams = new (EndUserTransferableObject[className])();
			if (!decodedParams.decode(params))
				return null;

			if (decodedParams.className == 'EndUserByteArray')
				return decodedParams.GetData();

			return decodedParams;
		}

		return params;
	};

	return _funcDecodeParams(result);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype._checkVersion = function(version) {
	try {
		var classVersion = this.classVersion;

		if (classVersion == version)
			return true;

		classVersion = classVersion.split('.');
		version = version.split('.');

		if (classVersion.length != version.length)
			return false;

		for (var i = 0; i < version.length; i++) {
			if (parseInt(classVersion[i]) > parseInt(version[i]))
				return false;
		}
	} catch (e) {
		return false;
	}

	return true;
};

//--------------------------------------------------------------------------------

EUSignCP.prototype._stringToBytes = function(str, onError) {
	try {
		return this.m_stringCoder.encode(str);
	} catch (e) {
		var error = this.MakeError(
			EndUserError.ERROR_BAD_PARAMETER, '');
		if (typeof onError != 'undefined') {
			setTimeout(function() {onError(error);}, 1);
			return null;
		}

		throw new EndUserException(error.errorCode, error.message); 
	}
};

//--------------------------------------------------------------------------------

EUSignCP.prototype._bytesToString = function(data, onError) {
	try {
		return this.m_stringCoder.decode(data);
	} catch (e) {
		var error = this.MakeError(
			EndUserError.ERROR_BAD_PARAMETER, '');
		if (typeof onError != 'undefined') {
			setTimeout(function() {onError(error);}, 1);
			return null;
		}

		throw new EndUserException(error.errorCode, error.message); 
	}
};

//--------------------------------------------------------------------------------

EUSignCP.prototype._base64Encode = function(data, onError) {
	try {
		return this.m_base64Coder.encode(data);
	} catch (e) {
		var error = this.MakeError(
			EndUserError.ERROR_BAD_PARAMETER, '');
		if (typeof onError != 'undefined') {
			setTimeout(function() {onError(error);}, 1);
			return null;
		}

		throw new EndUserException(error.errorCode, error.message); 
	}
};

//--------------------------------------------------------------------------------

EUSignCP.prototype._base64Decode = function(str, onError) {
	try {
		return this.m_base64Coder.decode(str);
	} catch (e) {
		var error = this.MakeError(
			EndUserError.ERROR_BAD_PARAMETER, '');
		if (typeof onError != 'undefined') {
			setTimeout(function() {onError(error);}, 1);
			return null;
		}

		throw new EndUserException(error.errorCode, error.message); 
	}
};

//--------------------------------------------------------------------------------

EUSignCP.prototype._copyArrayData = function(outArr, inArr) {
	try {
		if (outArr.length != inArr.length)
			return false;

		if (Array.isArray(inArr) || Array.isArray(outArr)) {
			for (var i = 0; i < inArr.length; i++)
				outArr[i] = inArr[i];
		} else {
			outArr.set(inArr);
		}

		return true;
	} catch (e) {
		return false;
	}
};

//--------------------------------------------------------------------------------

EUSignCP.prototype._startMonitorLibraryStatus = function() {
	var pThis = this;

	try {
		pThis.m_monitorLibraryTimer = setInterval(
			function() {
				pThis.IsInitialized(function(isInitialized){
					if (!isInitialized)
						pThis._stopMonitorLibraryStatus();
				}, function (e) {
					pThis._stopMonitorLibraryStatus();
				});
			}, EU_SIGN_WEB_MONITOR_STATUS_INTERVAL);
	} catch (e) {
	}
};

//--------------------------------------------------------------------------------

EUSignCP.prototype._stopMonitorLibraryStatus = function() {
	try {
		if (this.m_monitorLibraryTimer == null)
			return;

		clearInterval(this.m_monitorLibraryTimer);
		this.m_monitorLibraryTimer = null;
	} catch (e) {
	}
};

//================================================================================

EUSignCP.prototype.IsAsync = function(onSuccess, onError) {
	return (typeof onSuccess != 'undefined') &&
		(typeof onError != 'undefined');
};

//================================================================================

EUSignCP.prototype.MakeError = function(errorCode, message) {
	if (message == '') {
		message = EndUserError.getErrorDescriptionEx(
			errorCode, this.m_language);
	}

	this.m_lastErrorCode = errorCode;
	this.m_lastError = message;

	return new EndUserError(errorCode, message);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.RaiseError = function(errorCode, message) {
	var error;

	error = this.MakeError(errorCode, message);

	throw new EndUserException(error.errorCode, error.message);
};

//================================================================================

EUSignCP.prototype.GetInstallURL = function(all, baseURL) {
	var osName = this.m_browserInfo.GetOSName();
	var arch = this.m_browserInfo.GetArch();
	var installs = [];

	baseURL = baseURL || EU_SIGN_WEB_INSTALL_DOWNLOAD_URL;
	var _addInstall = function(install) {
		installs.push(baseURL + '/' + install);
	};

	switch (osName) {
		case EndUserBrowserInfo.OS_NAME_WINDOWS:
			_addInstall(EU_SIGN_WEB_INSTALL_WIN);
			break;

		case EndUserBrowserInfo.OS_NAME_MAC:
			_addInstall(EU_SIGN_WEB_INSTALL_MAC);
			break;

		case EndUserBrowserInfo.OS_NAME_LINUX:
			if (arch == EndUserBrowserInfo.BROWSER_ARCH_NAME_X86) {
				_addInstall(EU_SIGN_WEB_INSTALL_LINUX_X32);
				_addInstall(EU_SIGN_WEB_INSTALL_LINUX_RPM_X32);
				_addInstall(EU_SIGN_WEB_INSTALL_LINUX_TAR_X32);
			} else {
				_addInstall(EU_SIGN_WEB_INSTALL_LINUX_X64);
				_addInstall(EU_SIGN_WEB_INSTALL_LINUX_RPM_X64);
				_addInstall(EU_SIGN_WEB_INSTALL_LINUX_TAR_X64);
			}
			break;

		case EndUserBrowserInfo.OS_NAME_ANDROID:
			_addInstall(EU_SIGN_WEB_INSTALL_ANDROID);
			break;

		default:
			return null;
	}

	return all ? installs : installs[0];
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.GetUpdateURL = function(all, baseURL) {
	var osName = this.m_browserInfo.GetOSName();
	var arch = this.m_browserInfo.GetArch();
	var updates = [];

	baseURL = baseURL || EU_SIGN_WEB_INSTALL_DOWNLOAD_URL;
	var _addUpdate = function(update) {
		updates.push(baseURL + '/' + update);
	};

	switch (osName) {
		case EndUserBrowserInfo.OS_NAME_WINDOWS:
			_addUpdate(EU_SIGN_WEB_UPDATE_WIN);
			break;

		case EndUserBrowserInfo.OS_NAME_MAC:
			_addUpdate(EU_SIGN_WEB_UPDATE_MAC);
			break;

		case EndUserBrowserInfo.OS_NAME_LINUX:
			if (arch == EndUserBrowserInfo.BROWSER_ARCH_NAME_X86) {
				_addUpdate(EU_SIGN_WEB_UPDATE_LINUX_X32);
				_addUpdate(EU_SIGN_WEB_UPDATE_LINUX_RPM_X32);
				_addUpdate(EU_SIGN_WEB_UPDATE_LINUX_TAR_X32);
			} else {
				_addUpdate(EU_SIGN_WEB_UPDATE_LINUX_X64);
				_addUpdate(EU_SIGN_WEB_UPDATE_LINUX_RPM_X64);
				_addUpdate(EU_SIGN_WEB_UPDATE_LINUX_TAR_X64);
			}
			break;

		case EndUserBrowserInfo.OS_NAME_ANDROID:
			_addUpdate(EU_SIGN_WEB_UPDATE_ANDROID);
			break;

		default:
			return null;
	}

	return all ? updates : updates[0];
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.GetHelpURL = function(baseURL) {
	var osName = this.m_browserInfo.GetOSName();

	baseURL = baseURL || EU_SIGN_WEB_INSTALL_DOWNLOAD_URL;

	switch (osName) {
		case EndUserBrowserInfo.OS_NAME_WINDOWS:
			return baseURL + '/' + EU_SIGN_WEB_MANUAL_WIN;
		case EndUserBrowserInfo.OS_NAME_MAC:
			return baseURL + '/' + EU_SIGN_WEB_MANUAL_MAC;
		case EndUserBrowserInfo.OS_NAME_LINUX:
			return baseURL + '/' + EU_SIGN_WEB_MANUAL_LINUX;
		default:
			return null;
	}
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.GetWebExtensionInstallURL = function() {
	var browserName = this.m_browserInfo.GetName();

	switch (browserName) {
		case EndUserBrowserInfo.BROWSER_NAME_CHROME:
			return EU_SIGN_CHROME_WEB_EXTENSION_INSTALL;

		case EndUserBrowserInfo.BROWSER_NAME_FIREFOX:
			return EU_SIGN_FIREFOX_WEB_EXTENSION_INSTALL;

		case EndUserBrowserInfo.BROWSER_NAME_OPERA:
			return EU_SIGN_OPERA_WEB_EXTENSION_INSTALL;

		default:
			return null;
	}
};

//================================================================================

EUSignCP.prototype.GetInstallPath = function(
	onSuccess, onError) {
	var params;

	params = this._funcMakeParams(null);

	return this._funcCall('GetInstallPath', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.SelectFile = function(
	read, defaultFileName, onSuccess, onError) {
	return this.SelectFileEx(read, defaultFileName, 
		null, null, null, null, onSuccess, onError);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.SelectFileEx = function(
	read, defaultFileName, filter, parentFolderName, 
	message, caption, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([read, defaultFileName, 
		filter, parentFolderName,  message, caption]);

	return this._funcCall('SelectFile', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.SelectFolder = function(
	onSuccess, onError) {
	return this.SelectFolderEx(
		null, null, null, onSuccess, onError);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.SelectFolderEx = function(
	folderName, message, caption, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([folderName, message, caption]);

	return this._funcCall('SelectFolder', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.CreateFolder = function(
	folderName, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([folderName]);

	return this._funcCall('CreateFolder', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.ReadFile = function(
	fileName, onSuccess, onError) {
	var isAsync = this.IsAsync(onSuccess, onError);
	var pThis = this;
	var chunkSize = pThis.EU_FILE_PROCESS_CHUNK_SIZE;

	if (isAsync) {
		var ctx = {
			buf: null,
			length: 0,
			curLength: 0
		};
		
		var _read = function(ctx) {
			if (ctx.curLength == ctx.length) {
				onSuccess(ctx.buf);
				return;
			}

			var partLength = (ctx.length - ctx.curLength);
			if (partLength > chunkSize)
				partLength = chunkSize;

			pThis.ReadFileWithOffset(
				fileName, ctx.curLength, partLength, 
				function(data) {
					ctx.buf.set(data, ctx.curLength, data.length);
					ctx.curLength += data.length;

					_read(ctx);
				}, 
				onError);
		};
		
		pThis.GetFileSize(fileName, 
			function(size) {
				ctx.buf = new Uint8Array(size);
				ctx.length = size;
				_read(ctx);
			},
			onError);
	} else {
		var size = pThis.GetFileSize(fileName);
		var parts = Math.floor(size / chunkSize);
		var lastPartSize = size % chunkSize;
		var data;

		var result = new Uint8Array(size);
		for (var i = 0; i < parts; i++) {
			data = pThis.ReadFileWithOffset(
				fileName, i * chunkSize, chunkSize);
			result.set(data, i * chunkSize, data.length);
		}

		if (lastPartSize != 0) {
			data = pThis.ReadFileWithOffset(
				fileName, parts * chunkSize, lastPartSize);
			result.set(data, parts * chunkSize, data.length);
		}
		
		return result;
	}
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.WriteFile = function(
	fileName, data, onSuccess, onError) {
	var isAsync = this.IsAsync(onSuccess, onError);
	var pThis = this;
	var chunkSize = pThis.EU_FILE_PROCESS_CHUNK_SIZE;

	if (isAsync) {
		var ctx = {
			buf: null,
			length: 0,
			curLength: 0
		};
		
		var _write = function(ctx, first) {
			if (!first && (ctx.curLength == ctx.length)) {
				onSuccess();
				return;
			}

			var partLength = (ctx.length - ctx.curLength);
			if (partLength > chunkSize)
				partLength = chunkSize;

			pThis.WriteFileWithOffset(
				fileName, ctx.curLength, 
				pThis.Copy(ctx.buf, ctx.curLength, chunkSize), 
				function() {
					ctx.curLength += partLength;

					_write(ctx, false);
				}, 
				onError);
		};
		
		ctx.buf = data;
		ctx.length = data.length;
		_write(ctx, true);
	} else {
		var size = data.length;
		var parts = Math.floor(size / chunkSize);
		var lastPartSize = size % chunkSize;

		for (var i = 0; i < parts; i++) {
			pThis.WriteFileWithOffset(
				fileName, i * chunkSize, 
				pThis.Copy(data, i * chunkSize, chunkSize));
		}

		if (lastPartSize != 0 || data.length == 0) {
			pThis.WriteFileWithOffset(
				fileName, parts * chunkSize, 
				pThis.Copy(data, parts * chunkSize, lastPartSize));
		}
	}
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.GetFileSize = function(
	fileName, onSuccess, onError)
{
	var params;

	params = this._funcMakeParams([fileName]);

	return this._funcCall('GetFileSize', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.ReadFileWithOffset = function(
	fileName, offset, length, onSuccess, onError)
{
	var params;

	params = this._funcMakeParams([fileName, offset, length]);

	return this._funcCall('ReadFileWithOffset', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.WriteFileWithOffset = function(
	fileName, offset, data, onSuccess, onError)
{
	var params;

	params = this._funcMakeParams([fileName, offset, 
		new EndUserByteArray(data)]);

	return this._funcCall('WriteFileWithOffset', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.DeleteFile = function(
	fileName, onSuccess, onError)
{
	var params;

	params = this._funcMakeParams([fileName]);

	this._funcCall('DeleteFile', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.AppendFile = function(
	fileName, fileNameWithPart, onSuccess, onError)
{
	var params;

	params = this._funcMakeParams([fileName, fileNameWithPart]);

	this._funcCall('AppendFile', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.CopyFileWithOffset = function(
	fileSrcName, fileSrcDataOffset, fileSrcDataLength, 
	fileDstName, onSuccess, onError)
{
	var params;

	params = this._funcMakeParams([
		fileSrcName, fileSrcDataOffset, fileSrcDataLength, 
		fileDstName]);

	this._funcCall('CopyFileWithOffset', params,
		onSuccess, onError, null);
};

//================================================================================

EUSignCP.prototype.Load = function(
	onSuccess, onError) {
	var isAsync = this.IsAsync(onSuccess, onError);
	var pThis = this;

	if (isAsync) {
		var _onSuccess = function(version) {
			if (!pThis._checkVersion(version)) {
				var error = pThis.MakeError(
					EndUserError.ERROR_LIBRARY_VERSION_NOT_SUPPORTED, '');
				onError(error);
				return;
			}

			onSuccess();
		};

		var _onError = function(error) {
			error = pThis.MakeError(
				EndUserError.ERROR_LIBRARY_COMUNICATION_FAILED, '');
			onError(error);
		};

		this.GetVersion(_onSuccess, _onError);
		return;
	}
	
	var isValidVersion;
	
	try {
		isValidVersion = this._checkVersion(this.GetVersion());
	} catch (e) {
		this.RaiseError(
			EndUserError.ERROR_LIBRARY_COMUNICATION_FAILED, '');
	}

	if (!isValidVersion) {
		this.RaiseError(
				EndUserError.ERROR_LIBRARY_VERSION_NOT_SUPPORTED, '');
	}
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.GetVersion = function(
	onSuccess, onError) {
	var params;

	params = this._funcMakeParams(null);

	return this._funcCall('GetVersion', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.IsInitialized = function(
	onSuccess, onError) {
	var params;

	params = this._funcMakeParams(null);

	return this._funcCall('IsInitialized', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.Initialize = function(
	onSuccess, onError) {
	var pThis = this;
	var isAsync = this.IsAsync(onSuccess, onError);

	var _onSuccess = function() {
		pThis._startMonitorLibraryStatus();

		onSuccess();
	};

	var params;

	params = this._funcMakeParams(null);

	this._funcCall('Initialize', params,
		isAsync ? _onSuccess : onSuccess, onError, null);
	if (!isAsync)
		pThis._startMonitorLibraryStatus();
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.Finalize = function(
	onSuccess, onError) {
	var params;

	this._stopMonitorLibraryStatus();

	params = this._funcMakeParams(null);

	this._funcCall('Finalize', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.ResetOperation = function(
	onSuccess, onError) {
	var params;

	params = this._funcMakeParams(null);

	this._funcCall('ResetOperation', params,
		onSuccess, onError, null);
};

//================================================================================

EUSignCP.prototype.SetUIMode = function(
	uiMode, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([uiMode]);

	this._funcCall('SetUIMode', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.SetLanguage = function(
	language, onSuccess, onError) {
	var params;

	var pThis = this;
	var isAsync = this.IsAsync(onSuccess, onError);

	var _onSuccess = function() {
		pThis.m_language = language;
		onSuccess();
	};

	params = this._funcMakeParams([language]);

	this._funcCall('SetLanguage', params,
		isAsync ? _onSuccess : onSuccess, onError, null);
	if (!isAsync)
		this.m_language = language;
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.SetCharset = function(
	charset, onSuccess, onError) {
	var coder;
	var isAsync = this.IsAsync(onSuccess, onError);

	coder = EndUserStringCoder.GetCoder(charset);
	if (coder == null) {
		var error = this.MakeError(
			EndUserError.ERROR_BAD_PARAMETER, '');

		if (isAsync) {
			setTimeout(function() {onError(error);}, 1);
			return;
		}

		throw new EndUserException(
			error.errorCode, error.message); 
	}

	this.m_stringCoder = coder;
	this.m_charset = charset;

	if (isAsync)
		setTimeout(function() {onSuccess();}, 1);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.SetRuntimeParameter = function(
	name, value, onSuccess, onError) {
	var params;

	if (typeof value == 'boolean')
		value = value ? 1 : 0;

	params = this._funcMakeParams([name, value]);

	this._funcCall('SetRuntimeParameter', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.GetStorageParameter = function(
	protect, name, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([protect, name]);

	return this._funcCall('GetStorageParameter', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.SetStorageParameter = function(
	protect, name, value, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([protect, name, value]);

	this._funcCall('SetStorageParameter', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.CreateArrayList = function() {
	return new EndUserArrayList();
};

//================================================================================

EUSignCP.prototype.GetLastError = function() {
	return this.m_lastError;
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.GetLastErrorCode = function() {
	return this.m_lastErrorCode;
};

//================================================================================

EUSignCP.prototype.BASE64Encode = function(
	data, onSuccess, onError) {
	var result = this._base64Encode(data, onError);
	if (this.IsAsync(onSuccess, onError))
		setTimeout(function() {onSuccess(result);}, 1);
	else
		return result;
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.BASE64Decode = function(
	str, onSuccess, onError) {
	var result = this._base64Decode(str, onError);
	if (this.IsAsync(onSuccess, onError))
		setTimeout(function() {onSuccess(result);}, 1);
	else
		return result;
};

//================================================================================

EUSignCP.prototype.StringToBytes = function(
	str, onSuccess, onError) {
	var result = this._stringToBytes(str, onError);
	if (this.IsAsync(onSuccess, onError))
		setTimeout(function() {onSuccess(result);}, 1);
	else
		return result;
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.BytesToString = function(
	array, onSuccess, onError) {
	var result = this._bytesToString(array, onError);
	if (this.IsAsync(onSuccess, onError))
		setTimeout(function() {onSuccess(result);}, 1);
	else
		return result;
};

//================================================================================

EUSignCP.prototype.Concatenate = function(arr1, arr2) {
	if (Array.isArray(arr1) && Array.isArray(arr2))
		return arr1.concat(arr2);

	var result;
	var length = arr1.length + arr2.length;
	if (Array.isArray(arr1) || Array.isArray(arr2)) {
		var i, j;
		result = new Array(length);
		for (i = 0; i < arr1.length; i++)
			result[i] = arr1[i];
		for (j = 0; j < arr2.length; i++,j++)
			result[i] = arr2[j];
	} else {
		result = new EndUserUint8Array(length);
		result.set(arr1);
		result.set(arr2, arr1.length);
	}

	return result;
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.Copy = function(arr, offset, length) {
	return arr.slice(offset, offset + length);
};

//================================================================================

EUSignCP.prototype.SetSettings = function(
	onSuccess, onError) {
	var params;

	params = this._funcMakeParams(null);

	this._funcCall('SetSettings', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.DoesNeedSetSettings = function(
	onSuccess, onError) {
	var params;

	params = this._funcMakeParams(null);

	return this._funcCall('DoesNeedSetSettings', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.InitializeMandatorySettings = function(
	onSuccess, onError) {
	var pThis = this;
	var isAsync = this.IsAsync(onSuccess, onError);

	if (isAsync) {
		eu_wait(function(runNext) {
			var fs = pThis.CreateFileStoreSettings();
			pThis.SetFileStoreSettings(fs, runNext, onError);
		}).eu_wait(function(runNext) {
			pThis.GetProxySettings( 
				function(proxy) {
					runNext();
				},
				function(e) {
					pThis.GetSystemProxySettings(
						function(proxy) {
							pThis.SetProxySettings(proxy, 
								runNext, onError);
						}, 
						function(e) {
							var proxy = pThis.CreateProxySettings();
							pThis.SetProxySettings(proxy, 
								runNext, onError);
						});
				});
		}).eu_wait(function(runNext) {
			var tsp = pThis.CreateTSPSettings();
			pThis.SetTSPSettings(tsp, runNext, onError);
		}).eu_wait(function(runNext) {
			var ldap = pThis.CreateLDAPSettings();
			pThis.SetLDAPSettings(ldap, runNext, onError);
		}).eu_wait(function() {
			var ocsp = pThis.CreateOCSPSettings();
			pThis.SetOCSPSettings(ocsp, onSuccess, onError);
		});
	} else {
		var fs = pThis.CreateFileStoreSettings();
		pThis.SetFileStoreSettings(fs);

		var proxy;
		try {
			proxy = pThis.GetProxySettings();
		} catch (e) {
			proxy = pThis.CreateProxySettings();
			try {
				proxy = pThis.GetSystemProxySettings();
			} catch (e) {
			}

			pThis.SetProxySettings(proxy);
		}

		var tsp = pThis.CreateTSPSettings();
		pThis.SetTSPSettings(tsp);

		var ldap = pThis.CreateLDAPSettings();
		pThis.SetLDAPSettings(ldap);

		var ocsp = pThis.CreateOCSPSettings();
		pThis.SetOCSPSettings(ocsp);
	}

};

//--------------------------------------------------------------------------------

EUSignCP.prototype.CreateModeSettings = function() {
	return new EndUserModeSettings();
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.GetModeSettings = function(
	onSuccess, onError) {
	var params;

	params = this._funcMakeParams(null);

	return this._funcCall('GetModeSettings', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.SetModeSettings = function(
	settings, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([settings]);

	this._funcCall('SetModeSettings', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.CreateKeyMediaSettings = function() {
	return new EndUserKeyMediaSettings();
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.GetKeyMediaSettings = function(
	onSuccess, onError) {
	var params;

	params = this._funcMakeParams(null);

	return this._funcCall('GetKeyMediaSettings', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.SetKeyMediaSettings = function(
	settings, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([settings]);

	this._funcCall('SetKeyMediaSettings', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.CreateFileStoreSettings = function() {
	return new EndUserFileStoreSettings();
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.GetFileStoreSettings = function(
	onSuccess, onError) {
	var params;

	params = this._funcMakeParams(null);

	return this._funcCall('GetFileStoreSettings', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.SetFileStoreSettings = function(
	settings, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([settings]);

	this._funcCall('SetFileStoreSettings', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.CreateProxySettings = function() {
	return new EndUserProxySettings();
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.GetProxySettings = function(
	onSuccess, onError) {
	var params;

	params = this._funcMakeParams(null);

	return this._funcCall('GetProxySettings', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.SetProxySettings = function(
	settings, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([settings]);

	this._funcCall('SetProxySettings', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.CreateOCSPSettings = function() {
	return new EndUserOCSPSettings();
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.GetOCSPSettings = function(
	onSuccess, onError) {
	var params;

	params = this._funcMakeParams(null);

	return this._funcCall('GetOCSPSettings', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.SetOCSPSettings = function(
	settings, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([settings]);

	this._funcCall('SetOCSPSettings', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.CreateOCSPAccessInfoModeSettings = function() {
	return new EndUserOCSPAccessInfoModeSettings();
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.GetOCSPAccessInfoModeSettings = function(
	onSuccess, onError) {
	var params;

	params = this._funcMakeParams(null);

	return this._funcCall('GetOCSPAccessInfoModeSettings', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.SetOCSPAccessInfoModeSettings = function(
	settings, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([settings]);

	this._funcCall('SetOCSPAccessInfoModeSettings', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.CreateOCSPAccessInfoSettings = function() {
	return new EndUserOCSPAccessInfoSettings();
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.EnumOCSPAccessInfoSettings = function(
	index, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([index]);

	return this._funcCall('EnumOCSPAccessInfoSettings', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.GetOCSPAccessInfoSettings = function(
	issuerCN, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([issuerCN]);

	return this._funcCall('GetOCSPAccessInfoSettings', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.SetOCSPAccessInfoSettings = function(
	settings, onSuccess, onError) {
	var pThis = this;
	var params;
	var isAsync = pThis.IsAsync(onSuccess, onError);

	if (!Array.isArray(settings))
		settings = [settings];

	if (isAsync) {
		var _SetOCSPAccessInfoSettings = function(index) {
			if (index >= settings.length) {
				onSuccess();
				return;
			}

			params = pThis._funcMakeParams([settings[index]]);

			pThis._funcCall('SetOCSPAccessInfoSettings', params,
				function() {
					_SetOCSPAccessInfoSettings(index + 1);
				}, onError, null);
		};

		_SetOCSPAccessInfoSettings(0);
	} else {
		for (var i = 0; i < settings.length; i++) {
			params = pThis._funcMakeParams([settings[i]]);

			pThis._funcCall('SetOCSPAccessInfoSettings', params,
				onSuccess, onError, null);
		}
	}
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.DeleteOCSPAccessInfoSettings = function(
	issuerCN, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([issuerCN]);

	this._funcCall('DeleteOCSPAccessInfoSettings', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.CreateTSPSettings = function() {
	return new EndUserTSPSettings();
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.GetTSPSettings = function(
	onSuccess, onError) {
	var params;

	params = this._funcMakeParams(null);

	return this._funcCall('GetTSPSettings', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.SetTSPSettings = function(
	settings, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([settings]);

	this._funcCall('SetTSPSettings', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.CreateLDAPSettings = function() {
	return new EndUserLDAPSettings();
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.GetLDAPSettings = function(
	onSuccess, onError) {
	var params;

	params = this._funcMakeParams(null);

	return this._funcCall('GetLDAPSettings', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.SetLDAPSettings = function(
	settings, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([settings]);

	this._funcCall('SetLDAPSettings', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.CreateCMPSettings = function() {
	return new EndUserCMPSettings();
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.GetCMPSettings = function(
	onSuccess, onError) {
	var params;

	params = this._funcMakeParams(null);

	return this._funcCall('GetCMPSettings', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.SetCMPSettings = function(
	settings, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([settings]);

	this._funcCall('SetCMPSettings', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.GetSystemProxySettings = function(
	onSuccess, onError) {
	var params;

	params = this._funcMakeParams(null);

	return this._funcCall('GetSystemProxySettings', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.SetOCSPResponseExpireTime = function(
	expireTime, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([expireTime]);

	this._funcCall('SetOCSPResponseExpireTime', params,
		onSuccess, onError, null);
};

//================================================================================

EUSignCP.prototype.RefreshFileStore = function(
	reload, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([reload]);

	this._funcCall('RefreshFileStore', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.ShowCertificates = function(
	onSuccess, onError) {
	var params;

	params = this._funcMakeParams(null);

	this._funcCall('ShowCertificates', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.SelectCertificateInfo = function(
	onSuccess, onError) {
	var params;

	params = this._funcMakeParams(null);

	return this._funcCall('SelectCertificateInfo', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.GetCertificatesCount = function(
	subjectType, subjectSubType, onSuccess, onError) {
	if (typeof subjectType != 'number' || 
		typeof subjectSubType != 'number') {
		onSuccess = subjectType;
		onError = subjectSubType;
		subjectType = this.SUBJECT_TYPE_UNDIFFERENCED;
		subjectSubType = this.SUBJECT_CA_SERVER_SUB_TYPE_UNDIFFERENCED;
	}

	var params;

	params = this._funcMakeParams([subjectType, subjectSubType]);

	return this._funcCall('GetCertificatesCount', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.GetCACertificatesCount = function(
	onSuccess, onError) {
	return this.GetCertificatesCount(
		this.SUBJECT_TYPE_CA, 
		this.SUBJECT_CA_SERVER_SUB_TYPE_UNDIFFERENCED,
		onSuccess, onError);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.GetCAServerCertificatesCount = function(
	onSuccess, onError) {
	return this.GetCertificatesCount(
		this.SUBJECT_TYPE_CA_SERVER, 
		this.SUBJECT_CA_SERVER_SUB_TYPE_UNDIFFERENCED,
		onSuccess, onError);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.GetCMPServerCertificatesCount = function(
	onSuccess, onError) {
	return this.GetCertificatesCount(
		this.SUBJECT_TYPE_CA_SERVER, 
		this.SUBJECT_CA_SERVER_SUB_TYPE_CMP,
		onSuccess, onError);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.GetOCSPServerCertificatesCount = function(
	onSuccess, onError) {
	return this.GetCertificatesCount(
		this.SUBJECT_TYPE_CA_SERVER, 
		this.SUBJECT_CA_SERVER_SUB_TYPE_OCSP,
		onSuccess, onError);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.GetTSPServerCertificatesCount = function(
	onSuccess, onError) {
	return this.GetCertificatesCount(
		this.SUBJECT_TYPE_CA_SERVER, 
		this.SUBJECT_CA_SERVER_SUB_TYPE_TSP,
		onSuccess, onError);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.GetRAAdministratorCertificatesCount = function(
	onSuccess, onError) {
	return this.GetCertificatesCount(
		this.SUBJECT_TYPE_RA_ADMINISTRATOR, 
		this.SUBJECT_CA_SERVER_SUB_TYPE_UNDIFFERENCED,
		onSuccess, onError);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.GetEndUserCertificatesCount = function(
	onSuccess, onError) {
	return this.GetCertificatesCount(
		this.SUBJECT_TYPE_END_USER, 
		this.SUBJECT_CA_SERVER_SUB_TYPE_UNDIFFERENCED,
		onSuccess, onError);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.EnumCertificates = function(
	subjectType, subjectSubType, certificateIndex, onSuccess, onError) {
	if (typeof subjectSubType != 'number' || 
		typeof certificateIndex != 'number') {
		onSuccess = subjectSubType;
		onError = certificateIndex;
		certificateIndex = subjectType;
		subjectType = this.SUBJECT_TYPE_UNDIFFERENCED;
		subjectSubType = this.SUBJECT_CA_SERVER_SUB_TYPE_UNDIFFERENCED;
	}

	var params;

	params = this._funcMakeParams([subjectType, 
		subjectSubType, certificateIndex]);

	return this._funcCall('EnumCertificates', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.EnumCACertificates = function(
	index, onSuccess, onError) {
	return this.EnumCertificates(
		index,
		this.SUBJECT_TYPE_CA, 
		this.SUBJECT_CA_SERVER_SUB_TYPE_UNDIFFERENCED,
		onSuccess, onError);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.EnumCAServerCertificates = function(
	index, onSuccess, onError) {
	return this.EnumCertificates(
		index,
		this.SUBJECT_TYPE_CA_SERVER, 
		this.SUBJECT_CA_SERVER_SUB_TYPE_UNDIFFERENCED,
		onSuccess, onError);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.EnumCMPServerCertificatesCount = function(
	index, onSuccess, onError) {
	return this.EnumCertificates(
		index,
		this.SUBJECT_TYPE_CA_SERVER, 
		this.SUBJECT_CA_SERVER_SUB_TYPE_CMP,
		onSuccess, onError);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.EnumOCSPServerCertificatesCount = function(
	index, onSuccess, onError) {
	return this.EnumCertificates(
		index,
		this.SUBJECT_TYPE_CA_SERVER, 
		this.SUBJECT_CA_SERVER_SUB_TYPE_OCSP,
		onSuccess, onError);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.EnumTSPServerCertificatesCount = function(
	index, onSuccess, onError) {
	return this.EnumCertificates(
		index,
		this.SUBJECT_TYPE_CA_SERVER, 
		this.SUBJECT_CA_SERVER_SUB_TYPE_TSP,
		onSuccess, onError);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.EnumRAAdministratorCertificatesCount = function(
	index, onSuccess, onError) {
	return this.EnumCertificates(
		index,
		this.SUBJECT_TYPE_RA_ADMINISTRATOR, 
		this.SUBJECT_CA_SERVER_SUB_TYPE_UNDIFFERENCED,
		onSuccess, onError);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.EnumEndUserCertificatesCount = function(
	index, onSuccess, onError) {
	return this.EnumCertificates(
		index,
		this.SUBJECT_TYPE_END_USER, 
		this.SUBJECT_CA_SERVER_SUB_TYPE_UNDIFFERENCED,
		onSuccess, onError);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.GetCertificateInfo = function(
	issuer, serial, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([issuer, serial]);

	return this._funcCall('GetCertificateInfo', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.GetCertificateInfoEx = function(
	issuer, serial, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([issuer, serial]);

	return this._funcCall('GetCertificateInfoEx', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.GetCertificate = function(
	issuer, serial, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([issuer, serial]);

	return this._funcCall('GetCertificate', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.CheckCertificateByIssuerAndSerial = function(
	issuer, serial, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([issuer, serial]);

	return this._funcCall('CheckCertificateByIssuerAndSerial',
		params, onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.CheckCertificate = function(
	certificate, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([
		new EndUserByteArray(certificate)]);

	return this._funcCall('CheckCertificate', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.ParseCertificate = function(
	certificate, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([
		new EndUserByteArray(certificate)]);

	return this._funcCall('ParseCertificate', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.ParseCertificateEx = function(
	certificate, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([
		new EndUserByteArray(certificate)]);

	return this._funcCall('ParseCertificateEx', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.SaveCertificate = function(
	certificate, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([new EndUserByteArray(certificate)]);

	return this._funcCall('SaveCertificate', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.SaveCertificates = function(
	certificates, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([new EndUserByteArray(certificates)]);

	return this._funcCall('SaveCertificates', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.SaveCertificatesEx = function(
	certificates, trustedCertificates, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([
		new EndUserByteArray(certificates),
		trustedCertificates ? 
			new EndUserByteArray(trustedCertificates) : null]);

	return this._funcCall('SaveCertificatesEx', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.GetCertificatesFromLDAPByEDRPOUCode = function(
	edrpouCode, certKeyType, keyUsage, ldapServers, ldapServersPorts,
	onSuccess, onError) {
	var params;

	if ((ldapServers != null) && (ldapServersPorts != null)) {
		if (ldapServers.className == 'EndUserArrayList')
			ldapServers = ldapServers.m_array;

		if (ldapServersPorts.className == 'EndUserArrayList')
			ldapServersPorts = ldapServersPorts.m_array;
	} else {
		ldapServers = null;
		ldapServersPorts= null;
	}

	params = this._funcMakeParams([edrpouCode, certKeyType,
		keyUsage, ldapServers, ldapServersPorts]);

	return this._funcCall('GetCertificatesFromLDAPByEDRPOUCode',
		params, onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.GetCertificateByEmail = function(
	email, certKeyType, keyUsage, onTime, onSuccess, onError) {
	var params;

	if (typeof onTime != 'string')
		onTime = this.m_dateCoder.encode(onTime);

	params = this._funcMakeParams([email,
		certKeyType, keyUsage, onTime]);

	return this._funcCall('GetCertificateByEmail',
		params, onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.GetCertificateByNBUCode = function(
	nbuCode, certKeyType, keyUsage, onTime, onSuccess, onError) {
	var params;

	if (typeof onTime != 'string')
		onTime = this.m_dateCoder.encode(onTime);

	params = this._funcMakeParams([nbuCode,
		certKeyType, keyUsage, onTime]);

	return this._funcCall('GetCertificateByNBUCode',
		params, onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.GetReceiversCertificates = function(
	onSuccess, onError) {
	var params;

	params = this._funcMakeParams(null);

	return this._funcCall('GetReceiversCertificates',
		params, onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.GetReceiversCertificatesInArrayList = function(
	onSuccess, onError) {
	var params;
	var pThis = this;

	params = this._funcMakeParams(null);
	
	var _callback = function(result, _onSuccess, _onError) {
		var isAsync = pThis.IsAsync(_onSuccess, _onError);
		try {
			var certsArrayList = new EndUserArrayList();
			for (var i = 0; i < result.length; i++)
				certsArrayList.add(result[i]);

			if (isAsync)
				_onSuccess(certsArrayList);
			else
				return certsArrayList;
		} catch (e) {
			var error = pThis.MakeError(
				EndUserError.ERROR_LIBRARY_COMUNICATION_FAILED, '');

			if (isAsync) {
				_onError(error);
				return;
			}

			throw new EndUserException(error.errorCode, error.message); 
		}
	};

	return this._funcCall('GetReceiversCertificates', params,
		onSuccess, onError, _callback);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.GetCertificates = function(
	subjectType, subjectSubType, onSuccess, onError) {
	var params;
	var pThis = this;

	params = this._funcMakeParams([subjectType, subjectSubType]);
	
	var _callback = function(result, _onSuccess, _onError) {
		var isAsync = pThis.IsAsync(_onSuccess, _onError);
		try {
			var certsArrayList = new EndUserArrayList();
			for (var i = 0; i < result.length; i++)
				certsArrayList.add(result[i]);

			if (isAsync)
				_onSuccess(certsArrayList);
			else
				return certsArrayList;
		} catch (e) {
			var error = pThis.MakeError(
				EndUserError.ERROR_LIBRARY_COMUNICATION_FAILED, '');

			if (isAsync) {
				_onError(error);
				return;
			}

			throw new EndUserException(error.errorCode, error.message); 
		}
	};

	return this._funcCall('GetCertificates', params,
		onSuccess, onError, _callback);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.GetCertificateByFingerprint = function(
	fingerprint, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([fingerprint]);

	return this._funcCall('GetCertificateByFingerprint', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.GetCertificatesByEDRPOUAndDRFOCode = function(
	edrpouCode, drfoCode, onSuccess, onError) {
	var params;
	var pThis = this;

	params = this._funcMakeParams([edrpouCode, drfoCode]);
	
	var _callback = function(result, _onSuccess, _onError) {
		var isAsync = pThis.IsAsync(_onSuccess, _onError);
		try {
			var certsArrayList = new EndUserArrayList();
			for (var i = 0; i < result.length; i++)
				certsArrayList.add(result[i]);

			if (isAsync)
				_onSuccess(certsArrayList);
			else
				return certsArrayList;
		} catch (e) {
			var error = pThis.MakeError(
				EndUserError.ERROR_LIBRARY_COMUNICATION_FAILED, '');

			if (isAsync) {
				_onError(error);
				return;
			}

			throw new EndUserException(error.errorCode, error.message); 
		}
	};

	return this._funcCall('GetCertificatesByEDRPOUAndDRFOCode', params,
		onSuccess, onError, _callback);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.ShowCRLs = function(
	onSuccess, onError) {
	var params;

	params = this._funcMakeParams(null);

	this._funcCall('ShowCRLs', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.GetCRLsCount = function(
	onSuccess, onError) {
	var params;

	params = this._funcMakeParams(null);

	return this._funcCall('GetCRLsCount', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.EnumCRLs = function(
	index, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([index]);

	return this._funcCall('EnumCRLs', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.GetCRLDetailedInfo = function(
	issuer, crlNumber, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([issuer, parseInt(crlNumber)]);

	return this._funcCall('GetCRLDetailedInfo', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.SaveCRL = function(
	fullCRL, CRL, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([fullCRL, new EndUserByteArray(CRL)]);

	return this._funcCall('SaveCRL', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.GetTSPByAccessInfo = function(
	hashAlgo, hash, accessInfo, accessInfoPort, onSuccess, onError) {
	var params;

	if (typeof hash != 'string') {
		hash = this._base64Encode(hash, onError);
		if (hash == null)
			return;
	}

	params = this._funcMakeParams([
		hashAlgo, hash, accessInfo, accessInfoPort]);

	return this._funcCall('GetTSPByAccessInfo', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.CheckTSP = function(
	tsp, hashAlgo, hash, onSuccess, onError) {
	var params;

	if (typeof tsp == 'string') {
		tsp = this._base64Decode(tsp, onError);
		if (tsp == null)
			return;
	}

	if (hash != null && typeof hash != 'string') {
		hash = this._base64Encode(hash, onError);
		if (hash == null)
			return;
	}

	params = this._funcMakeParams([
		new EndUserByteArray(tsp), hashAlgo, hash]);

	this._funcCall('CheckTSP', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.GetOCSPResponseByAccessInfo = function(
	certificate, accessInfo, accessInfoPort, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([
		new EndUserByteArray(certificate), 
		accessInfo, accessInfoPort]);

	return this._funcCall('GetOCSPResponseByAccessInfo', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.CheckOCSPResponse = function(
	ocspResponse, onTime, onSuccess, onError) {
	var params;

	if (typeof ocspResponse == 'string') {
		ocspResponse = this._base64Decode(ocspResponse, onError);
		if (ocspResponse == null)
			return;
	}
	
	if (onTime != null && typeof onTime != 'string')
		onTime = this.m_dateCoder.encode(onTime);

	params = this._funcMakeParams([
		new EndUserByteArray(ocspResponse), onTime]);

	return this._funcCall('CheckOCSPResponse', params,
		onSuccess, onError, null);
};

//================================================================================

EUSignCP.prototype.CreateKeyMedia = function() {
	return new EndUserKeyMedia();
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.GetPrivateKeyMedia = function(
	caption, onSuccess, onError) {
	var params;

	if (typeof caption != 'string')
		caption = null;

	params = this._funcMakeParams([caption]);

	return this._funcCall('GetPrivateKeyMedia', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.EnumKeyMediaTypes = function(
	typeIndex, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([typeIndex]);

	return this._funcCall('EnumKeyMediaTypes', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.EnumKeyMediaDevices = function(
	typeIndex, devIndex, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([typeIndex, devIndex]);

	return this._funcCall('EnumKeyMediaDevices', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.GetKeyMediaTypes = function(onSuccess, onError) {
	var params;

	params = this._funcMakeParams(null);

	return this._funcCall('GetKeyMediaTypes', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.GetKeyMediaDevices = function(
	typeIndex, onSuccess, onError) {
	var params;

	if (typeof (typeIndex) == 'number')
		typeIndex = [typeIndex];

	if (typeIndex)
		typeIndex = new EndUserByteArray(typeIndex);

	params = this._funcMakeParams([typeIndex]);

	return this._funcCall('GetKeyMediaDevices', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.IsPrivateKeyReaded = function(
	onSuccess, onError) {
	var params;

	params = this._funcMakeParams(null);

	return this._funcCall('IsPrivateKeyReaded', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.ReadPrivateKey = function(
	onSuccess, onError) {
	var params;

	params = this._funcMakeParams(null);

	this._funcCall('ReadPrivateKey', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.ReadPrivateKeySilently = function(
	typeIndex, devIndex, password, onSuccess, onError) {
	var params;
	var keyMedia;

	if (typeof (typeIndex) == 'number') {
		keyMedia = new EndUserKeyMedia();
		keyMedia.typeIndex = typeIndex;
		keyMedia.devIndex = devIndex;
		keyMedia.password = password;
	} else {
		keyMedia = typeIndex;
		onSuccess = devIndex;
		onError = password;
	}

	params = this._funcMakeParams([keyMedia]);

	this._funcCall('ReadPrivateKeySilently', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.ReadPrivateKeyBinary = function(
	privateKey, password, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([
		new EndUserByteArray(privateKey), password]);

	this._funcCall('ReadPrivateKeyBinary', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.ReadPrivateKeyFile = function(
	fileName, password, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([fileName, password]);

	this._funcCall('ReadPrivateKeyFile', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.CtxReadPrivateKey= function(
	context, typeIndex, devIndex, password, onSuccess, onError) {
	var params;
	var keyMedia;

	if (typeof (typeIndex) == 'number') {
		keyMedia = new EndUserKeyMedia();
		keyMedia.typeIndex = typeIndex;
		keyMedia.devIndex = devIndex;
		keyMedia.password = password;
	} else {
		keyMedia = typeIndex;
		onSuccess = devIndex;
		onError = password;
	}

	params = this._funcMakeParams([context, keyMedia]);

	return this._funcCall('CtxReadPrivateKey', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.CtxReadPrivateKeyBinary = function(
	context, privateKey, password, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([context, 
		new EndUserByteArray(privateKey), password]);

	return this._funcCall('CtxReadPrivateKeyBinary', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.ResetPrivateKey = function(
	onSuccess, onError) {
	var params;

	params = this._funcMakeParams(null);

	this._funcCall('ResetPrivateKey', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.CtxFreePrivateKey = function(
	pkContext, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([pkContext]);

	this._funcCall('CtxFreePrivateKey', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.ShowOwnCertificate = function(
	onSuccess, onError) {
	var params;

	params = this._funcMakeParams(null);

	this._funcCall('ShowOwnCertificate', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.GetOwnCertificate = function(
	certKeyType, keyUsage, onSuccess, onError) {
	var params;

	if (typeof certKeyType != 'number' ||
		typeof keyUsage != 'number') {
		onSuccess = certKeyType;
		onError = keyUsage;
		certKeyType = null;
		keyUsage = null;
	}

	params = this._funcMakeParams([certKeyType, keyUsage]);

	return this._funcCall('GetOwnCertificate', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.EnumOwnCertificates = function(
	index, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([index]);

	return this._funcCall('EnumOwnCertificates', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.GetPrivateKeyOwnerInfo = function(
	onSuccess, onError) {
	var params;

	params = this._funcMakeParams(null);

	return this._funcCall('GetPrivateKeyOwnerInfo', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.CtxEnumOwnCertificates = function(
	pkContext, index, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([pkContext, index]);

	return this._funcCall('CtxEnumOwnCertificates', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.CtxGetOwnCertificate = function(
	pkContext, certKeyType, keyUsage, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([pkContext, certKeyType, keyUsage]);

	return this._funcCall('CtxGetOwnCertificate', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.GetKeyInfo = function(
	keyMedia, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([keyMedia]);

	return this._funcCall('GetKeyInfo', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.GetKeyInfoSilently = function(
	typeIndex, devIndex, password, onSuccess, onError) {
	var keyMedia;

	keyMedia = new EndUserKeyMedia();
	keyMedia.typeIndex = typeIndex;
	keyMedia.devIndex = devIndex;
	keyMedia.password = password;

	return this.GetKeyInfo(keyMedia, onSuccess, onError);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.GetKeyInfoBinary = function(
	privateKey, password, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([
		new EndUserByteArray(privateKey), password]);

	return this._funcCall('GetKeyInfoBinary', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.GetKeyInfoFile = function(
	privateKeyFileName, password, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([
		privateKeyFileName, password]);

	return this._funcCall('GetKeyInfoFile', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.GetCertificateByKeyInfo = function(
	typeIndex, devIndex, onSuccess, onError) {
	var params;
	var paramsArr = [];

	if ((typeof typeIndex != 'number') ||
		(typeof devIndex != 'number')) {
		onError = onSuccess;
		onSuccess = devIndex;
	}
	
	if ((typeof typeIndex == 'number') && 
		(typeof devIndex == 'number')) {
		paramsArr.push(typeIndex);
		paramsArr.push(devIndex);
		paramsArr.push(null);
	} else {
		paramsArr.push(null);
		paramsArr.push(null);
		paramsArr.push(new EndUserByteArray(typeIndex));
	}

	params = this._funcMakeParams(paramsArr);

	return this._funcCall('GetCertificateByKeyInfo', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.GetCertificatesByKeyInfo = function(
	keyInfo, cmpServers, cmpServersPorts, onSuccess, onError) {
	var params;

	if (keyInfo.className == 'EndUserPrivateKeyInfo')
		keyInfo = keyInfo.GetPrivateKeyInfo();

	if (cmpServers != null && cmpServersPorts != null) {
		if (cmpServers.className == 'EndUserArrayList')
			cmpServers = cmpServers.m_array;

		if (cmpServersPorts.className == 'EndUserArrayList')
			cmpServersPorts = cmpServersPorts.m_array;
	} else {
		cmpServers = null;
		cmpServersPorts = null;
	}

	params = this._funcMakeParams([
		new EndUserByteArray(keyInfo), cmpServers, cmpServersPorts]);

	return this._funcCall('GetCertificatesByKeyInfo', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.ChangeSoftwarePrivateKeyPassword = function(
	privateKey, password, newPassword, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([
		new EndUserByteArray(privateKey), password, newPassword]);

	return this._funcCall("ChangeSoftwarePrivateKeyPassword", params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.EnumJKSPrivateKeys = function(
	container, index, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([
		new EndUserByteArray(container), index]);

	return this._funcCall("EnumJKSPrivateKeys", params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.EnumJKSPrivateKeysFile = function(
	fileName, index, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([fileName, index]);

	return this._funcCall("EnumJKSPrivateKeysFile", params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.GetJKSPrivateKey = function(
	container, keyAlias, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([
		new EndUserByteArray(container), keyAlias]);

	return this._funcCall("GetJKSPrivateKey", params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.GetJKSPrivateKeyFile = function(
	fileName, keyAlias, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([fileName, keyAlias]);

	return this._funcCall("GetJKSPrivateKeyFile", params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.CreatePrivateKeyInfo = function() {
	return new EndUserPrivateKeyInfo();
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.CreateEndUserInfo = function() {
	return new EndUserInfo();
};

//--------------------------------------------------------------------------------

EUSignCP.prototype._generatePrivateKey = function(
	selectDevice, typeIndex, devIndex, password, 
	uaKeysType, uaDSKeysSpec, useDSKeyAsKEP, uaKEPSpec,
	uaParamsPath, internationalKeysType, internationalKeysSpec,
	internationalParamsPath, keyInfo, getPrivateKey, onSuccess, onError) {
	if (this.IsAsync(onSuccess, onError)) {
		var _onSuccess = function(requestsArrayList) {
			onSuccess(requestsArrayList.m_array);
		};

		this.GeneratePrivateKeyEx(
			selectDevice, typeIndex, devIndex, password, 
			false, uaKeysType, uaDSKeysSpec, useDSKeyAsKEP,
			uaKEPSpec, uaParamsPath, internationalKeysType,
			internationalKeysSpec, internationalParamsPath,
			null, null, keyInfo, getPrivateKey, _onSuccess, onError);
		return;
	} else {
		var requestsArrayList = this.GeneratePrivateKeyEx(
			selectDevice, typeIndex, devIndex, password, 
			false, uaKeysType, uaDSKeysSpec, useDSKeyAsKEP,
			uaKEPSpec, uaParamsPath, internationalKeysType,
			internationalKeysSpec, internationalParamsPath,
			null, null, keyInfo, getPrivateKey, onSuccess, onError);

		return requestsArrayList.m_array;
	}
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.GeneratePrivateKey = function(
	p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, 
	p10, p11, p12, p13, p14, p15) {
	if (typeof p0 == 'boolean') {
		return this._generatePrivateKeyEx(
			p0, p1, p2, p3, p4, p5, p6, p7, p8, p9,
			p10, p11, p12, p13, p14, p15);
	} else if (typeof p2 == 'boolean') {
		return this._generatePrivateKey(
			true, 0, 0, "", p0, p1, p2, p3, p4, p5,
			p6, p7, null, false, p8, p9);
	} else if (typeof p2 == 'string') {
		return this._generatePrivateKey(false, 
			p0, p1, p2, p3, p4, p5, p6, p7, p8, p9,
			p10, null, false, p11, p12);
	} else if (typeof p2 == 'number') {
		return this._generatePrivateKey(false, 0, 0,
			p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, 
			true, p10, p11);
	} else {
		var error = this.MakeError(
			EndUserError.ERROR_BAD_PARAMETER, '');
		throw new EndUserException(error.errorCode, error.message);
	}
};

//--------------------------------------------------------------------------------

EUSignCP.prototype._generatePrivateKeyEx = function(
	selectDevice, typeIndex, devIndex, password, setKeyMediaPassword,
	uaKeysType, uaDSKeySpec, useDSKeyAsKEP, uaKEPSpec, uaParamsPath,
	internationalKeysType, internationalKeysSpec, internationalParamsPath,
	endUserInfo, extKeyUsages, keyInfo, getPrivateKey, onSuccess, onError) {
	var params;
	var pThis = this;
	var keyMedia;

	if (!selectDevice) {
		keyMedia = new EndUserKeyMedia();
		keyMedia.typeIndex = typeIndex;
		keyMedia.devIndex = devIndex;
		keyMedia.password = (typeof password != 'string') ? 
			'' : password;
	} else {
		keyMedia = null;
	}

	if (keyInfo == null)
		getPrivateKey = false;
	
	params = this._funcMakeParams([
		selectDevice, keyMedia, setKeyMediaPassword,
		uaKeysType, uaDSKeySpec, useDSKeyAsKEP, uaKEPSpec, uaParamsPath,
		internationalKeysType, internationalKeysSpec, internationalParamsPath,
		endUserInfo, extKeyUsages, keyInfo != null, getPrivateKey]);

	var _callback = function(result, _onSuccess, _onError) {
		var isAsync = pThis.IsAsync(_onSuccess, _onError);
		try {
			var requests = result[0];
			var requestsArrayList = new EndUserArrayList();
			for (var i = 0; i < requests.length; i++)
				requestsArrayList.add(requests[i]);

			if (keyInfo != null)
				keyInfo.set(result[1]);

			if (isAsync)
				_onSuccess(requestsArrayList);
			else
				return requestsArrayList;
		} catch (e) {
			var error = pThis.MakeError(
				EndUserError.ERROR_LIBRARY_COMUNICATION_FAILED, '');

			if (isAsync) {
				_onError(error);
				return;
			}

			throw new EndUserException(error.errorCode, error.message); 
		}
	};

	return this._funcCall('GeneratePrivateKeyEx', params,
		onSuccess, onError, _callback);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.GeneratePrivateKeyEx = function(
	p0, p1, p2, p3, p4, p5, p6, p7, p8, p9,
	p10, p11, p12, p13, p14, p15, p16, p17, p18) {
	if (typeof p0 == 'boolean') {
		if (typeof p4 == 'boolean') {
			return this._generatePrivateKeyEx(
				p0, p1, p2, p3, p4, p5, p6, p7, p8, p9,
				p10, p11, p12, p13, p14, p15, p16, p17, p18);
		} else {
			return this._generatePrivateKeyEx(
				p0, p1, p2, p3, false, p4, p5, p6, p7, p8, p9,
				p10, p11, null, null, p12, p13, p14, p15);
		}
	} else if (typeof p2 == 'boolean') {
		if ((typeof p9 != 'undefined' && p9 == null) || 
			(typeof p9 == 'string')) {
			return this._generatePrivateKeyEx(
				true, 0, 0, "", false, p0, p1, p2, p3, p4, p5,
				p6, p7, p8, p9, null, false, p10, p11);
		} else {
			return this._generatePrivateKeyEx(
				true, 0, 0, "", false, p0, p1, p2, p3, p4, p5,
				p6, p7, null, null, null, false, p8, p9);
		}
	} else if (typeof p0 == 'number') {
		if (typeof p3 == 'boolean') {
			return this._generatePrivateKeyEx(false, 
				p0, p1, p2, p3, p4, p5, p6, p7, p8, p9,
				p10, p11, p12, p13, null, false, p14, p15);
		} else {
			return this._generatePrivateKeyEx(false, 
				p0, p1, p2, false, p3, p4, p5, p6, p7, p8, p9,
				p10, null, null, null, false, p11, p12);
		}
	} else if (typeof p0 == 'string') {
		if ((typeof p10 != 'undefined' && p10 == null) || 
			(typeof p10 == 'string')) {
			return this._generatePrivateKeyEx(false, 0, 0, p0, false, 
				p1, p2, p3, p4, p5, p6, p7, p8, p9, p10,
				p11, true, p12, p13);
		} else {
			return this._generatePrivateKeyEx(false, 0, 0, p0, false, 
				p1, p2, p3, p4, p5, p6, p7, p8, null, null,
				p9, true, p10, p11);
		}
	} else {
		var error = this.MakeError(
			EndUserError.ERROR_BAD_PARAMETER, '');
		throw new EndUserException(error.errorCode, error.message);
	}
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.GetCRInfo = function(
	request, requestType, requestPath, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([
		new EndUserByteArray(request), 
		requestType, requestPath]);

	return this._funcCall('GetCRInfo', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.IsHardwareKeyMedia = function(
	typeIndex, devIndex, password, onSuccess, onError) {
	var params;
	var keyMedia;

	if (typeof (typeIndex) == 'number') {
		keyMedia = new EndUserKeyMedia();
		keyMedia.typeIndex = typeIndex;
		keyMedia.devIndex = devIndex;
		keyMedia.password = password;
	} else {
		keyMedia = null;
		onSuccess = typeIndex;
		onError = devIndex;
	}

	params = this._funcMakeParams([keyMedia]);

	return this._funcCall('IsHardwareKeyMedia', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.IsPrivateKeyExists = function(
	typeIndex, devIndex, password, onSuccess, onError) {
	var params;
	var keyMedia;

	if (typeof (typeIndex) == 'number') {
		keyMedia = new EndUserKeyMedia();
		keyMedia.typeIndex = typeIndex;
		keyMedia.devIndex = devIndex;
		keyMedia.password = password;
	} else {
		keyMedia = null;
		onSuccess = typeIndex;
		onError = devIndex;
	}

	params = this._funcMakeParams([keyMedia]);

	return this._funcCall('IsPrivateKeyExists', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.ChangePrivateKeyPassword = function(
	typeIndex, devIndex, password, newPassword, onSuccess, onError) {
	var params;
	var keyMedia;

	if (typeof (typeIndex) == 'number') {
		keyMedia = new EndUserKeyMedia();
		keyMedia.typeIndex = typeIndex;
		keyMedia.devIndex = devIndex;
		keyMedia.password = password;
	} else {
		keyMedia = null;
		newPassword = null;
		onSuccess = typeIndex;
		onError = devIndex;
	}

	params = this._funcMakeParams([keyMedia, newPassword]);

	this._funcCall('ChangePrivateKeyPassword', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.BackupPrivateKey = function(
	sourceTypeIndex, sourceDevIndex, sourcePassword,
	targetTypeIndex, targetDevIndex, targetPassword,
	onSuccess, onError) {
	var params;
	var sourceKeyMedia;
	var targetKeyMedia;

	if (typeof (sourceTypeIndex) == 'number') {
		sourceKeyMedia = new EndUserKeyMedia();
		sourceKeyMedia.typeIndex = sourceTypeIndex;
		sourceKeyMedia.devIndex = sourceDevIndex;
		sourceKeyMedia.password = sourcePassword;

		targetKeyMedia = new EndUserKeyMedia();
		targetKeyMedia.typeIndex = targetTypeIndex;
		targetKeyMedia.devIndex = targetDevIndex;
		targetKeyMedia.password = targetPassword;
	} else {
		sourceKeyMedia = null;
		targetKeyMedia = null;
		onSuccess = sourceTypeIndex;
		onError = sourceDevIndex;
	}

	params = this._funcMakeParams([
		sourceKeyMedia, targetKeyMedia]);

	this._funcCall('BackupPrivateKey', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.DestroyPrivateKey = function(
	typeIndex, devIndex, password, onSuccess, onError) {
	var params;
	var keyMedia;

	if (typeof (typeIndex) == 'number') {
		keyMedia = new EndUserKeyMedia();
		keyMedia.typeIndex = typeIndex;
		keyMedia.devIndex = devIndex;
		keyMedia.password = password;
	} else {
		keyMedia = null;
		onSuccess = typeIndex;
		onError = devIndex;
	}

	params = this._funcMakeParams([keyMedia]);

	this._funcCall('DestroyPrivateKey', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.SetKeyMediaPassword = function(
	typeIndex, devIndex, password, onSuccess, onError) {
	var params;
	var keyMedia;

	if (typeof (typeIndex) == 'number') {
		keyMedia = new EndUserKeyMedia();
		keyMedia.typeIndex = typeIndex;
		keyMedia.devIndex = devIndex;
		keyMedia.password = password;
	} else {
		keyMedia = null;
		onSuccess = typeIndex;
		onError = devIndex;
	}

	params = this._funcMakeParams([keyMedia]);

	this._funcCall('SetKeyMediaPassword', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.SetKeyMediaUserPassword = function(
	soPassword, typeIndex, devIndex, password, onSuccess, onError) {
	var params;
	var keyMedia;

	if (typeof (typeIndex) == 'number') {
		keyMedia = new EndUserKeyMedia();
		keyMedia.typeIndex = typeIndex;
		keyMedia.devIndex = devIndex;
		keyMedia.password = password;
	} else {
		keyMedia = null;
		onSuccess = typeIndex;
		onError = devIndex;
	}

	params = this._funcMakeParams([soPassword, keyMedia]);

	this._funcCall('SetKeyMediaUserPassword', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.ChangeOwnCertificatesStatus = function(
	requestType, revocationReason, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([requestType, revocationReason]);

	this._funcCall('ChangeOwnCertificatesStatus', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.CtxChangeOwnCertificatesStatus = function(
	pkContext, requestType, revocationReason, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([pkContext, requestType, revocationReason]);

	this._funcCall('CtxChangeOwnCertificatesStatus', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.MakeNewCertificate = function(
	oldKeyMedia, oldPrivateKey, oldPrivateKeyPassword,
	uaKeysType, uaDSKeysSpec, useDSKeyAsKEP, uaKEPKeysSpec,
	uaParamsPath, internationalKeysType, internationalKeysSpec,
	internationalParamsPath, newKeyMedia, newPrivateKeyPassword,
	onSuccess, onError) {
	var params;

	if (oldPrivateKey != null) {
		oldPrivateKey = new EndUserByteArray(oldPrivateKey);
	}
	
	params = this._funcMakeParams([
		oldKeyMedia, oldPrivateKey, oldPrivateKeyPassword,
		uaKeysType, uaDSKeysSpec, useDSKeyAsKEP, uaKEPKeysSpec,
		uaParamsPath, internationalKeysType, internationalKeysSpec,
		internationalParamsPath, newKeyMedia, newPrivateKeyPassword]);

	return this._funcCall('MakeNewCertificate', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.MakeNewOwnCertificate = function(
	uaKeysType, uaDSKeysSpec, useDSKeyAsKEP, uaKEPKeysSpec,
	uaParamsPath, internationalKeysType, internationalKeysSpec,
	internationalParamsPath, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([
		uaKeysType, uaDSKeysSpec, useDSKeyAsKEP, uaKEPKeysSpec,
		uaParamsPath, internationalKeysType, internationalKeysSpec,
		internationalParamsPath]);

	return this._funcCall('MakeNewOwnCertificate', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.CtxMakeNewOwnCertificate = function(
	pkContext, uaKeysType, uaDSKeysSpec, useDSKeyAsKEP, uaKEPKeysSpec,
	uaParamsPath, internationalKeysType, internationalKeysSpec,
	internationalParamsPath, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([
		pkContext, uaKeysType, uaDSKeysSpec, useDSKeyAsKEP, uaKEPKeysSpec,
		uaParamsPath, internationalKeysType, internationalKeysSpec,
		internationalParamsPath]);

	return this._funcCall('CtxMakeNewOwnCertificate', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.CtxMakeDeviceCertificate = function(
	pkContext, deviceName, uaRequest, uaKEPRequest, 
	internationalRequest, ecdsaRequest, cmpAddress, cmpPort, 
	onSuccess, onError) {
	var params;

	if (uaRequest != null)
		uaRequest = new EndUserByteArray(uaRequest);
	if (uaKEPRequest != null)
		uaKEPRequest = new EndUserByteArray(uaKEPRequest);
	if (internationalRequest != null)
		internationalRequest = new EndUserByteArray(internationalRequest);
	if (ecdsaRequest != null)
		ecdsaRequest = new EndUserByteArray(ecdsaRequest);

	params = this._funcMakeParams([
		pkContext, deviceName, uaRequest, uaKEPRequest, 
		internationalRequest, ecdsaRequest, cmpAddress, cmpPort]);

	return this._funcCall('CtxMakeDeviceCertificate', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.GetOwnEUserParams = function(onSuccess, onError) {
	var params;

	params = this._funcMakeParams(null);

	return this._funcCall('GetOwnEUserParams', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.ModifyOwnEUserParams = function(
	phone, email, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([phone, email]);

	return this._funcCall('ModifyOwnEUserParams', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.CtxGetOwnEUserParams = function(
	pkContext, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([pkContext]);

	return this._funcCall('CtxGetOwnEUserParams', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.CtxModifyOwnEUserParams = function(
	pkContext, phone, email, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([pkContext, phone, email]);

	return this._funcCall('CtxModifyOwnEUserParams', params,
		onSuccess, onError, null);
};

//================================================================================

EUSignCP.prototype.Hash = function(
	data, onSuccess, onError) {
	var params;

	if (typeof data == 'string') {
		data = this._stringToBytes(data, onError);
		if (data == null)
			return;
	}

	params = this._funcMakeParams([new EndUserByteArray(data)]);

	return this._funcCall('Hash', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.ContinueHash = function(
	data, offset, length, onSuccess, onError) {
	var params;

	if (typeof offset != 'number' || typeof length != 'number') {
		onSuccess = offset;
		onError = length;
	}

	if (typeof data == 'string') {
		data = this._stringToBytes(data, onError);
		if (data == null)
			return;
	}

	if (typeof offset == 'number' && typeof length == 'number')
		data = data.slice(offset, offset + length);

	params = this._funcMakeParams([new EndUserByteArray(data)]);

	this._funcCall('ContinueHash', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.EndHash = function(
	onSuccess, onError) {
	var params;

	params = this._funcMakeParams(null);

	return this._funcCall('EndHash', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.HashWithParams = function(
	certificate, data, onSuccess, onError) {
	var params;

	if (typeof data == 'string') {
		data = this._stringToBytes(data, onError);
		if (data == null)
			return;
	}

	params = this._funcMakeParams([new EndUserByteArray(certificate),
		new EndUserByteArray(data)]);

	return this._funcCall('HashWithParams', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.HashBeginWithParams = function(
	certificate, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([
		new EndUserByteArray(certificate)]);

	this._funcCall('HashBeginWithParams', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.HashFile = function(
	fileName, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([fileName]);

	return this._funcCall('HashFile', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.HashFileWithParams = function(
	certificate, fileName, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([
		new EndUserByteArray(certificate), fileName]);

	return this._funcCall('HashFileWithParams', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.CtxHash = function(
	context, hashAlgo, certificate, data, 
	onSuccess, onError) {
	var pThis = this;
	var isAsync = this.IsAsync(onSuccess, onError);
	var chunkMaxSize = pThis.EU_FILE_PROCESS_CHUNK_SIZE;

	if (typeof data == 'string') {
		data = this._stringToBytes(data, onError);
		if (data == null)
			return;
	}

	if (isAsync) {
		var ctx = {
			hashContext: null,
			hash: null
		};

		var _onError = function(e) {
			if (ctx.hashContext != null) {
				pThis.CtxHashFree(
					ctx.hashContext,
					function() {
						onError(e);
					}, function() {
						onError(e);
					});
				return;
			}
			
			onError(e);
		};

		eu_wait(function(runNext) {
			pThis.CtxHashBegin(
				context, hashAlgo, certificate, 
				runNext, _onError);
		}).eu_wait(function(runNext, hashContext) {
			ctx.hashContext = hashContext;
	
			var _onHash = function(offset) {
				if (offset >= data.length) {
					pThis.CtxHashEnd(
						hashContext, runNext, _onError);
					return;
				}

				var chunkSize = (data.length - offset);
				if (chunkSize > chunkMaxSize)
					chunkSize = chunkMaxSize;
	
				var chunk = data.slice(
					offset, offset + chunkSize);
				pThis.CtxHashContinue(
					hashContext, chunk,
					function(){
						_onHash(offset + chunkSize);
					}, 
					_onError);
			};
			
			_onHash(0);
		}).eu_wait(function(runNext, hash) {
			ctx.hash = hash;
			pThis.CtxHashFree(
				ctx.hashContext, runNext, onError);
		}).eu_wait(function() {
			onSuccess(ctx.hash);
		});
	} else {
		var hashContext = null;

		try {
			var hash = null;
			var offset = 0;

			hashContext = pThis.CtxHashBegin(
				context, hashAlgo, certificate);
				
			while (true) {
				var chunkSize = (data.length - offset);
				if (chunkSize > chunkMaxSize)
					chunkSize = chunkMaxSize;
	
				var chunk = data.slice(
					offset, offset + chunkSize);
				pThis.CtxHashContinue(hashContext, chunk);
				offset += chunkSize;
				if (offset < data.length)
					continue;
				break;
			}

			hash = pThis.CtxHashEnd(hashContext);

			pThis.CtxHashFree(hashContext);
			hashContext = null;

			return hash;
		} catch (e) {
			if (hashContext != null)
				pThis.CtxHashFree(hashContext);
			throw e;
		}
	}
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.CtxHashBegin = function(
	context, hashAlgo, certificate, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([
		context, hashAlgo, 
		certificate ? new EndUserByteArray(certificate) : null]);

	return this._funcCall('CtxHashBegin', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.CtxHashContinue = function(
	hashContext, data, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([
		hashContext, new EndUserByteArray(data)]);

	this._funcCall('CtxHashContinue', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.CtxHashEnd = function(
	hashContext, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([hashContext]);

	return this._funcCall('CtxHashEnd', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.CtxHashFree = function(
	hashContext, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([hashContext]);

	this._funcCall('CtxHashFree', params,
		onSuccess, onError, null);
};

//================================================================================

EUSignCP.prototype.ShowSignInfo = function(
	signInfo, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([signInfo]);

	this._funcCall("ShowSignInfo", params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.IsSigned = function(
	data, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([new EndUserByteArray(data)]);

	return this._funcCall("IsSigned", params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.IsSignedFile = function(
	fileName, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([fileName]);

	return this._funcCall("IsSignedFile", params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.GetSignType = function(
	signIndex, signature, onSuccess, onError) {
	var params;

	if (typeof signature != 'string') {
		signature = this._base64Encode(signature, onError);
		if (signature == null)
			return;
	}

	params = this._funcMakeParams([signIndex, signature]);

	return this._funcCall("GetSignType", params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.GetFileSignType = function(
	signIndex, fileName, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([signIndex, fileName]);

	return this._funcCall("GetFileSignType", params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.GetSignsCount = function(
	signature, onSuccess, onError) {
	var params;

	if (typeof signature != 'string') {
		signature = this._base64Encode(signature, onError);
		if (signature == null)
			return;
	}

	params = this._funcMakeParams([signature]);

	return this._funcCall("GetSignsCount", params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.GetSignerInfo = function(
	signIndex, signature, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([signIndex, signature]);

	return this._funcCall("GetSignerInfo", params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.GetSignerCertificate = function(
	signIndex, signature, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([signIndex, signature]);

	return this._funcCall('GetSignerCertificate', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.GetFileSignsCount = function(
	fileName, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([fileName]);

	return this._funcCall("GetFileSignsCount", params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.GetFileSignerInfo = function(
	signIndex, fileNameWithSign, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([signIndex, fileNameWithSign]);

	return this._funcCall('GetFileSignerInfo', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.GetFileSignerCertificate = function(
	signIndex, fileName, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([signIndex, fileName]);

	return this._funcCall('GetFileSignerCertificate', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.CtxGetSignerInfo = function(
	context, signIndex, signature, onSuccess, onError) {
	var params;

	if (typeof signature != 'string') {
		signature = this._base64Encode(signature, onError);
		if (signature == null)
			return;
	}

	params = this._funcMakeParams([
		context, signIndex, signature]);

	return this._funcCall("CtxGetSignerInfo", params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.Sign = function(
	data, onSuccess, onError) {
	var params;

	if (typeof data == 'string') {
		data = this._stringToBytes(data, onError);
		if (data == null)
			return;
	}

	params = this._funcMakeParams([new EndUserByteArray(data)]);

	return this._funcCall('Sign', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.Verify = function(
	signature, data, showSignerInfo, onSuccess, onError) {
	var params;
	var paramsArr = [];

	if (typeof showSignerInfo != 'boolean') {
		onError = onSuccess;
		onSuccess = showSignerInfo;
	}
	
	if (typeof data == 'string') {
		data = this._stringToBytes(data, onError);
		if (data == null)
			return;
	}

	paramsArr.push(signature);
	paramsArr.push(new EndUserByteArray(data));

	if (typeof showSignerInfo == 'boolean')
		paramsArr.push(showSignerInfo);
	else
		paramsArr.push(null);

	params = this._funcMakeParams(paramsArr);

	return this._funcCall("Verify", params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.ContinueSign = function(
	data, offset, length, onSuccess, onError) {
	var params;

	if (typeof offset != 'number' || typeof length != 'number') {
		onSuccess = offset;
		onError = length;
	}

	if (typeof data == 'string') {
		data = this._stringToBytes(data, onError);
		if (data == null)
			return;
	}

	if (typeof offset == 'number' && typeof length == 'number')
		data = data.slice(offset, offset + length);

	params = this._funcMakeParams([new EndUserByteArray(data)]);

	this._funcCall('ContinueSign', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.EndSign = function(
	onSuccess, onError) {
	var params;

	params = this._funcMakeParams(null);

	return this._funcCall('EndSign', params,
		onSuccess, onError, null);
};

//-------------------------------------------------------------------------------

EUSignCP.prototype.BeginVerify = function(
	signature, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([signature]);

	this._funcCall('BeginVerify', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.ContinueVerify = function(
	data, offset, length, onSuccess, onError) {
	var params;

	if (typeof offset != 'number' || typeof length != 'number') {
		onSuccess = offset;
		onError = length;
	}

	if (typeof data == 'string') {
		data = this._stringToBytes(data, onError);
		if (data == null)
			return;
	}

	if (typeof offset == 'number' && typeof length == 'number')
		data = data.slice(offset, offset + length);

	params = this._funcMakeParams([
		new EndUserByteArray(data)]);

	this._funcCall('ContinueVerify', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.EndVerify = function(
	showSignerInfo, onSuccess, onError) {
	var params;
	var paramsArr = [];

	if (typeof showSignerInfo != 'boolean') {
		onError = onSuccess;
		onSuccess = showSignerInfo;
	}

	if (typeof showSignerInfo != 'boolean')
		paramsArr.push(showSignerInfo);
	else 
		paramsArr.push(null);

	params = this._funcMakeParams(paramsArr);

	return this._funcCall('EndVerify', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.SignHash = function(
	hash, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([hash]);

	return this._funcCall('SignHash', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.VerifyHash = function(
	hash, signature, showSignerInfo, onSuccess, onError) {
	var params;
	var paramsArr = [];

	if (typeof showSignerInfo != 'boolean') {
		onError = onSuccess;
		onSuccess = showSignerInfo;
	}

	paramsArr.push(hash);
	paramsArr.push(signature);

	if (typeof showSignerInfo == 'boolean')
		paramsArr.push(showSignerInfo);
	else
		paramsArr.push(null);

	params = this._funcMakeParams(paramsArr);

	return this._funcCall("VerifyHash", params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.SignInternal = function(
	appendCert, data, onSuccess, onError) {
	var params;

	if (typeof data == 'string') {
		data = this._stringToBytes(data, onError);
		if (data == null)
			return;
	}

	params = this._funcMakeParams([appendCert, 
		new EndUserByteArray(data)]);

	return this._funcCall('SignInternal', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.VerifyInternal = function(
	signedData, showSignerInfo, onSuccess, onError) {
	var params;
	var paramsArr = [];

	if (typeof showSignerInfo != 'boolean') {
		onError = onSuccess;
		onSuccess = showSignerInfo;
	}

	paramsArr.push(signedData);

	if (typeof showSignerInfo == 'boolean')
		paramsArr.push(showSignerInfo);
	else
		paramsArr.push(null);

	params = this._funcMakeParams(paramsArr);

	return this._funcCall("VerifyInternal", params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.VerifyInternalString = function(
	signedData, showSignerInfo, onSuccess, onError) {
	var pThis = this;

	if (typeof showSignerInfo != 'boolean') {
		onError = onSuccess;
		onSuccess = showSignerInfo;
	}

	if (this.IsAsync(onSuccess, onError)) {
		var _onSuccess = function(data) {
			pThis.BytesToString(
				data, onSuccess, onError);
		};

		this.VerifyInternal(
			signedData, showSignerInfo, 
			_onSuccess, onError);
	} else {
		var data = this.VerifyInternal(
			signedData, showSignerInfo);
		return this.BytesToString(data);
	}
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.SignFile = function(
	fileName, fileNameWithSign, externalSign,
	onSuccess, onError) {
	var params;

	params = this._funcMakeParams([fileName, 
		fileNameWithSign, externalSign]);

	this._funcCall("SignFile", params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.VerifyFile = function(
	fileNameWithSign, fileName, showSignerInfo,
	onSuccess, onError) {
	var params;
	var paramsArr = [];

	if (typeof showSignerInfo != 'boolean') {
		onError = onSuccess;
		onSuccess = showSignerInfo;
	}

	paramsArr.push(fileNameWithSign);
	paramsArr.push(fileName);
	if (typeof showSignerInfo == 'boolean')
		paramsArr.push(showSignerInfo);
	else
		paramsArr.push(null);

	params = this._funcMakeParams(paramsArr);

	return this._funcCall('VerifyFile', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.VerifyFileWithExternalSign = function(
	fileName, fileNameWithExternalSign,
	showSignerInfo, onSuccess, onError) {
	return this.VerifyFile(fileNameWithExternalSign, fileName,
		showSignerInfo, onSuccess, onError);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.VerifyFileWithInternalSign = function(
	fileNameWithInternalSign, fileName,
	showSignerInfo, onSuccess, onError) {
	return this.VerifyFile(fileNameWithInternalSign, fileName,
		showSignerInfo, onSuccess, onError);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.IsAlreadySigned = function(
	signature, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([signature]);

	return this._funcCall("IsAlreadySigned", params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.IsFileAlreadySigned = function(
	fileNameWithSign, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([fileNameWithSign]);

	return this._funcCall("IsFileAlreadySigned", params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.AppendSign = function(
	data, previousSign, onSuccess, onError) {
	var params;

	if (typeof data == 'string') {
		data = this._stringToBytes(data, onError);
		if (data == null)
			return;
	}

	if (typeof previousSign != 'string') {
		previousSign = this._base64Encode(previousSign, onError);
		if (previousSign == null)
			return;
	}

	params = this._funcMakeParams([
		new EndUserByteArray(data), previousSign]);

	return this._funcCall("AppendSign", params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.VerifySpecific = function(
	signature, data, signIndex, showSignerInfo,
	onSuccess, onError) {
	var params;
	var paramsArr = [];

	if (typeof showSignerInfo != 'boolean') {
		onError = onSuccess;
		onSuccess = showSignerInfo;
	}
	
	if (typeof data == 'string') {
		data = this._stringToBytes(data, onError);
		if (data == null)
			return;
	}

	paramsArr.push(signature);
	paramsArr.push(new EndUserByteArray(data));
	paramsArr.push(signIndex);

	if (typeof showSignerInfo == 'boolean')
		paramsArr.push(showSignerInfo);
	else
		paramsArr.push(null);

	params = this._funcMakeParams(paramsArr);

	return this._funcCall("VerifySpecific", params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.AppendSignBegin = function(
	previousSign, onSuccess, onError) {
	var params;

	if (typeof previousSign != 'string') {
		previousSign = this._base64Encode(previousSign, onError);
		if (previousSign == null)
			return;
	}

	params = this._funcMakeParams([previousSign]);

	this._funcCall("AppendSignBegin", params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.VerifyDataSpecificBegin = function(
	signIndex, signature, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([signIndex, signature]);

	this._funcCall("VerifyDataSpecificBegin", params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.AppendSignHash = function(
	hash, previousSign, onSuccess, onError) {
	var params;

	if (typeof hash != 'string') {
		hash = this._base64Encode(hash, onError);
		if (hash == null)
			return;
	}

	if (typeof previousSign != 'string') {
		previousSign = this._base64Encode(previousSign, onError);
		if (previousSign == null)
			return;
	}

	params = this._funcMakeParams([hash, previousSign]);

	return this._funcCall("AppendSignHash", params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.VerifyHashSpecific = function(
	hash, signIndex, signature, showSignerInfo,
	onSuccess, onError) {
	var params;
	var paramsArr = [];

	if (typeof showSignerInfo != 'boolean') {
		onError = onSuccess;
		onSuccess = showSignerInfo;
	}

	paramsArr.push(hash);
	paramsArr.push(signIndex);
	paramsArr.push(signature);

	if (typeof showSignerInfo == 'boolean')
		paramsArr.push(showSignerInfo);
	else
		paramsArr.push(null);

	params = this._funcMakeParams(paramsArr);

	return this._funcCall("VerifyHashSpecific", params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.AppendSignInternal = function(
	appendCertificate, previousSign, onSuccess, onError) {
	var params;

	if (typeof previousSign != 'string') {
		previousSign = this._base64Encode(previousSign, onError);
		if (previousSign == null)
			return;
	}

	params = this._funcMakeParams([appendCertificate, previousSign]);

	return this._funcCall("AppendSignInternal", params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.VerifySpecificInternal = function(
	signedData, signIndex, showSignerInfo, onSuccess, onError) {
	var params;
	var paramsArr = [];

	if (typeof showSignerInfo != 'boolean') {
		onError = onSuccess;
		onSuccess = showSignerInfo;
	}

	paramsArr.push(signedData);
	paramsArr.push(signIndex);

	if (typeof showSignerInfo == 'boolean')
		paramsArr.push(showSignerInfo);
	else 
		paramsArr.push(null);

	params = this._funcMakeParams(paramsArr);

	return this._funcCall("VerifySpecificInternal", params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.VerifySpecificInternalString = function(
	signedData, signIndex, showSignerInfo, onSuccess, onError) {
	var pThis = this;

	if (typeof showSignerInfo != 'boolean') {
		onError = onSuccess;
		onSuccess = showSignerInfo;
	}

	if (this.IsAsync(onSuccess, onError)) {
		var _onSuccess = function(signedData) {
			pThis.BytesToString(
				signedData, onSuccess, onError);
		};

		this.VerifySpecificInternal(
			signedData, signIndex, showSignerInfo,
			_onSuccess, onError);
	} else {
		var data = this.VerifySpecificInternal(
			signedData, signIndex, showSignerInfo);
		return this.BytesToString(data);
	}
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.AppendSignFile = function(
	fileName, fileNameWithPreviousSign, fileNameWithSign,
	externalSign, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([fileName,
		fileNameWithPreviousSign, 
		fileNameWithSign, externalSign]);

	return this._funcCall("AppendSignFile", params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.VerifyFileSpecific = function(
	signIndex, fileNameWithSign, fileName, 
	showSignerInfo, onSuccess, onError) {
	var params;
	var paramsArr = [];

	if (typeof showSignerInfo != 'boolean') {
		onError = onSuccess;
		onSuccess = showSignerInfo;
	}

	paramsArr.push(signIndex);
	paramsArr.push(fileNameWithSign);
	paramsArr.push(fileName);

	if (typeof showSignerInfo == 'boolean')
		paramsArr.push(showSignerInfo);
	else
		paramsArr.push(null);

	params = this._funcMakeParams(paramsArr);

	return this._funcCall('VerifyFileSpecific', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.VerifyFileWithExternalSignSpecific = function(
	signIndex, fileNameWithExternalSign, 
	fileName, showSignerInfo, onSuccess, onError) {
	return this.VerifyFileSpecific(signIndex, 
		fileNameWithExternalSign, fileName, 
		showSignerInfo, onSuccess, onError);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.VerifyFileWithInternalSignSpecific = function(
	signIndex, fileNameWithInternalSign, fileName,
	showSignerInfo, onSuccess, onError) {
	return this.VerifyFileSpecific(signIndex, 
		fileNameWithInternalSign, fileName, 
		showSignerInfo, onSuccess, onError);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.CreateEmptySign = function(
	data, onSuccess, onError) {
	var params;
	var paramsArr = [];

	if (arguments.length == 2) {
		onError = onSuccess;
		onSuccess = data;
	}

	if (typeof data == 'string') {
		data = this._stringToBytes(data, onError);
		if (data == null)
			return;
	}

	if (arguments.length == 1 || arguments.length == 3)
		paramsArr.push(new EndUserByteArray(data));
	else
		paramsArr.push(null);

	params = this._funcMakeParams(paramsArr);

	return this._funcCall('CreateEmptySign', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.CreateSigner = function(
	hash, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([hash]);

	return this._funcCall('CreateSigner', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.AppendSigner = function(
	signer, certificate, previousSign, onSuccess, onError) {
	var params;
	var paramsArr = [];

	paramsArr.push(signer);
	if (certificate != null)
		paramsArr.push(new EndUserByteArray(certificate));
	else
		paramsArr.push(null);

	paramsArr.push(previousSign);

	params = this._funcMakeParams(paramsArr);

	return this._funcCall('AppendSigner', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.AppendValidationDataToSignerEx = function(
	previousSigner, certificate, signType, onSuccess, onError) {
	var params;
	var paramsArr = [];

	if (typeof previousSigner != 'string') {
		previousSigner = this._base64Encode(previousSigner, onError);
		if (previousSigner == null)
			return;
	}
	
	paramsArr.push(previousSigner);
	if (certificate != null)
		paramsArr.push(new EndUserByteArray(certificate));
	else
		paramsArr.push(null);
	
	paramsArr.push(signType);

	params = this._funcMakeParams(paramsArr);

	return this._funcCall("AppendValidationDataToSignerEx", params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.IsDataInSignedDataAvailable = function(
	data, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([data]);

	return this._funcCall('IsDataInSignedDataAvailable', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.IsDataInSignedFileAvailable = function(
	fileNameWithSignedData, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([fileNameWithSignedData]);

	return this._funcCall('IsDataInSignedFileAvailable', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.GetDataFromSignedData = function(
	signedData, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([signedData]);

	return this._funcCall('GetDataFromSignedData', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.GetDataFromSignedFile = function(
	fileNameWithSignedData, fileNameWithData, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([fileNameWithSignedData,
		fileNameWithData]);

	this._funcCall('GetDataFromSignedFile', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.GetCertificateFromSignedData = function(
	index, signedData, onSuccess, onError) {
	var params;

	if (typeof signedData != 'string') {
		signedData = this._base64Encode(signedData, onError);
		if (signedData == null)
			return;
	}

	params = this._funcMakeParams([index, signedData]);

	return this._funcCall('GetCertificateFromSignedData', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.GetCertificateFromSignedFile = function(
	index, fileNameWithSignedData, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([index, fileNameWithSignedData]);

	return this._funcCall('GetCertificateFromSignedFile', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.GetSignTimeInfo = function(
	signIndex, signature, onSuccess, onError) {
	var params;

	if (typeof signature != 'string') {
		signature = this._base64Encode(signature, onError);
		if (signature == null)
			return;
	}

	params = this._funcMakeParams([signIndex, signature]);

	return this._funcCall('GetSignTimeInfo', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.GetFileSignTimeInfo = function(
	signIndex, fileNameWithSign, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([signIndex, fileNameWithSign]);

	return this._funcCall('GetFileSignTimeInfo', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.VerifyHashOnTime = function(
	hash, signIndex, signature, onTime,
	showSignerInfo, onSuccess, onError) {
	return this.VerifyHashOnTimeEx(hash, signIndex,
		signature, onTime, (onTime != null), false,
		showSignerInfo, onSuccess, onError);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.VerifyHashOnTimeEx = function(
	hash, signIndex, signature, onTime, forceUseOffline,
	noCRL, showSignerInfo, onSuccess, onError) {
	var params;
	var paramsArr = [];

	if (typeof showSignerInfo != 'boolean') {
		onError = onSuccess;
		onSuccess = showSignerInfo;
	}

	if (typeof hash != 'string') {
		hash = this._base64Encode(hash, onError);
		if (hash == null)
			return;
	}

	if (typeof signature != 'string') {
		signature = this._base64Encode(signature, onError);
		if (signature == null)
			return;
	}

	paramsArr = [hash, signIndex, signature,
		onTime, forceUseOffline, noCRL];

	if (typeof showSignerInfo == 'boolean')
		paramsArr.push(showSignerInfo);
	else
		paramsArr.push(null);

	params = this._funcMakeParams(paramsArr);

	return this._funcCall("VerifyHashOnTimeEx", params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.VerifyDataOnTime = function(
	data, signIndex, signature, onTime,
	showSignerInfo, onSuccess, onError) {
	return this.VerifyDataOnTimeEx(data, signIndex,
		signature, onTime, (onTime != null), false,
		showSignerInfo, onSuccess, onError);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.VerifyDataOnTimeEx = function(
	data, signIndex, signature, onTime, forceUseOffline,
	noCRL, showSignerInfo, onSuccess, onError) {
	var params;
	var paramsArr = [];

	if (typeof showSignerInfo != 'boolean') {
		onError = onSuccess;
		onSuccess = showSignerInfo;
	}

	if (typeof data == 'string') {
		data = this._stringToBytes(data, onError);
		if (data == null)
			return;
	}

	if (typeof signature != 'string') {
		signature = this._base64Encode(signature, onError);
		if (signature == null)
			return;
	}

	paramsArr = [new EndUserByteArray(data), signIndex, 
		signature, onTime, forceUseOffline, noCRL];

	if (typeof showSignerInfo == 'boolean')
		paramsArr.push(showSignerInfo);
	else
		paramsArr.push(null);

	params = this._funcMakeParams(paramsArr);

	return this._funcCall("VerifyDataOnTimeEx", params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.VerifyDataInternalOnTime = function(
	signedData, signIndex, onTime,
	showSignerInfo, onSuccess, onError) {
	return this.VerifyDataInternalOnTimeEx(signedData,
		signIndex, onTime, (onTime != null), false,
		showSignerInfo, onSuccess, onError);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.VerifyDataInternalOnTimeEx = function(
	signedData, signIndex, onTime, forceUseOffline, noCRL,
	showSignerInfo, onSuccess, onError) {
	var params;
	var paramsArr = [];

	if (typeof showSignerInfo != 'boolean') {
		onError = onSuccess;
		onSuccess = showSignerInfo;
	}

	if (typeof signedData != 'string') {
		signedData = this._base64Encode(signedData, onError);
		if (signedData == null)
			return;
	}

	paramsArr = [signedData, signIndex,
		onTime, forceUseOffline, noCRL];

	if (typeof showSignerInfo == 'boolean')
		paramsArr.push(showSignerInfo);
	else
		paramsArr.push(null);

	params = this._funcMakeParams(paramsArr);

	return this._funcCall("VerifyDataInternalOnTimeEx", params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.VerifyDataInternalOnTimeString = function(
	signedData, signIndex, onTime, 
	showSignerInfo, onSuccess, onError) {
	return this.VerifyDataInternalOnTimeStringEx(signedData,
		signIndex, onTime, (onTime != null), false, 
		showSignerInfo, onSuccess, onError);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.VerifyDataInternalOnTimeStringEx = function(
	signedData, signIndex, onTime, forceUseOffline, noCRL, 
	showSignerInfo, onSuccess, onError) {
	var pThis = this;

	if (typeof showSignerInfo != 'boolean') {
		onError = onSuccess;
		onSuccess = showSignerInfo;
	}

	if (this.IsAsync(onSuccess, onError)) {
		var _onSuccess = function(signedData) {
			pThis.BytesToString(
				signedData, onSuccess, onError);
		};

		this.VerifyDataInternalOnTimeEx(
			signedData, signIndex, onTime, 
			forceUseOffline, noCRL, showSignerInfo,
			_onSuccess, onError);
	} else {
		var data = this.VerifyDataInternalOnTimeEx(
			signedData, signIndex, onTime, 
			forceUseOffline, noCRL, showSignerInfo);
		return this.BytesToString(data);
	}
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.VerifyDataOnTimeBegin = function(
	signIndex, signature, onTime, onSuccess, onError) {
	this.VerifyDataOnTimeBeginEx(signIndex,
		signature, onTime, (onTime != null), false, 
		onSuccess, onError);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.VerifyDataOnTimeBeginEx = function(
	signIndex, signature, onTime, forceUseOffline, noCRL,
	onSuccess, onError) {
	var params;

	params = this._funcMakeParams([signIndex,
		signature, onTime, forceUseOffline, noCRL]);

	this._funcCall("VerifyDataOnTimeBeginEx", params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.VerifyFileOnTime = function(
	signIndex, fileNameWithSign, fileName, onTime, 
	forceUseOffline, noCRL, showSignerInfo, onSuccess, onError) {
	var params;
	var paramsArr = [];

	if (typeof showSignerInfo != 'boolean') {
		onError = onSuccess;
		onSuccess = showSignerInfo;
	}

	paramsArr = [signIndex, fileNameWithSign, fileName,
		onTime, forceUseOffline, noCRL];

	if (typeof showSignerInfo == 'boolean')
		paramsArr.push(showSignerInfo);
	else
		paramsArr.push(null);

	params = this._funcMakeParams(paramsArr);

	return this._funcCall("VerifyFileOnTimeEx",
		params, onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.VerifyFileWithExternalSignOnTime = function(
	signIndex, fileName, fileNameWithExternalSign,
	onTime, showSignerInfo, onSuccess, onError) {
	return this.VerifyFileOnTime(signIndex, fileNameWithExternalSign, fileName,
		onTime, (onTime != null), false, showSignerInfo, onSuccess, onError);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.VerifyFileWithExternalSignOnTimeEx = function(
	signIndex, fileName, fileNameWithExternalSign, onTime, 
	forceUseOffline, noCRL, showSignerInfo, onSuccess, onError) {
	return this.VerifyFileOnTime(signIndex, fileNameWithExternalSign, fileName,
		onTime, forceUseOffline, noCRL, showSignerInfo, onSuccess, onError);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.VerifyFileWithInternalSignOnTime = function(
	signIndex, fileNameWithInternalSign, fileName,
	onTime, showSignerInfo, onSuccess, onError) {
	return this.VerifyFileOnTime(signIndex, fileNameWithInternalSign, fileName,
		onTime, (onTime != null), false, showSignerInfo, onSuccess, onError);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.VerifyFileWithInternalSignOnTimeEx = function(
	signIndex, fileName, fileNameWithInternalSign, onTime, 
	forceUseOffline, noCRL, showSignerInfo, onSuccess, onError) {
	return this.VerifyFileOnTime(signIndex, fileNameWithInternalSign, fileName,
		onTime, forceUseOffline, noCRL, showSignerInfo, onSuccess, onError);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.ContinueSignCtx = function(
	context, data, onSuccess, onError) {
	var params;

	if (context == null)
		context = new EndUserOperationContext();

	if (typeof data == 'string') {
		data = this._stringToBytes(data, onError);
		if (data == null)
			return;
	}

	params = this._funcMakeParams([context, 
		new EndUserByteArray(data)]);

	return this._funcCall('ContinueSignCtx', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.ContinueSignCtxWithOffset = function(
	context, data, offset, length, onSuccess, onError) {
	data = data.slice(offset, offset + length);

	return this.ContinueSignCtx(context, data, onSuccess, onError);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.EndSignCtx = function(
	context, appendCert, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([context, appendCert]);

	return this._funcCall('EndSignCtx', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.BeginVerifyCtx = function(
	signature, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([signature]);

	return this._funcCall('BeginVerifyCtx', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.ContinueVerifyCtx = function(
	context, data, offset, length, onSuccess, onError) {
	var params;

	if (typeof offset != 'number' || typeof length != 'number') {
		onSuccess = offset;
		onError = length;
	}

	if (typeof data == 'string') {
		data = this._stringToBytes(data, onError);
		if (data == null)
			return;
	}

	if (typeof offset == 'number' && typeof length == 'number')
		data = data.slice(offset, offset + length);

	params = this._funcMakeParams([context, 
		new EndUserByteArray(data)]);

	this._funcCall('ContinueVerifyCtx', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.EndVerifyCtx = function(
	context, showSignerInfo, onSuccess, onError) {
	var params;
	var paramsArr = [];

	if (typeof showSignerInfo != 'boolean') {
		onSuccess = showSignerInfo;
		onError = onSuccess;
	}

	paramsArr.push(context);

	if (typeof showSignerInfo == 'boolean')
		paramsArr.push(showSignerInfo);
	else
		paramsArr.push(null);

	params = this._funcMakeParams(paramsArr);

	return this._funcCall('EndVerifyCtx', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.ResetOperationCtx = function(
	context, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([context]);

	this._funcCall('ResetOperationCtx', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.SignHashRSA = function(
	hash, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([hash]);

	return this._funcCall('SignHashRSA', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.SignRSA = function(
	data, appendCert, externalSign, onSuccess, onError) {
	var params;

	if (typeof data == 'string') {
		data = this._stringToBytes(data, onError);
		if (data == null)
			return;
	}

	params = this._funcMakeParams([
		new EndUserByteArray(data),
		appendCert, externalSign]);

	return this._funcCall('SignRSA', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.ContinueRSASign = function(
	data, onSuccess, onError) {
	var params;

	if (typeof data == 'string') {
		data = this._stringToBytes(data, onError);
		if (data == null)
			return;
	}

	params = this._funcMakeParams([new EndUserByteArray(data)]);

	this._funcCall('ContinueRSASign', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.ContinueRSASignWithOffset = function(
	data, offset, length, onSuccess, onError) {
	data = data.slice(offset, offset + length);

	return this.ContinueRSASign(data, onSuccess, onError);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.EndRSASign = function(
	appendCert, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([appendCert]);

	return this._funcCall('EndRSASign', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.SignRSAFile = function(
	fileName, fileNameWithSign, externalSign, 
	onSuccess, onError) {
	var params;

	params = this._funcMakeParams([fileName, 
		fileNameWithSign, externalSign]);

	return this._funcCall('SignRSAFile', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.ContinueRSASignCtx = function(
	context, data, onSuccess, onError) {
	var params;

	if (context == null)
		context = new EndUserOperationContext();

	if (typeof data == 'string') {
		data = this._stringToBytes(data, onError);
		if (data == null)
			return;
	}

	params = this._funcMakeParams([context, 
		new EndUserByteArray(data)]);

	return this._funcCall('ContinueRSASignCtx', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.ContinueRSASignCtxWithOffset = function(
	context, data, offset, length, onSuccess, onError) {
	data = data.slice(offset, offset + length);

	return this.ContinueRSASignCtx(data, onSuccess, onError);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.EndRSASignCtx = function(
	context, appendCert, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([context, appendCert]);

	return this._funcCall('EndRSASignCtx', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.SignECDSA = function(
	data, appendCert, externalSign, onSuccess, onError) {
	var params;

	if (typeof data == 'string') {
		data = this._stringToBytes(data, onError);
		if (data == null)
			return;
	}

	params = this._funcMakeParams([
		new EndUserByteArray(data),
		appendCert, externalSign]);

	return this._funcCall('SignECDSA', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.RawSign = function(
	data, onSuccess, onError) {
	var params;

	if (typeof data == 'string') {
		data = this._stringToBytes(data, onError);
		if (data == null)
			return;
	}

	params = this._funcMakeParams([
		new EndUserByteArray(data)]);

	return this._funcCall('RawSign', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.RawVerify = function(
	signature, data, showSignerInfo, onSuccess, onError) {
	var params;
	var paramsArr = [];

	if (typeof showSignerInfo != 'boolean') {
		onError = onSuccess;
		onSuccess = showSignerInfo;
	}

	if (typeof data == 'string') {
		data = this._stringToBytes(data, onError);
		if (data == null)
			return;
	}

	paramsArr.push(signature);
	paramsArr.push(new EndUserByteArray(data));

	if (typeof showSignerInfo == 'boolean')
		paramsArr.push(showSignerInfo);
	else
		paramsArr.push(null);

	params = this._funcMakeParams(paramsArr);

	return this._funcCall("RawVerify", params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.RawSignHash = function(
	hash, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([hash]);

	return this._funcCall('RawSignHash', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.RawVerifyHash = function(
	hash, signature, showSignerInfo, onSuccess, onError) {
	var params;
	var paramsArr = [];

	if (typeof showSignerInfo != 'boolean') {
		onError = onSuccess;
		onSuccess = showSignerInfo;
	}

	paramsArr.push(hash);
	paramsArr.push(signature);

	if (typeof showSignerInfo == 'boolean')
		paramsArr.push(showSignerInfo);
	else
		paramsArr.push(null);

	params = this._funcMakeParams(paramsArr);

	return this._funcCall("RawVerifyHash", params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.RawSignFile = function(
	fileName, fileNameWithSign, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([fileName, fileNameWithSign]);

	this._funcCall("RawSignFile", params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.RawVerifyFile = function(
	fileName, fileNameWithSign, showSignerInfo,
	onSuccess, onError) {
	var params;
	var paramsArr = [];

	if (typeof showSignerInfo != 'boolean') {
		onError = onSuccess;
		onSuccess = showSignerInfo;
	}

	paramsArr.push(fileName);
	paramsArr.push(fileNameWithSign);

	if (typeof showSignerInfo == 'boolean')
		paramsArr.push(showSignerInfo);
	else
		paramsArr.push(null);

	params = this._funcMakeParams(paramsArr);

	return this._funcCall('RawVerifyFile', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.CtxSignHash = function(
	pkContext, signAlgo, hash, appendCert, onSuccess, onError) {
	var params;

	if (typeof hash != 'string') {
		hash = this._base64Encode(hash, onError);
		if (hash == null)
			return;
	}

	params = this._funcMakeParams([
		pkContext, signAlgo, hash, appendCert]);

	return this._funcCall('CtxSignHash', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.CtxSign = function(
	pkContext, signAlgo, data, external, appendCert,
	onSuccess, onError) {
	var params;

	if (typeof data == 'string') {
		data = this._stringToBytes(data, onError);
		if (data == null)
			return;
	}

	params = this._funcMakeParams([
		pkContext, signAlgo, new EndUserByteArray(data),
		external, appendCert]);

	return this._funcCall('CtxSign', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.CtxSignFile = function(
	pkContext, signAlgo, fileName, external,
	appendCert, fileNameWithSign, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([
		pkContext, signAlgo, fileName, external, 
		appendCert, fileNameWithSign]);

	this._funcCall('CtxSignFile', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.CtxAppendSignHash = function(
	pkContext, signAlgo, hash, previousSign, appendCert,
	onSuccess, onError) {
	var params;

	if (typeof hash != 'string') {
		hash = this._base64Encode(hash, onError);
		if (hash == null)
			return;
	}

	if (typeof previousSign != 'string') {
		previousSign = this._base64Encode(previousSign, onError);
		if (previousSign == null)
			return;
	}

	params = this._funcMakeParams([
		pkContext, signAlgo, hash, previousSign, appendCert]);

	return this._funcCall("CtxAppendSignHash", params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.CtxAppendSign = function(
	pkContext, signAlgo, data, previousSign, appendCert,
	onSuccess, onError) {
	var params;

	if (data != null && typeof data == 'string') {
		data = this._stringToBytes(data, onError);
		if (data == null)
			return;
	}

	if (typeof previousSign != 'string') {
		previousSign = this._base64Encode(previousSign, onError);
		if (previousSign == null)
			return;
	}

	params = this._funcMakeParams([
		pkContext, signAlgo, data ? new EndUserByteArray(data) : null,
		previousSign, appendCert]);

	return this._funcCall("CtxAppendSign", params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.CtxAppendSignFile = function(
	pkContext, signAlgo, fileName, fileNameWithPreviousSign,
	appendCert, fileNameWithSign, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([
		pkContext, signAlgo, fileName, 
		fileNameWithPreviousSign, appendCert, fileNameWithSign]);

	this._funcCall("CtxAppendSignFile", params,
		onSuccess, onError, null);
};

//================================================================================

EUSignCP.prototype.ShowSenderInfo = function(
	senderInfo, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([senderInfo]);

	return this._funcCall("ShowSenderInfo", params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.IsEnveloped = function(
	data, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([new EndUserByteArray(data)]);

	return this._funcCall("IsEnveloped", params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.IsEnvelopedFile = function(
	fileName, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([fileName]);

	return this._funcCall("IsEnvelopedFile", params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.Envelop = function(
	issuer, serial, signData, data, onSuccess, onError) {
	var params;

	if (typeof data == 'string') {
		data = this._stringToBytes(data, onError);
		if (data == null)
			return;
	}

	params = this._funcMakeParams([issuer, serial,
		signData, new EndUserByteArray(data)]);

	return this._funcCall('Envelop', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.Develop = function(
	envelopedData, showSenderInfo, onSuccess, onError) {
	var params;
	var paramsArr = [];

	if (typeof showSenderInfo != 'boolean') {
		onError = onSuccess;
		onSuccess = showSenderInfo;
	}

	if (typeof envelopedData != 'string') {
		envelopedData = this._base64Encode(envelopedData, onError);
		if (envelopedData == null)
			return;
	}

	paramsArr.push(envelopedData);

	if (typeof showSenderInfo == 'boolean')
		paramsArr.push(showSenderInfo);
	else
		paramsArr.push(null);

	params = this._funcMakeParams(paramsArr);

	return this._funcCall('Develop', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.EnvelopFile = function(
	issuer, serial, signData, fileName, 
	envelopedFileName, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([issuer, serial, 
		signData, fileName, envelopedFileName]);

	this._funcCall('EnvelopFile', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.DevelopFile = function(
	envelopedFileName, fileName, showSenderInfo,
	onSuccess, onError) {
	var params;
	var paramsArr = [];

	if (typeof showSenderInfo != 'boolean') {
		onError = onSuccess;
		onSuccess = showSenderInfo;
	}

	paramsArr.push(envelopedFileName);
	paramsArr.push(fileName);

	if (typeof showSenderInfo == 'boolean')
		paramsArr.push(showSenderInfo);
	else
		paramsArr.push(null);

	params = this._funcMakeParams(paramsArr);

	return this._funcCall('DevelopFile', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.EnvelopEx = function(
	recipientCertIssuers, recipientCertSerials,
	signData, data, onSuccess, onError) {
	var params;

	if (recipientCertIssuers.className == 'EndUserArrayList')
		recipientCertIssuers = recipientCertIssuers.m_array;

	if (recipientCertSerials.className == 'EndUserArrayList')
		recipientCertSerials = recipientCertSerials.m_array;

	if (typeof data == 'string') {
		data = this._stringToBytes(data, onError);
		if (data == null)
			return;
	}

	params = this._funcMakeParams([
		recipientCertIssuers, recipientCertSerials,
		signData, new EndUserByteArray(data)]);

	return this._funcCall('EnvelopEx', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.DevelopEx = function(
	envelopedData, senderCert, showSenderInfo, onSuccess, onError) {
	var params;
	var paramsArr = [];

	if (typeof showSenderInfo != 'boolean') {
		onError = onSuccess;
		onSuccess = showSenderInfo;
	}

	if (typeof envelopedData != 'string') {
		envelopedData = this._base64Encode(envelopedData, onError);
		if (envelopedData == null)
			return;
	}

	paramsArr.push(envelopedData);
	paramsArr.push(senderCert ? 
		new EndUserByteArray(senderCert) : null);

	if (typeof showSenderInfo == 'boolean')
		paramsArr.push(showSenderInfo);
	else
		paramsArr.push(null);

	params = this._funcMakeParams(paramsArr);

	return this._funcCall('DevelopEx', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.EnvelopFileEx = function(
	recipientCertIssuers, recipientCertSerials, 
	signData, fileName, envelopedFileName, onSuccess, onError) {
	var params;

	if (recipientCertIssuers.className == 'EndUserArrayList')
		recipientCertIssuers = recipientCertIssuers.m_array;

	if (recipientCertSerials.className == 'EndUserArrayList')
		recipientCertSerials = recipientCertSerials.m_array;

	params = this._funcMakeParams([recipientCertIssuers,
		recipientCertSerials, signData, fileName, envelopedFileName]);

	this._funcCall('EnvelopFileEx', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.EnvelopToRecipients = function(
	recipientCerts, signData, data, onSuccess, onError) {
	var params;

	if (recipientCerts.className == 'EndUserArrayList')
		recipientCerts = recipientCerts.m_array;

	var _recipientCerts = [];
	for (var i = 0; i < recipientCerts.length; i++)
		_recipientCerts.push(new EndUserByteArray(recipientCerts[i]));

	if (typeof data == 'string') {
		data = this._stringToBytes(data, onError);
		if (data == null)
			return;
	}

	params = this._funcMakeParams([_recipientCerts,
		signData, new EndUserByteArray(data)]);

	return this._funcCall('EnvelopToRecipients', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.EnvelopFileToRecipients = function(
	recipientCerts, signData, fileName, envelopedFileName, 
	onSuccess, onError) {
	var params;

	if (recipientCerts.className == 'EndUserArrayList')
		recipientCerts = recipientCerts.m_array;

	var _recipientCerts = [];
	for (var i = 0; i < recipientCerts.length; i++)
		_recipientCerts.push(new EndUserByteArray(recipientCerts[i]));

	params = this._funcMakeParams([_recipientCerts,
		signData, fileName, envelopedFileName]);

	this._funcCall('EnvelopFileToRecipients', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.EnvelopToRecipientsEx = function(
	recipientCerts, recipientAppendType,
	signData, data, onSuccess, onError) {
	var params;

	if (recipientCerts.className == 'EndUserArrayList')
		recipientCerts = recipientCerts.m_array;

	var _recipientCerts = [];
	for (var i = 0; i < recipientCerts.length; i++)
		_recipientCerts.push(new EndUserByteArray(recipientCerts[i]));

	if (typeof data == 'string') {
		data = this._stringToBytes(data, onError);
		if (data == null)
			return;
	}

	params = this._funcMakeParams([_recipientCerts,
		recipientAppendType, signData, new EndUserByteArray(data)]);

	return this._funcCall('EnvelopToRecipientsEx', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.EnvelopFileToRecipientsEx = function(
	recipientCerts, recipientAppendType, signData, fileName,
	envelopedFileName, onSuccess, onError) {
	var params;

	if (recipientCerts.className == 'EndUserArrayList')
		recipientCerts = recipientCerts.m_array;

	var _recipientCerts = [];
	for (var i = 0; i < recipientCerts.length; i++)
		_recipientCerts.push(new EndUserByteArray(recipientCerts[i]));

	params = this._funcMakeParams([_recipientCerts,
		recipientAppendType, signData, fileName, envelopedFileName]);

	this._funcCall('EnvelopFileToRecipientsEx', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.EnvelopToRecipientsWithOCode = function(
	recipientsOCode, recipientAppendType, signData,
	data, onSuccess, onError) {
	var params;

	if (typeof data == 'string') {
		data = this._stringToBytes(data, onError);
		if (data == null)
			return;
	}

	params = this._funcMakeParams([recipientsOCode,
		recipientAppendType, signData, new EndUserByteArray(data)]);

	return this._funcCall('EnvelopToRecipientsWithOCode', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.EnvelopExWithDynamicKey = function(
	recipientCertIssuers, recipientCertSerials, signData,
	appendCert, data, onSuccess, onError) {
	var params;

	if (recipientCertIssuers.className == 'EndUserArrayList')
		recipientCertIssuers = recipientCertIssuers.m_array;

	if (recipientCertSerials.className == 'EndUserArrayList')
		recipientCertSerials = recipientCertSerials.m_array;

	if (typeof data == 'string') {
		data = this._stringToBytes(data, onError);
		if (data == null)
			return;
	}

	params = this._funcMakeParams([recipientCertIssuers,
		recipientCertSerials, signData, appendCert, 
		new EndUserByteArray(data)]);

	return this._funcCall('EnvelopExWithDynamicKey', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.EnvelopFileExWithDynamicKey = function(
	recipientCertIssuers, recipientCertSerials, signData,
	appendCert, fileName, envelopedFileName, onSuccess, onError) {
	var params;

	if (recipientCertIssuers.className == 'EndUserArrayList')
		recipientCertIssuers = recipientCertIssuers.m_array;

	if (recipientCertSerials.className == 'EndUserArrayList')
		recipientCertSerials = recipientCertSerials.m_array;

	params = this._funcMakeParams([recipientCertIssuers,
		recipientCertSerials, signData, appendCert,
		fileName, envelopedFileName]);

	this._funcCall('EnvelopFileExWithDynamicKey', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.EnvelopToRecipientsWithDynamicKey = function(
	recipientCerts, signData, appendCert, data, onSuccess, onError) {
	var params;

	if (recipientCerts.className == 'EndUserArrayList')
		recipientCerts = recipientCerts.m_array;

	var _recipientCerts = [];
	for (var i = 0; i < recipientCerts.length; i++)
		_recipientCerts.push(new EndUserByteArray(recipientCerts[i]));

	if (typeof data == 'string') {
		data = this._stringToBytes(data, onError);
		if (data == null)
			return;
	}

	params = this._funcMakeParams([_recipientCerts,
		signData, appendCert, new EndUserByteArray(data)]);

	return this._funcCall('EnvelopToRecipientsWithDynamicKey', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.EnvelopFileToRecipientsWithDynamicKey = function(
	recipientCerts, signData, appendCert, fileName,
	envelopedFileName, onSuccess, onError) {
	var params;

	if (recipientCerts.className == 'EndUserArrayList')
		recipientCerts = recipientCerts.m_array;

	var _recipientCerts = [];
	for (var i = 0; i < recipientCerts.length; i++)
		_recipientCerts.push(new EndUserByteArray(recipientCerts[i]));

	params = this._funcMakeParams([_recipientCerts,
		signData, appendCert, fileName, envelopedFileName]);

	this._funcCall('EnvelopFileToRecipientsWithDynamicKey',
		params, onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.EnvelopToRecipientsWithSettings = function(
	recipientCerts, signData, data, checkRecipientCertsOffline, 
	checkRecipientCertsNoCRL, noTSP, appendCert, onSuccess, onError) {
	var params;

	if (typeof data == 'string') {
		data = this._stringToBytes(data, onError);
		if (data == null)
			return;
	}

	if (recipientCerts.className == 'EndUserArrayList')
		recipientCerts = recipientCerts.m_array;

	var _recipientCerts = [];
	for (var i = 0; i < recipientCerts.length; i++)
		_recipientCerts.push(new EndUserByteArray(recipientCerts[i]));

	params = this._funcMakeParams([_recipientCerts,
		signData, new EndUserByteArray(data), checkRecipientCertsOffline, 
		checkRecipientCertsNoCRL, noTSP, appendCert]);

	return this._funcCall('EnvelopToRecipientsWithSettings',
		params, onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.RawEnvelop = function(
	recipientCert, data, onSuccess, onError) {
	var params;

	if (typeof data == 'string') {
		data = this._stringToBytes(data, onError);
		if (data == null)
			return;
	}

	params = this._funcMakeParams([
		new EndUserByteArray(recipientCert), 
		new EndUserByteArray(data)]);

	return this._funcCall('RawEnvelop', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.RawDevelop = function(
	envelopedData, showSenderInfo, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([envelopedData, showSenderInfo]);

	return this._funcCall('RawDevelop', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.EnvelopRSA = function(
	contentEncAlgoType, issuer, serial,
	signData, data, onSuccess, onError) {
	return this.EnvelopRSAEx(contentEncAlgoType, 
		[issuer], [serial], signData,
		data, onSuccess, onError);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.EnvelopFileRSA = function(
	contentEncAlgoType, issuer, serial,
	signData, fileName, envelopedFileName, onSuccess, onError) {
	this.EnvelopFileRSAEx(contentEncAlgoType,
		[issuer], [serial], signData, fileName,
		envelopedFileName, onSuccess, onError);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.EnvelopRSAEx = function(
	contentEncAlgoType, recipientCertIssuers, recipientCertSerials,
	signData, data, onSuccess, onError) {
	var params;

	if (recipientCertIssuers.className == 'EndUserArrayList')
		recipientCertIssuers = recipientCertIssuers.m_array;

	if (recipientCertSerials.className == 'EndUserArrayList')
		recipientCertSerials = recipientCertSerials.m_array;

	if (typeof data == 'string') {
		data = this._stringToBytes(data, onError);
		if (data == null)
			return;
	}

	params = this._funcMakeParams([contentEncAlgoType,
		recipientCertIssuers, recipientCertSerials,
		signData, new EndUserByteArray(data)]);

	return this._funcCall('EnvelopRSAEx', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.EnvelopFileRSAEx = function(
	contentEncAlgoType, recipientCertIssuers, recipientCertSerials,
	signData, fileName, envelopedFileName, onSuccess, onError) {
	var params;

	if (recipientCertIssuers.className == 'EndUserArrayList')
		recipientCertIssuers = recipientCertIssuers.m_array;

	if (recipientCertSerials.className == 'EndUserArrayList')
		recipientCertSerials = recipientCertSerials.m_array;

	params = this._funcMakeParams([contentEncAlgoType,
		recipientCertIssuers, recipientCertSerials,
		signData, fileName, envelopedFileName]);

	this._funcCall('EnvelopFileRSAEx', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.EnvelopToRecipientsRSA = function(
	contentEncAlgoType, recipientCerts, signData,
	data, onSuccess, onError) {
	var params;

	if (recipientCerts.className == 'EndUserArrayList')
		recipientCerts = recipientCerts.m_array;

	var _recipientCerts = [];
	for (var i = 0; i < recipientCerts.length; i++)
		_recipientCerts.push(new EndUserByteArray(recipientCerts[i]));

	if (typeof data == 'string') {
		data = this._stringToBytes(data, onError);
		if (data == null)
			return;
	}

	params = this._funcMakeParams([contentEncAlgoType,
		_recipientCerts, signData, new EndUserByteArray(data)]);

	return this._funcCall('EnvelopToRecipientsRSA', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.EnvelopFileToRecipientsRSA = function(
	contentEncAlgoType, recipientCerts, signData,
	fileName, envelopedFileName, onSuccess, onError) {
	var params;

	if (recipientCerts.className == 'EndUserArrayList')
		recipientCerts = recipientCerts.m_array;

	var _recipientCerts = [];
	for (var i = 0; i < recipientCerts.length; i++)
		_recipientCerts.push(new EndUserByteArray(recipientCerts[i]));

	params = this._funcMakeParams([contentEncAlgoType,
		_recipientCerts, signData, fileName, envelopedFileName]);

	this._funcCall('EnvelopFileToRecipientsRSA', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.CtxEnvelop = function(
	pkContext, recipientCerts, recipientAppendType, signData, 
	appendCert, data, onSuccess, onError) {
	var params;

	if (typeof data == 'string') {
		data = this._stringToBytes(data, onError);
		if (data == null)
			return;
	}

	if (recipientCerts.className == 'EndUserArrayList')
		recipientCerts = recipientCerts.m_array;

	var _recipientCerts = [];
	for (var i = 0; i < recipientCerts.length; i++)
		_recipientCerts.push(new EndUserByteArray(recipientCerts[i]));

	params = this._funcMakeParams([pkContext, _recipientCerts,
		recipientAppendType, signData, appendCert,
		new EndUserByteArray(data)]);

	return this._funcCall('CtxEnvelop',
		params, onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.CtxEnvelopFile = function(
	pkContext, recipientCerts, recipientAppendType, signData, 
	appendCert, fileName, envelopedFileName, onSuccess, onError) {
	var params;

	if (recipientCerts.className == 'EndUserArrayList')
		recipientCerts = recipientCerts.m_array;

	var _recipientCerts = [];
	for (var i = 0; i < recipientCerts.length; i++)
		_recipientCerts.push(new EndUserByteArray(recipientCerts[i]));

	params = this._funcMakeParams([pkContext, _recipientCerts,
		recipientAppendType, signData, appendCert,
		fileName, envelopedFileName]);

	this._funcCall('CtxEnvelopFile',
		params, onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.CtxEnvelopWithDynamicKey = function(
	pkContext, recipientCerts, recipientAppendType, signData, 
	appendCert, data, onSuccess, onError) {
	var params;

	if (typeof data == 'string') {
		data = this._stringToBytes(data, onError);
		if (data == null)
			return;
	}

	if (recipientCerts.className == 'EndUserArrayList')
		recipientCerts = recipientCerts.m_array;

	var _recipientCerts = [];
	for (var i = 0; i < recipientCerts.length; i++)
		_recipientCerts.push(new EndUserByteArray(recipientCerts[i]));

	params = this._funcMakeParams([pkContext, _recipientCerts,
		recipientAppendType, signData, appendCert,
		new EndUserByteArray(data)]);

	return this._funcCall('CtxEnvelopWithDynamicKey',
		params, onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.CtxEnvelopFileWithDynamicKey = function(
	pkContext, recipientCerts, recipientAppendType, signData, 
	appendCert, fileName, envelopedFileName, onSuccess, onError) {
	var params;

	if (recipientCerts.className == 'EndUserArrayList')
		recipientCerts = recipientCerts.m_array;

	var _recipientCerts = [];
	for (var i = 0; i < recipientCerts.length; i++)
		_recipientCerts.push(new EndUserByteArray(recipientCerts[i]));

	params = this._funcMakeParams([pkContext, _recipientCerts,
		recipientAppendType, signData, appendCert,
		fileName, envelopedFileName]);

	this._funcCall('CtxEnvelopFileWithDynamicKey',
		params, onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.CtxDevelop = function(
	pkContext, envelopedData, senderCert, showSenderInfo,
	onSuccess, onError) {
	var params;
	var paramsArr = [];

	if (typeof showSenderInfo != 'boolean') {
		onError = onSuccess;
		onSuccess = showSenderInfo;
	}

	if (typeof envelopedData != 'string') {
		envelopedData = this._base64Encode(envelopedData, onError);
		if (envelopedData == null)
			return;
	}

	paramsArr.push(pkContext);
	paramsArr.push(envelopedData);
	paramsArr.push(senderCert ? 
		new EndUserByteArray(senderCert) : null);

	if (typeof showSenderInfo == 'boolean')
		paramsArr.push(showSenderInfo);
	else
		paramsArr.push(null);

	params = this._funcMakeParams(paramsArr);

	return this._funcCall('CtxDevelop', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.CtxDevelopFile = function(
	pkContext, envelopedFileName, senderCert, fileName,
	showSenderInfo, onSuccess, onError) {
	var params;
	var paramsArr = [];

	if (typeof showSenderInfo != 'boolean') {
		onError = onSuccess;
		onSuccess = showSenderInfo;
	}

	paramsArr.push(pkContext);
	paramsArr.push(envelopedFileName);
	paramsArr.push(senderCert ? 
		new EndUserByteArray(senderCert) : null);
	paramsArr.push(fileName);
	if (typeof showSenderInfo == 'boolean')
		paramsArr.push(showSenderInfo);
	else
		paramsArr.push(null);

	params = this._funcMakeParams(paramsArr);

	return this._funcCall('CtxDevelopFile', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.CtxCreateAuthData = function(
	pkContext, serverCertificate, data, onSuccess, onError) {
	var params;

	if (typeof data == 'string') {
		data = this._stringToBytes(data, onError);
		if (data == null)
			return;
	}

	params = this._funcMakeParams(
		[pkContext, new EndUserByteArray(serverCertificate), 
			new EndUserByteArray(data)]);

	return this._funcCall('CtxCreateAuthData', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.ProtectDataByPassword = function(
	data, password, onSuccess, onError) {
	var params;

	if (typeof data == 'string') {
		data = this._stringToBytes(data, onError);
		if (data == null)
			return;
	}

	params = this._funcMakeParams([
		new EndUserByteArray(data), password]);

	return this._funcCall('ProtectDataByPassword', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.UnprotectDataByPassword = function(
	protectedData, password, onSuccess, onError) {
	var params;

	if (typeof protectedData != 'string') {
		protectedData = this._base64Encode(protectedData, onError);
		if (protectedData == null)
			return;
	}

	params = this._funcMakeParams([
		protectedData, password]);

	return this._funcCall('UnprotectDataByPassword', params,
		onSuccess, onError, null);
};

//================================================================================

EUSignCP.prototype.SessionIsInitialized = function(
	session, onSuccess, onError) {
	var params;

	session.SetData(null);
	params = this._funcMakeParams([session]);

	return this._funcCall('SessionIsInitialized', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.SessionClose = function(
	session, onSuccess, onError) {
	var params;

	session.SetData(null);
	params = this._funcMakeParams([session]);

	this._funcCall('SessionClose', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.ClientSessionCreateStep1 = function(
	expireTime, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([expireTime]);

	return this._funcCall('ClientSessionCreateStep1', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.ServerSessionCreateStep1 = function(
	expireTime, clientData, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([expireTime, 
		new EndUserByteArray(clientData)]);

	return this._funcCall('ServerSessionCreateStep1', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.ClientSessionCreateStep2 = function(
	session, serverData, onSuccess, onError) {
	var params;
	var pThis = this;

	session.SetData(null);
	params = this._funcMakeParams([session,
		new EndUserByteArray(serverData)]);

	var _callback = function(result, _onSuccess, _onError) {
		session.SetData(result.GetData());

		if (pThis.IsAsync(_onSuccess, _onError))
			_onSuccess();
	};

	this._funcCall('ClientSessionCreateStep2', params,
		onSuccess, onError, _callback);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.ServerSessionCreateStep2 = function(
	session, clientData, onSuccess, onError) {
	var params;

	session.SetData(null);
	params = this._funcMakeParams([session, 
		new EndUserByteArray(clientData)]);

	this._funcCall('ServerSessionCreateStep2', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.SessionSave = function(
	session, onSuccess, onError) {
	var params;

	session.SetData(null);
	params = this._funcMakeParams([session]);

	return this._funcCall('SessionSave', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.SessionLoad = function(
	sessionData, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([
		new EndUserByteArray(sessionData)]);

	return this._funcCall('SessionLoad', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.SessionCheckCertificates = function(
	session, onSuccess, onError) {
	var params;

	session.SetData(null);
	params = this._funcMakeParams([session]);

	return this._funcCall('SessionCheckCertificates', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.SessionEncrypt = function(
	session, data, onSuccess, onError) {
	var params;
	var encodeResult = false;
	var pThis = this;

	if (typeof data == 'string') {
		encodeResult = true;
		data = this._stringToBytes(data, onError);
		if (data == null)
			return;
	}

	session.SetData(null);
	params = this._funcMakeParams([session, 
		new EndUserByteArray(data)]);

	var _callback = function(result, _onSuccess, _onError) {
		return pThis.BASE64Encode(result, _onSuccess, _onError);
	};

	return this._funcCall('SessionEncrypt',
		params, onSuccess, onError, 
		encodeResult ? _callback : null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.SessionDecrypt = function(
	session, encryptedData, onSuccess, onError) {
	var params;

	if (typeof encryptedData == 'string') {
		encryptedData = this._base64Decode(encryptedData, onError);
		if (encryptedData == null)
			return;
	}

	session.SetData(null);
	params = this._funcMakeParams([session, 
		new EndUserByteArray(encryptedData)]);

	return this._funcCall('SessionDecrypt',
		params, onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.SessionEncryptContinue = function(
	session, data, onSuccess, onError) {
	var params;
	var pThis = this;
	var encodeResult = false;

	if (typeof data == 'string') {
		encodeResult = true;
		data = this._stringToBytes(data, onError);
		if (data == null)
			return;
	}

	session.SetData(null);
	params = this._funcMakeParams([session, 
		new EndUserByteArray(data)]);

	var _callback = function(result, _onSuccess, _onError) {
		if (encodeResult) {
			return pThis.BASE64Encode(
				result, _onSuccess, _onError);
		}

		var isAsync = pThis.IsAsync(_onSuccess, _onError);

		if (!pThis._copyArrayData(data, result)) {
			var error = pThis.MakeError(
				EndUserError.ERROR_BAD_PARAMETER, '');

			if (isAsync) {
				_onError(error);
				return;
			}

			throw new EndUserException(error.errorCode, error.message); 
		}

		if (isAsync)
			_onSuccess(data);
		else
			return data;
	};

	return this._funcCall('SessionEncryptContinue',
		params, onSuccess, onError, _callback);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.SessionDecryptContinue = function(
	session, encryptedData, onSuccess, onError) {
	var params;
	var pThis = this;

	if (typeof encryptedData == 'string') {
		encryptedData = this._base64Decode(encryptedData, onError);
		if (encryptedData == null)
			return;
	}

	session.SetData(null);
	params = this._funcMakeParams([session, 
		new EndUserByteArray(encryptedData)]);

	var _callback = function(result, _onSuccess, _onError) {
		var isAsync = pThis.IsAsync(_onSuccess, _onError);

		if (!pThis._copyArrayData(encryptedData, result)) {
			var error = pThis.MakeError(
				EndUserError.ERROR_BAD_PARAMETER, '');

			if (isAsync) {
				_onError(error);
				return;
			}

			throw new EndUserException(error.errorCode, error.message); 
		}

		if (isAsync)
			_onSuccess(encryptedData);
		else
			return encryptedData;
	};

	return this._funcCall('SessionDecryptContinue',
		params, onSuccess, onError, _callback);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.SessionGetPeerCertificateInfo = function(
	session, onSuccess, onError) {
	var params;

	session.SetData(null);
	params = this._funcMakeParams([session]);

	return this._funcCall('SessionGetPeerCertificateInfo',
		params, onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.ClientDynamicKeySessionCreate = function(
	expireTime, serverCertIssuer, serverCertSerial,
	onSuccess, onError) {
	var params;
	var paramsArr = [];

	if (typeof serverCertIssuer != 'string' ||
			typeof serverCertSerial != 'string') {
		onError = onSuccess;
		onSuccess = serverCertSerial;
	}

	paramsArr.push(expireTime);
	if (typeof serverCertIssuer == 'string' &&
			typeof serverCertSerial == 'string')  {
		paramsArr.push(serverCertIssuer);
		paramsArr.push(serverCertSerial);
		paramsArr.push(null);
	} else {
		paramsArr.push(null);
		paramsArr.push(null);
		paramsArr.push(new EndUserByteArray(serverCertIssuer));
	}

	params = this._funcMakeParams(paramsArr);

	return this._funcCall('ClientDynamicKeySessionCreate',
		params, onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.ServerDynamicKeySessionCreate = function(
	expireTime, clientData, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([
		expireTime, new EndUserByteArray(clientData)]);

	return this._funcCall('ServerDynamicKeySessionCreate',
		params, onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.ClientDynamicKeySessionLoad = function(
	sessionData, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([
		new EndUserByteArray(sessionData)]);

	return this._funcCall('ClientDynamicKeySessionLoad', params,
		onSuccess, onError, null);
};

//================================================================================

EUSignCP.prototype.SCClientIsRunning = function(
	onSuccess, onError) {
	var params;

	params = this._funcMakeParams(null);

	return this._funcCall('SCClientIsRunning',
		params, onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.SCClientStart = function(
	onSuccess, onError) {
	var params;

	params = this._funcMakeParams(null);

	this._funcCall('SCClientStart',
		params, onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.SCClientStop = function(
	onSuccess, onError) {
	var params;

	params = this._funcMakeParams(null);

	this._funcCall('SCClientStop',
		params, onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.SCClientAddGate = function(
	gateName, connectPort, gatewayAddress, gatewayPort, 
	externalInterface, externalRouterIPAddress,
	onSuccess, onError) {
	var params;

	if (typeof externalInterface != 'string') {
		onSuccess = externalInterface;
		onError = externalRouterIPAddress;
		externalInterface = null;
		externalRouterIPAddress = null;
	}

	params = this._funcMakeParams([gateName, connectPort,
		gatewayAddress, gatewayPort, externalInterface, 
		externalRouterIPAddress]);

	this._funcCall('SCClientAddGate',
		params, onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.SCClientRemoveGate = function(
	connectPort, onSuccess, onError){
	var params;

	params = this._funcMakeParams([connectPort]);

	this._funcCall('SCClientRemoveGate',
		params, onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.SCClientGetStatistic = function(
	onSuccess, onError) {
	var params;

	params = this._funcMakeParams(null);

	return this._funcCall('SCClientGetStatistic',
		params, onSuccess, onError, null);
};

//================================================================================

EUSignCP.prototype.AppendTransportHeader = function(
	caType, fileName, clientEMail, clientCert, 
	cryptoData, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([caType, fileName,
		clientEMail, new EndUserByteArray(clientCert),
		new EndUserByteArray(cryptoData)]);

	return this._funcCall('AppendTransportHeader', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.ParseTransportHeader = function(
	transportData, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([
		new EndUserByteArray(transportData)]);

	return this._funcCall('ParseTransportHeader', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.AppendCryptoHeader = function(
	caType, headerType, cryptoData, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([caType, headerType,
		new EndUserByteArray(cryptoData)]);

	return this._funcCall('AppendCryptoHeader', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.ParseCryptoHeader = function(
	transportData, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([
		new EndUserByteArray(transportData)]);

	return this._funcCall('ParseCryptoHeader', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.AppendFileTransportHeader = function(
	caType, fileName, clientEMail, clientCert, 
	fileNameWithCryptoData, fileNameWithTransportData, 
	onSuccess, onError) {
	var params;

	params = this._funcMakeParams([caType, fileName,
		clientEMail, new EndUserByteArray(clientCert),
		fileNameWithCryptoData, fileNameWithTransportData]);

	this._funcCall('AppendFileTransportHeader', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.ParseFileTransportHeader = function(
	fileNameWithTransportData, fileNameWithCryptoData, 
	onSuccess, onError) {
	var params;

	params = this._funcMakeParams([
		fileNameWithTransportData, fileNameWithCryptoData]);

	return this._funcCall('ParseFileTransportHeader', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.AppendFileCryptoHeader = function(
	caType, headerType, 
	fileNameWithCryptoData, fileNameWithTransportData,
	onSuccess, onError) {
	var params;

	params = this._funcMakeParams([caType, headerType,
		fileNameWithCryptoData, fileNameWithTransportData]);

	this._funcCall('AppendFileCryptoHeader', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.ParseFileCryptoHeader = function(
	fileNameWithTransportData, fileNameWithCryptoData, 
	onSuccess, onError) {
	var params;

	params = this._funcMakeParams([
		fileNameWithTransportData, fileNameWithCryptoData]);

	return this._funcCall('ParseFileCryptoHeader', params,
		onSuccess, onError, null);
};

//================================================================================

EUSignCP.prototype.DevCtxEnum = function(
	deviceContext, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([deviceContext]);

	return this._funcCall('DevCtxEnum', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.DevCtxOpen = function(
	typeDescription, deviceDescription,
	password, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([
		typeDescription, deviceDescription, password]);

	return this._funcCall('DevCtxOpen', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.CreateDeviceContext = function() {
	return new EndUserDeviceContext();
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.DevCtxEnumVirtual = function(
	deviceContext, onSuccess, onError) {
	var params;
	var pThis = this;

	params = this._funcMakeParams([deviceContext]);

	var _callback = function(result, _onSuccess, _onError) {
		var isAsync = pThis.IsAsync(_onSuccess, _onError);
		try {
			if (result == null) {
				if (isAsync)
					_onSuccess(null);
				else
					return null;
			}
			
			deviceContext.set(result[1]);

			if (isAsync)
				_onSuccess(result[0]);
			else
				return result[0];
		} catch (e) {
			var error = pThis.MakeError(
				EndUserError.ERROR_LIBRARY_COMUNICATION_FAILED, '');

			if (isAsync) {
				_onError(error);
				return;
			}

			throw new EndUserException(error.errorCode, error.message); 
		}
	};
	
	return this._funcCall('DevCtxEnumVirtual', params,
		onSuccess, onError, _callback);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.DevCtxClose = function(
	deviceContext, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([deviceContext]);

	return this._funcCall('DevCtxClose', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.DevCtxGetData = function(
	deviceContext, tag, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([deviceContext, tag]);

	return this._funcCall('DevCtxGetData', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.DevCtxChangePassword = function(
	deviceContext, newPassword, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([deviceContext, newPassword]);

	return this._funcCall('DevCtxChangePassword', params,
		onSuccess, onError, null);
};

//================================================================================

EUSignCP.prototype.GetHostInfo = function(
	onSuccess, onError) {
	var params;

	params = this._funcMakeParams(null);

	return this._funcCall('GetHostInfo', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.IsRemotelyControlled = function(
	onSuccess, onError) {
	var params;

	params = this._funcMakeParams(null);

	return this._funcCall('IsRemotelyControlled', params,
		onSuccess, onError, null);
};

//================================================================================

EUSignCP.prototype.CtxCreate = function(
	onSuccess, onError) {
	var params;

	params = this._funcMakeParams(null);

	return this._funcCall('CtxCreate', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.CtxFree = function(
	context, onSuccess, onError) {
	var params;

	params = this._funcMakeParams([context]);

	this._funcCall('CtxFree', params,
		onSuccess, onError, null);
};

//--------------------------------------------------------------------------------

EUSignCP.prototype.CtxSetParameter = function(
	context, name, value, onSuccess, onError) {
	var params;

	if (typeof value == 'boolean')
		value = value ? 1 : 0;
	
	params = this._funcMakeParams([context, name, value]);

	this._funcCall('CtxSetParameter', params,
		onSuccess, onError, null);
};

//================================================================================

//================================================================================


//================================================================================

// eusw.umd.end.js

//================================================================================
//================================================================================

	return {
		EndUserLibraryLoader: EndUserLibraryLoader,
		EUSignCP: EUSignCP,
		EndUserError: EndUserError
	};
}));

//================================================================================

//================================================================================

