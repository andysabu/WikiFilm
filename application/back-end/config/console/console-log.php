<?php

    // https://stackify.com/how-to-log-to-console-in-php/

    /**
     * This function will use JSON encode to print out by console the parse PHP snip.
     */
    function console_log($output, $with_script_tags = true) {
        $js_code = 'console.log(' . json_encode($output, JSON_HEX_TAG) . ');';
        
        if ($with_script_tags)
            $js_code = '<script>' . $js_code . '</script>';

        echo $js_code;
    }

?>