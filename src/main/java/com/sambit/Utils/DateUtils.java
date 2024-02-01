package com.sambit.Utils;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * @Project : FarmerRegistration
 * @Author: Sambit Kumar Pradhan
 * @Date: 01-Feb-2024 : 2:27 PM
 */

public class DateUtils {
    private Date addCurrentTimeStampToDate(Date date) {
        SimpleDateFormat sdf = new SimpleDateFormat("dd-MM-yyyy");
        String dateStr = sdf.format(date);
        dateStr = dateStr + " " + new SimpleDateFormat("HH:mm:ss").format(new Date());
        try {
            return new SimpleDateFormat("dd-MM-yyyy HH:mm:ss").parse(dateStr);
        } catch (ParseException e) {
            throw new RuntimeException("Error while parsing date");
        }
    }
}
