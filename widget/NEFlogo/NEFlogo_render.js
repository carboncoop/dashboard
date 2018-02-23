/*
 All Emoncms code is released under the GNU Affero General Public License.
 See COPYRIGHT.txt and LICENSE.txt.
 ---------------------------------------------------------------------
 Part of the OpenEnergyMonitor project:
 http://openenergymonitor.org
 
 Author: Carbon Co-op for the National Energy Fundation
 */



function addOption(widget, optionKey, optionType, optionName, optionHint, optionData)
{
}

function NEFlogo_widgetlist()
{
    var widgets = {"NEFlogo": {
            "offsetx": -40, "offsety": -30, "width": 120, "height": 60,
            "menu": "Widgets",
            "options": [],
            "optionstype": [],
            "optionsname": [],
            "optionshint": [],
            "optionsdata": []
        }};


    return widgets;
}

function draw_NEFlogo(context)
{
    if (!context) {
        return;
    }

    context.save();
    context.clearRect(0, 0, width, height); // Clear old drawing
    context.restore();
}

function NEFlogo_draw()
{
    $(".NEFlogo").each(function (index)
    {
        $(this).html('<img src="' + path + 'Modules/dashboard/widget/NEFlogo/NEFlogo.png" />')
    });
}

function NEFlogo_init()
{
    NEFlogo_draw();
}
function NEFlogo_slowupdate()
{
    //NEFlogo_draw();
}

function NEFlogo_fastupdate()
{
    //NEFlogo_draw();
}
