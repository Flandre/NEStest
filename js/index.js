
require.config({
    paths: {
    "jquery": "//cdn.bootcss.com/jquery/2.1.1/jquery",
		"dynamicaudio": "js/lib/dynamicaudio-min",
		"jsnes_nes": "js/lib/jsnes/nes",
		"jsnes_utils": "js/lib/jsnes/utils",
		"jsnes_cpu": "js/lib/jsnes/cpu",
		"jsnes_keyboard": "js/lib/jsnes/keyboard",
		"jsnes_mappers": "js/lib/jsnes/mappers",
		"jsnes_papu": "js/lib/jsnes/papu",
		"jsnes_ppu": "js/lib/jsnes/ppu",
		"jsnes_rom": "js/lib/jsnes/rom",
		"jsnes_ui": "js/lib/jsnes/ui"
    },
	shim: {
		"jsnes_ui": [ "jquery" ],
		"jsnes_utils": [ "jsnes_nes" ],
		"jsnes_cpu": [ "jsnes_nes" ],
		"jsnes_keyboard": [ "jsnes_nes" ],
		"jsnes_mappers": [ "jsnes_nes" ],
		"jsnes_papu": [ "jsnes_nes" ],
		"jsnes_ppu": [ "jsnes_nes" ],
		"jsnes_rom": [ "jsnes_nes" ],
		"jsnes_ui": [ "jsnes_nes" ],
		"jsnes_nes": [ "jquery", "dynamicaudio" ]
	}
});

require(
	[ "jquery", "dynamicaudio", "jsnes_nes", "jsnes_utils", "jsnes_cpu", "jsnes_keyboard", "jsnes_mappers", "jsnes_papu", "jsnes_ppu", "jsnes_rom", "jsnes_ui" ], 
	function($) {
		var nes = new JSNES({
			'ui': $('#emulator').JSNESUI({
				"ACT游戏": [
					["超级马里奥", "roms/mario.nes"]
				]
			})
		});
		
	}
);
