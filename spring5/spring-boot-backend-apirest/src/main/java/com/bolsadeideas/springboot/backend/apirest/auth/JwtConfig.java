package com.bolsadeideas.springboot.backend.apirest.auth;

public class JwtConfig {
	
	public static final String LLAVE_SECRETA = "alguna.clave.secreta.12346578";
	
	public static final String RSA_PRIVADA = "-----BEGIN RSA PRIVATE KEY-----\r\n" + 
			"MIIEowIBAAKCAQEAqpwjmiK40Lcxb0ODqPvz4muk7RlhnQJb0QnyMUrJJs1+urxL\r\n" + 
			"QbsJ9lg/eN4M4O35Yehd8m7edtUPSSw1xUyRSSR0bwH7COQDalXUV+DRjaiZN1Lp\r\n" + 
			"zdKU4xrOw8gtQwCwi2JLHiq02aNGWusMpgEcqbZi2pPUkLTnobqe1+EUTGJOFTyq\r\n" + 
			"caBKoMoSQ44oRhY/TQ50zWhnI7tv7ycnN663h3u7keD4VHu6+Z6rLJy6j7Hab9+w\r\n" + 
			"7cj924wfwnYqdt7dSn5ZXc2amQAop0IJABpBUCNgaVh15Hc5VbqFcqic29XK8DES\r\n" + 
			"5D9SddIcybrp9wREmwXnQcbLQ2ja01u7mvLDIQIDAQABAoIBAEbjr8tYyBA5Pjos\r\n" + 
			"BGXPoque7J1z4WJa24nFJzQiDeiolBLFMEP0kpQgYOc45IMFfoyW/4o/VQJtTvep\r\n" + 
			"fgIn6WpJ0nNZkFRGYcDqPtvw10GUH22kbu+Noz2mIumooF3pyHFx+yJivlh8Bjy6\r\n" + 
			"07uaVK2T0gleSYGDGYfSwjOTG1sNBBYBI17rUacu/Elg/IXSe9i7jpGVXb51pRQW\r\n" + 
			"gTYC/a9A3WuYxcYpCP1Cdam5PDKiI8Q2AgwkTObRWWPiFcZPM3ljYZvegkfLxp+s\r\n" + 
			"VWFqlFBsmLn5MWR0wkCXsWWsBk1FP/iZFDzIk2q9dVcC5LzR+Hk5j4oJ6SNeUzRw\r\n" + 
			"IIQjTwECgYEA0XH4um071R9EPN99p/0lqpUMy3/g3odrqmSUIAj/Md64sx5EotOK\r\n" + 
			"J0Y2pTlt0AaEB05h6Zyc/a8noNaNtj8Sl/ABlomU8NMfLRHDXusiB7XXYdgCFJBE\r\n" + 
			"SG8Kd3Z2uL9e/bRY7KNWy12edQc+GYsxK5GNHOttCw0PqpZpSxs5eNECgYEA0IhU\r\n" + 
			"SrfLqvI52Y+/olsrGJ904LYZEXacF/20GR/GDyztEXQWnCc4yduEMuw/CimHkDrK\r\n" + 
			"qtcC6ITt5ksUbQgnVN56vWb4exWgnoTMhfv2lRWVQ8hEvYmm5XTtFhqttADURikx\r\n" + 
			"Mp4COAnDT9/RDy9vW/rj9u4lJnlrp/ZyB+tNOVECgYACeGqroEA1alH+udAcnCLG\r\n" + 
			"mU12VQLM/SHq95a7rf98khjxm+jJVt9pSS250yyVaI5EG8uR2tQLNfassfsn7CSH\r\n" + 
			"AEC0itjj4kma2XvJcdKL7rwknkyf+3eitxSThiUuVquDKI5n9CFA8tC8pqI34Olq\r\n" + 
			"jyPv9GLr33KQ24dQaHjMEQKBgDFBgmeDsl/Wh0OUaLd4wV03jOvnF1TAp24jRv8I\r\n" + 
			"OkgrXHPa79xCh29montEwj8sQBEZUfW4g79YZrkW0uROILwzMNq8D8VC/oVy6Lxd\r\n" + 
			"H4lnZ7JzA4mhkgJw8+9crdrutzU7VZuXJv8Fj1S2kTL9CVi4klApQC0uUPeDhrvI\r\n" + 
			"IJ2BAoGBAI1dnBI3YUe1Q+8iWvIGpF6OZGNJl1JHoCc5ccbPyHHq0l3ef0/CuCZS\r\n" + 
			"yDZjKCBSesUuRKU/9TST86vYCr2RJt9l6grg/XY8iBbKqObUZ0Ryju0+DDerTBJP\r\n" + 
			"zPMUj9srb/5vA0R8HE0zXyydrRRttDio+Rs7zXL+FEW7Mu17o6mC\r\n" + 
			"-----END RSA PRIVATE KEY-----";
	
	public static final String RSA_PUBLICA = "-----BEGIN PUBLIC KEY-----\r\n" + 
			"MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAqpwjmiK40Lcxb0ODqPvz\r\n" + 
			"4muk7RlhnQJb0QnyMUrJJs1+urxLQbsJ9lg/eN4M4O35Yehd8m7edtUPSSw1xUyR\r\n" + 
			"SSR0bwH7COQDalXUV+DRjaiZN1LpzdKU4xrOw8gtQwCwi2JLHiq02aNGWusMpgEc\r\n" + 
			"qbZi2pPUkLTnobqe1+EUTGJOFTyqcaBKoMoSQ44oRhY/TQ50zWhnI7tv7ycnN663\r\n" + 
			"h3u7keD4VHu6+Z6rLJy6j7Hab9+w7cj924wfwnYqdt7dSn5ZXc2amQAop0IJABpB\r\n" + 
			"UCNgaVh15Hc5VbqFcqic29XK8DES5D9SddIcybrp9wREmwXnQcbLQ2ja01u7mvLD\r\n" + 
			"IQIDAQAB\r\n" + 
			"-----END PUBLIC KEY-----";

}
