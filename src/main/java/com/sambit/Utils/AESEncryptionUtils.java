package com.sambit.Utils;

import javax.crypto.Cipher;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;

/**
 * @Project : BSKY Card Backend
 * @Author : Sambit Kumar Pradhan
 * @Created On : 03/08/2023 - 2:11 PM
 */
public class AESEncryptionUtils {
    private static final String CIPHER_NAME = "AES/CBC/PKCS5PADDING";
    private static final int CIPHER_KEY_LEN = 16;
    static String iv = "fedcba9876543210";


    public static String encrypt(String key, String data) {
        try {
            if (key.length() < AESEncryptionUtils.CIPHER_KEY_LEN) {
                int numPad = AESEncryptionUtils.CIPHER_KEY_LEN - key.length();
                key = key + "0".repeat(numPad);
            } else if (key.length() > AESEncryptionUtils.CIPHER_KEY_LEN)
                    key = key.substring(0, CIPHER_KEY_LEN);

            IvParameterSpec initVector = new IvParameterSpec(iv.getBytes(StandardCharsets.ISO_8859_1));
            SecretKeySpec skeySpec = new SecretKeySpec(key.getBytes(StandardCharsets.ISO_8859_1), "AES");

            Cipher cipher = Cipher.getInstance(AESEncryptionUtils.CIPHER_NAME);
            cipher.init(Cipher.ENCRYPT_MODE, skeySpec, initVector);
            byte[] encryptedData = cipher.doFinal((data.getBytes()));

            String base64_EncryptedData = Base64.getEncoder().encodeToString(encryptedData);
            String base64_IV = Base64.getEncoder().encodeToString(iv.getBytes(StandardCharsets.ISO_8859_1));

            return base64_EncryptedData + ":" + base64_IV;
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return null;
    }


    public static String decrypt(String key, String data) {
        try {
            if (key.length() < AESEncryptionUtils.CIPHER_KEY_LEN) {
                int numPad = AESEncryptionUtils.CIPHER_KEY_LEN - key.length();
                key = key + "0".repeat(numPad);
            } else if (key.length() > AESEncryptionUtils.CIPHER_KEY_LEN)
                    key = key.substring(0, CIPHER_KEY_LEN);

            String[] parts = data.split(":");
            IvParameterSpec iv = new IvParameterSpec(Base64.getDecoder().decode(parts[1]));
            SecretKeySpec skeySpec = new SecretKeySpec(key.getBytes(StandardCharsets.ISO_8859_1), "AES");

            Cipher cipher = Cipher.getInstance(AESEncryptionUtils.CIPHER_NAME);
            cipher.init(Cipher.DECRYPT_MODE, skeySpec, iv);

            byte[] decodedEncryptedData = Base64.getDecoder().decode(parts[0]);
            byte[] original = cipher.doFinal(decodedEncryptedData);

            return new String(original);
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return null;
    }

    public static String hashCal(String type, String data) {
        byte[] hash = data.getBytes();
        StringBuilder hexString = new StringBuilder();
        try {
            MessageDigest algorithm = MessageDigest.getInstance(type);
            algorithm.reset();
            algorithm.update(hash);
            byte messageDigest[] = algorithm.digest();
            for (byte b : messageDigest) {
                String hex = Integer.toHexString(0xFF & b);
                if (hex.length() == 1)
                    hexString.append("0");
                hexString.append(hex);
            }
        } catch (NoSuchAlgorithmException nsae) {
            nsae.printStackTrace();
        }
        return hexString.toString();
    }
}