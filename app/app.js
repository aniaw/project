(function ()
{
    'use strict';

    window.app = {

        getDescendingNumbers: function (start, stop)
        {
            if (typeof start !== 'number' || typeof stop !== 'number' || start < stop) {
                return false;
            }
        }
    };
})();

