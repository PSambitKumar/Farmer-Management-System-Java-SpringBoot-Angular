package com.sambit.Utils;
import java.util.Base64;
import java.util.Random;

/**
 * @Project : BSKY Backend
 * @Auther : Sambit Kumar Pradhan
 * @Created On : 20/03/2023 - 3:57 PM
 */

public class PasswordEncrypter {

    public static String encryptPassword(String normalPass) {
        if (normalPass != null && !normalPass.isEmpty())
            return makeId() + Base64.getEncoder().encodeToString(normalPass.getBytes()) + makeId();
        else
            return normalPass;
    }

    public static String decryptPassword(String encryptedPass) {
        if (encryptedPass != null && !encryptedPass.isEmpty()) {
            encryptedPass = encryptedPass.substring(5, encryptedPass.length() - 5);
            return new String(Base64.getDecoder().decode(encryptedPass));
        } else
            return encryptedPass;
    }

    private static String makeId() {
        StringBuilder text = new StringBuilder();
        String possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        Random random = new Random();

        for (int i = 0; i < 5; i++) {
            text.append(possible.charAt(random.nextInt(possible.length())));
        }
        return text.toString();
    }
}
