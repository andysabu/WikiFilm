<?php

/**
 * This function will prepare the string to be included in the query.
 * Considerations:
 * - Return a @string
 * - Only validates numbers
 * 
 * @param $values
 */
function buildValuesString($values) {
    $stringValue = "";
        
    for ($i=0; $i < count($values); $i++) { 

        // Check if it is numeric or anything else
        if(is_numeric($values[$i])) {
            $stringValue .= $values[$i];
        } else {
            $stringValue .=  "'" . $values[$i] . "'";
        }

        // Add a comma after each value except the last one
        if ($i < (count($values) - 1)) {
            $stringValue .=  ",";
        }
    }
    
    return $stringValue;
    }

?>