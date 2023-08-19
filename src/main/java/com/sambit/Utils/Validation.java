package com.sambit.Utils;

/**
 * @Project : BSKY Backend
 * @Auther : Sambit Kumar Pradhan
 * @Created On : 14/03/2023 - 4:00 PM
 */
public class Validation {
    public static boolean validateCaptcha(String captcha, String inputCaptcha) {
        int result = 0;

        String[] arr = captcha.split(" ");
        int a = Integer.parseInt(arr[0]);
        int b = Integer.parseInt(arr[2]);

        switch (arr[1]) {
            case "+":
                result = a + b;
                break;
            case "-":
                result = a - b;
                break;
            case "*":
                result = a * b;
                break;
            case "/":
                result = a / b;
                break;
        }
        return result == Integer.parseInt(inputCaptcha);
    }
    
    public static boolean validateemail(String mobile) {
    	return true;
    }
    
    public static boolean validatemobile(String mobile) {
    	if(mobile!=null) {
    		if(mobile.length()==10) {
    			if(!mobile.equals("9000000000") && !mobile.equals("9999999999")) {
    				return true;
    			}else {
    				return false;
    			}
    		}else {
				return false;
			}
    	}else {
    		return false;
    	}
    }
    
}
