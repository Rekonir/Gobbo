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
    const MAGGOTKIN_OF_NURGLE_AEMONS = {
        Name: 'MAGGOTKIN OF NURGLE: DAEMONS',
        Shoot: 1,
        HtH: 4,
        Wound: 5,
        Move: 3.2,
        Size: 7.2,
        Variety: 2.2,
        Warcry: false

    }
    const MAGGOTKIN_OF_NURGLE_ROTBRINGERS
     = {
        Name: 'MAGGOTKIN OF NURGLE: ROTBRINGERS',
        Shoot: 1,
        HtH: 6,
        Wound: 5,
        Move: 2.8,
        Size: 6,
        Variety: 2.7,
        Warcry: false

    }
    const HEDONITES_OF_SLAANESH_DAEMONS
     = {
        Name: 'HEDONITES OF SLAANESH: DAEMONS',
        Shoot: 2,
        HtH: 6,
        Wound: 4,
        Move: 9,
        Size: 6.4,
        Variety: 2.9,
        Warcry: false

    }
    const HEDONITES_OF_SLAANESH_SYBARITES
     = {
        Name: 'HEDONITES OF SLAANESH: SYBARITES',
        Shoot: 2,
        HtH: 4,
        Wound: 3,
        Move: 8,
        Size: 5.8,
        Variety: 4.1,
        Warcry: false

    }
    const SKAVEN
     = {
        Name: 'SKAVEN',
        Shoot: 7,
        HtH: 4,
        Wound: 2,
        Move: 5.9,
        Size: 6.8,
        Variety: 8.8,
        Warcry: false

    }
    const SKAVSLAVES_TO_DARKNESSEN
     = {
        Name: 'SLAVES TO DARKNESS',
        Shoot: 1,
        HtH: 6,
        Wound: 5,
        Move: 7,
        Size: 5.6,
        Variety: 6.6,
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
    const UNTAMED_BEASTS = {
        Name: 'UNTAMED BEASTS',
        Shoot: 2,
        HtH: 4,
        Wound: 4,
        Move: 4.6,
        Size: 7.9,
        Variety: 1.7,
        Warcry: true
    }
    const CORVUS_CABAL = {
        Name: 'CORVUS CABAL',
        Shoot: 1,
        HtH: 4,
        Wound: 3,
        Move: 5.3,
        Size: 8.3,
        Variety: 1.5,
        Warcry: true
    }
    const CYPHER_LORDS = {
        Name: 'CYPHER LORDS',
        Shoot: 1,
        HtH: 4,
        Wound: 3,
        Move: 4.6,
        Size: 7.5,
        Variety: 1.5,
        Warcry: true
    }
    const THE_UNMADE = {
        Name: 'THE UNMADE',
        Shoot: 1,
        HtH: 4,
        Wound: 3,
        Move: 4.6,
        Size: 7.9,
        Variety: 1.2,
        Warcry: true
    }
    const SPLINTERED_FANG = {
        Name: 'SPLINTERED FANG',
        Shoot: 2,
        HtH: 4,
        Wound: 4,
        Move: 3.2,
        Size: 9.5,
        Variety: 2.4,
        Warcry: true
    }
    const SCIONS_OF_THE_FLAME = {
        Name: 'SCIONS OF THE FLAME',
        Shoot: 1,
        HtH: 5,
        Wound: 4,
        Move: 3.2,
        Size: 9.1,
        Variety: 2.7,
        Warcry: true
    }
    const SPIRE_TYRANTS = {
        Name: 'SPIRE TYRANTS',
        Shoot: 1,
        HtH: 4,
        Wound: 3,
        Move: 2.9,
        Size: 9.5,
        Variety: 2.2,
        Warcry: true
    }
    const DARKOATH_SAVAGERS = {
        Name: 'DARKOATH SAVAGERS',
        Shoot: 1,
        HtH: 4,
        Wound: 3,
        Move: 3,
        Size: 9,
        Variety: 2.9,
        Warcry: true
    }
    const TARANTULOS_BROOD = {
        Name: 'TARANTULOS BROOD',
        Shoot: 1,
        HtH: 4,
        Wound: 2,
        Move: 5,
        Size: 10.8,
        Variety: 1.7,
        Warcry: true
    }
    const WarcryFraction = [BEASTS_OF_CHAOS, BLADES_OF_KHORNE_DAEMONS, BLADES_OF_KHORNE_BLOODBOUND, DISCIPLES_OF_TZEENTCH_DAEMONS, DISCIPLES_OF_TZEENTCH_ARCANITES, IRON_GOLEM]

    // Обработка фильтров//
    var ShootMin = 2
    var ShootMax = 10
    var ShootResult = []
    var ShootAll = [ShootMin, ShootMax]
    sliderShoot.noUiSlider.on('change', (values, handle) => {
        ShootAll[handle] = Number(values[handle])
        for (var i = 0; i < WarcryFraction.length; i++) {
            if (WarcryFraction[i].Shoot >= ShootAll[0] && WarcryFraction[i].Shoot <= ShootAll[1]) {
                ShootResult.push(WarcryFraction[i].Name)

                //str += `${WarcryFraction[i].Name} <br>`
            }
            //result.html(ShootResult);
        } console.log(ShootAll, ShootResult)
        //ShootResult = []
        //str = ''
    })

    var HtHMin = 3
    var HtHMax = 9
    var HtHResult = []
    var HtHAll = [HtHMin, HtHMax]
    sliderHtH.noUiSlider.on('change', (values, handle) => {
        HtHAll[handle] = Number(values[handle])
        for (var i = 0; i < WarcryFraction.length; i++) {
            if (WarcryFraction[i].HtH >= HtHAll[0] && WarcryFraction[i].HtH <= HtHAll[1]) {
                HtHResult.push(WarcryFraction[i].Name)
            }
        } console.log(HtHAll, HtHResult)
        //HtHResult = []
    })


    var WoundMin = 2
    var WoundMax = 7
    var WoundResult = []
    var WoundAll = [WoundMin, WoundMax]
    sliderWound.noUiSlider.on('change', (values, handle) => {
        WoundAll[handle] = Number(values[handle])
        for (var i = 0; i < WarcryFraction.length; i++) {
            if (WarcryFraction[i].Wound >= WoundAll[0] && WarcryFraction[i].Wound <= WoundAll[1]) {
                WoundResult.push(WarcryFraction[i].Name)
            }
        } console.log(WoundAll, WoundResult)
        //WoundResult = []
    })

    var MoveMin = 1.5
    var MoveMax = 10
    var MoveResult = []
    var MoveAll = [MoveMin, MoveMax]
    sliderMove.noUiSlider.on('change', (values, handle) => {
        MoveAll[handle] = Number(values[handle])
        for (var i = 0; i < WarcryFraction.length; i++) {
            if (WarcryFraction[i].Move >= MoveAll[0] && WarcryFraction[i].Move <= MoveAll[1]) {
                MoveResult.push(WarcryFraction[i].Name)
            }
        } console.log(MoveAll, MoveResult)
        //MoveResult = []
    })

    var SizeMin = 4.3
    var SizeMax = 10.8
    var SizeResult = []
    var SizeAll = [SizeMin, SizeMax]
    sliderSize.noUiSlider.on('change', (values, handle) => {
        SizeAll[handle] = Number(values[handle])
        for (var i = 0; i < WarcryFraction.length; i++) {
            if (WarcryFraction[i].Size >= SizeAll[0] && WarcryFraction[i].Size <= SizeAll[1]) {
                SizeResult.push(WarcryFraction[i].Name)
            }
        } console.log(SizeAll, SizeResult)
        //SizeResult = []
    })

    var VarietyMin = 1.2
    var VarietyMax = 10
    var VarietyResult = []
    var VarietyAll = [VarietyMin, VarietyMax]
    sliderVariety.noUiSlider.on('change', (values, handle) => {
        VarietyAll[handle] = Number(values[handle])
        for (var i = 0; i < WarcryFraction.length; i++) {
            if (WarcryFraction[i].Variety >= VarietyAll[0] && WarcryFraction[i].Variety <= VarietyAll[1]) {
                VarietyResult.push(WarcryFraction[i].Name)
            }
        } console.log(VarietyAll, VarietyResult)
        //VarietyResult = []
    })

    $('.content').on('click', () => {
        // if (ShootResult == [] && HtHResult == [] && WoundResult == [] && MoveResult == [] && SizeResult == [] && VarietyResult == []) {
        //     ShootResult = WarcryFraction
        //     HtHResult = WarcryFraction
        //     WoundResult = WarcryFraction
        //     MoveResult = WarcryFraction
        //     SizeResult = WarcryFraction
        //     VarietyResult = WarcryFraction
        //     console.log(`Shoot: ${ShootResult}, HtH: ${HtHResult}, Wound: ${WoundResult}, Move: ${MoveResult}, Size: ${SizeResult}, Variety: ${VarietyResult}`)
        // }
        // else {
            console.log(`Shoot: ${ShootResult}, HtH: ${HtHResult}, Wound: ${WoundResult}, Move: ${MoveResult}, Size: ${SizeResult}, Variety: ${VarietyResult}`)
        //}
        ShootResult = []
        HtHResult = []
        WoundResult = []
        MoveResult = []
        SizeResult = []
        VarietyResult = []
    })


})

