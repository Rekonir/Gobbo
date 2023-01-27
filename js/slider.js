$(function () {
    var checkWarcry = $('#Warcry')
    var result = $('#result')

    var sliderShoot = $('.slider')[0];
    noUiSlider.create(sliderShoot, {
        start: [1, 10],
        step: 1,
        margin: 1,
        connect: true,
        range: {
            'min': 1,
            'max': 10
        }
    })
    var sliderHtH = $('.slider')[1];
    noUiSlider.create(sliderHtH, {
        start: [3, 9],
        step: 1,
        margin: 1,
        connect: true,
        range: {
            'min': 3,
            'max': 9
        }
    })
    var sliderWound = $('.slider')[2];
    noUiSlider.create(sliderWound, {
        start: [2, 7],
        step: 1,
        margin: 1,
        connect: true,
        range: {
            'min': 2,
            'max': 7
        }
    })
    var sliderMove = $('.slider')[3];
    noUiSlider.create(sliderMove, {
        start: [1.5, 10],
        step: 1.5,
        margin: 1.5,
        connect: true,
        range: {
            'min': 1.5,
            'max': 10
        }
    })
    var sliderSize = $('.slider')[4];
    noUiSlider.create(sliderSize, {
        start: [4.3, 10.8],
        step: 0.5,
        margin: 0.5,
        connect: true,
        range: {
            'min': 4.3,
            'max': 10.8
        }
    })
    var sliderVariety = $('.slider')[5];
    noUiSlider.create(sliderVariety, {
        start: [1.2, 10],
        step: 2.2,
        margin: 2.2,
        connect: true,
        range: {
            'min': 1.2,
            'max': 10
        }
    })

    //База фракций//
    const BEASTS_OF_CHAOS = {
        Name: 'BEASTS OF CHAOS',
        Shoot: 3,
        HtH: 7,
        Wound: 6,
        Move: 5.1,
        Size: 6.1,
        Variety: 6.3,
        Warcry: false

    }
    const BLADES_OF_KHORNE_DAEMONS = {
        Name: 'BLADES OF KHORNE: DAEMONS',
        Shoot: 2,
        HtH: 9,
        Wound: 6,
        Move: 5.7,
        Size: 5.4,
        Variety: 2.0,
        Warcry: false

    }
    const BLADES_OF_KHORNE_BLOODBOUND = {
        Name: 'BLADES OF KHORNE: BLOODBOUND',
        Shoot: 1,
        HtH: 8,
        Wound: 5,
        Move: 5.6,
        Size: 4.8,
        Variety: 5.1,
        Warcry: false

    }
    const DISCIPLES_OF_TZEENTCH_DAEMONS = {
        Name: 'DISCIPLES OF TZEENTCH: DAEMONS',
        Shoot: 9,
        HtH: 3,
        Wound: 2,
        Move: 7.6,
        Size: 5.8,
        Variety: 2.9,
        Warcry: false

    }
    const DISCIPLES_OF_TZEENTCH_ARCANITES = {
        Name: 'DISCIPLES OF TZEENTCH: ARCANITES',
        Shoot: 8,
        HtH: 4,
        Wound: 4,
        Move: 6.4,
        Size: 6,
        Variety: 6.1,
        Warcry: false

    }
    const IRON_GOLEM = {
        Name: 'IRON GOLEM',
        Shoot: 1,
        HtH: 5,
        Wound: 5,
        Move: 3,
        Size: 8.2,
        Variety: 2.2,
        Warcry: true

    }
    const WarcryFraction = [BEASTS_OF_CHAOS, BLADES_OF_KHORNE_DAEMONS, BLADES_OF_KHORNE_BLOODBOUND, DISCIPLES_OF_TZEENTCH_DAEMONS, DISCIPLES_OF_TZEENTCH_ARCANITES, IRON_GOLEM]

    // Обработка фильтров//
    var ShootMin = 2
    var ShootMax = 10
    var str = ''
    var ShootAll = [ShootMin, ShootMax]
    sliderShoot.noUiSlider.on('change', (values, handle) => {
        ShootAll[handle] = Number(values[handle]),
            console.log(ShootAll)
        for (var i = 0; i < WarcryFraction.length; i++) {
            if (WarcryFraction[i].Shoot >= ShootAll[0] && WarcryFraction[i].Shoot <= ShootAll[1]) {
                str += `${WarcryFraction[i].Name} <br>`
            }; result.html(str);
        }
        str = ''
    })
    var HtHMin = 3
    var HtHMax = 9
    var HtHAll = [HtHMin, HtHMax]
    sliderHtH.noUiSlider.on('change', (values, handle) => {
        HtHAll[handle] = Number(values[handle]),
            console.log(HtHAll)
    })

    var WoundMin = 2
    var WoundMax = 7
    var WoundAll = [WoundMin, WoundMax]
    sliderWound.noUiSlider.on('change', (values, handle) => {
        WoundAll[handle] = Number(values[handle]),
            console.log(WoundAll)
    })

    var MoveMin = 1.5
    var MoveMax = 10
    var MoveAll = [MoveMin, MoveMax]
    sliderMove.noUiSlider.on('change', (values, handle) => {
        MoveAll[handle] = Number(values[handle]),
            console.log(MoveAll)
    })

    var SizeMin = 4.3
    var SizeMax = 10.8
    var SizeAll = [SizeMin, SizeMax]
    sliderSize.noUiSlider.on('change', (values, handle) => {
        SizeAll[handle] = Number(values[handle]),
            console.log(SizeAll)
    })

    var VarietyMin = 1.2
    var VarietyMax = 10
    var VarietyAll = [VarietyMin, VarietyMax]
    sliderVariety.noUiSlider.on('change', (values, handle) => {
        VarietyAll[handle] = Number(values[handle]),
            console.log(VarietyAll)
    })
})

