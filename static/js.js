$(document).ready(function() {
    $('#logo').html('<img src="static/logo/3.svg" name="logo" alt="Бесплатный онлайн конструктор грамот, дипломов, благодарностей и тд." />')
    var logo = 1;
    var back = 1;
    var instruction_tuner = 0;
    var fon = 0;
	var gerb = 0;
	var test=0;
    $(document).on('click', '#logo', function() {
        $('#logo').html('<img src="static/logo/' + logo + '.svg' + '">')
        logo++;
        if (logo >= 4) {
            logo = 0;
        }
    });

	
//buttons
	var buttons = 
	{
		'printBtn':['Распечатать'],
		'b2':['Поменять макет'],
		'b3':['Поменять цвет макета'],
		'b4':['Поменять герб'],
		'b5':['Удалить герб'],
		'b6':['Добавить фон'],
		'b7':['Поддержка'],
	};
	
	function create_buttons(x, y) {
		$('nav').append('<button id="'+x+'">'+y[0]+'</button>');
	}

	$.each( buttons, function( key, value ) {
		create_buttons(key, value);
	});
//buttons

	
//fields      
	var fields = 
	{
		'f0': ['Название учреждения', 2, 2],
		'f1': ['Название документа', 2, 2],
		'f2': ['ФИО', 40, 2],
		'f3': ['Рабочему по стирке и ремонту белья муниципального бюджетного учреждения “Колокольчик” села Лесновка Сакского района Республики Крым', 40, 6],
		'f4': ['За высокий профессионализм, добросовестный труди в связи с 50-летним юбилеем МБДОУ “Колокольчик” с. Лесновка Сакского района Республики Крым', 40, 6],
		'f5': ['Должность', 40, 1],
		'f6': ['ФИО', 40, 1],
		'f7': ['Приказ', 40, 1],
		'f8': ['г. Саки', 40, 1],
	};

	function create_fields(x, y) {
		$('article').append('<div id="'+x+'"><textarea style="overflow:hidden" cols="'+y[1]+'" rows="'+y[2]+'" placeholder="'+y[0]+'"></textarea></div>');
	}

	$.each( fields, function( key, value ) {
		create_fields(key, value);
	});
//fields  


    $(document).on('click', '#logo2', function() {
        $('#logo').html('<img src="static/logo/' + logo + '.svg' + '">')
        logo++;
        if (logo >= 4) {
            logo = 0;
        }
    });

    $(document).on('click', '#logo_del', function() {
        $('#logo').html('')
    });


    $(document).on('click', '#printBtn', function() {
        $('#printBtn, nav').fadeOut(0);
        $('textarea').css('border', '0px');
        $('textarea').attr("placeholder", "");
        print()
        $('#printBtn, nav').fadeIn(0);
        $('textarea').css('border', '4px solid red');
    });

    $(document).on('click', '#inst', function() {
        instruction_tuner++;
        if (instruction_tuner == 1) {
            $('#instruction').fadeOut(0);
            $('#instruction').fadeIn(500);
            $('#instruction').html('<br><br><br><h1>техническая поддержка:</h1><h2>alexey_rusin@mail.ru</h2><h2>Алексей Матвеевич</h2>')
            $('#instruction').css({
                'height': '400px',
                'width': '800px',
                'margin': '0 auto',
                'background': '#f2f1ed',
            })
            $('#content').fadeOut(400);

            $("#inst").fadeOut(300);
			$("#inst").fadeIn(300);
			$("#inst").html('вернуться в редактор');
        } else {
            $('#instruction').fadeOut(500);
            $('#content').fadeIn(400);
            instruction_tuner = 0;
            $("#inst").fadeOut(300);
			$("#inst").fadeIn(300);
			$("#inst").html('Поддержка');
        }
    });

    $(document).on('click', '#fonBtn', function() {
        $('#content').css('background', 'url(' + "static/bg/" + back + ".png" + ')')
        back++;
        if (back >= 13) {
            back = 0;
        }
    });


    $(document).on('click', '#fonColorBtn', function() {
		if (fon >= 360 ){
			fon = 0;
			}
        $('#content').css('filter', 'hue-rotate(' + fon + 'deg)')
		$('article').css('filter','hue-rotate('+test+'deg)')
        fon += 20;
		test = - fon;
    });

	$(document).on('click', '#fonBgBtn', function() {
		gerb++;
		if (gerb == 1) {
			$('article').css({
			'background':'url("static/fon.svg") no-repeat ',
			'background-size':'100%',
			'background-position':'50% 80%'
			});
			$("#fonBgBtn").fadeOut(300);
			$("#fonBgBtn").fadeIn(300);
			$("#fonBgBtn").html('убрать фон');
        }
		else {
        	$('article').css('background', 'url("")');
			gerb=0;
			$("#fonBgBtn").fadeOut(300);
			$("#fonBgBtn").fadeIn(300);
			$("#fonBgBtn").html('добавить фон');
		}
    });
});