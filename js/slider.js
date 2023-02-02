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
    const MAGGOTKIN_OF_NURGLE_ROTBRINGERS = {
        Name: 'MAGGOTKIN OF NURGLE: ROTBRINGERS',
        Shoot: 1,
        HtH: 6,
        Wound: 5,
        Move: 2.8,
        Size: 6,
        Variety: 2.7,
        Warcry: false

    }
    const HEDONITES_OF_SLAANESH_DAEMONS = {
        Name: 'HEDONITES OF SLAANESH: DAEMONS',
        Shoot: 2,
        HtH: 6,
        Wound: 4,
        Move: 9,
        Size: 6.4,
        Variety: 2.9,
        Warcry: false

    }
    const HEDONITES_OF_SLAANESH_SYBARITES = {
        Name: 'HEDONITES OF SLAANESH: SYBARITES',
        Shoot: 2,
        HtH: 4,
        Wound: 3,
        Move: 8,
        Size: 5.8,
        Variety: 4.1,
        Warcry: false

    }
    const SKAVEN = {
        Name: 'SKAVEN',
        Shoot: 7,
        HtH: 4,
        Wound: 2,
        Move: 5.9,
        Size: 6.8,
        Variety: 8.8,
        Warcry: false

    }
    const SLAVES_TO_DARKNESSEN = {
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
    const FLESH_EATER_COURTS = {
        Name: 'FLESH-EATER COURTS',
        Shoot: 1,
        HtH: 6,
        Wound: 6,
        Move: 7.2,
        Size: 4.9,
        Variety: 2.9,
        Warcry: false
    }
    const NIGHTHAUNT = {
        Name: 'NIGHTHAUNT',
        Shoot: 3,
        HtH: 4,
        Wound: 4,
        Move: 7.1,
        Size: 6.4,
        Variety: 6.1,
        Warcry: false
    }
    const OSSIARCH_BONEREAPERS = {
        Name: 'OSSIARCH BONEREAPERS',
        Shoot: 2,
        HtH: 5,
        Wound: 5,
        Move: 5.6,
        Size: 5.7,
        Variety: 4.4,
        Warcry: false
    }
    const SOULBLIGHT_GRAVELORDS = {
        Name: 'SOULBLIGHT GRAVELORDS',
        Shoot: 1,
        HtH: 4,
        Wound: 4,
        Move: 5.1,
        Size: 7,
        Variety: 5.4,
        Warcry: false
    }
    const GLOOMSPITE_GITZ = {
        Name: 'GLOOMSPITE GITZ',
        Shoot: 3,
        HtH: 3,
        Wound: 3,
        Move: 5.6,
        Size: 7.8,
        Variety: 6.3,
        Warcry: false
    }
    const BONESPLITTERZ = {
        Name: 'BONESPLITTERZ',
        Shoot: 2,
        HtH: 5,
        Wound: 4,
        Move: 6.4,
        Size: 6.5,
        Variety: 4.6,
        Warcry: false
    }
    const IRONJAWZ = {
        Name: 'IRONJAWZ',
        Shoot: 1,
        HtH: 4,
        Wound: 6,
        Move: 3.4,
        Size: 5.6,
        Variety: 3.9,
        Warcry: false
    }
    const KRULEBOYZ = {
        Name: 'KRULEBOYZ',
        Shoot: 4,
        HtH: 3,
        Wound: 4,
        Move: 3.4,
        Size: 7.6,
        Variety: 3.7,
        Warcry: false
    }
    const OGOR_MAWTRIBES = {
        Name: 'OGOR MAWTRIBES',
        Shoot: 5,
        HtH: 9,
        Wound: 6,
        Move: 4.7,
        Size: 4.3,
        Variety: 4.6,
        Warcry: false
    }
    const DAUGHTERS_OF_KHAINE = {
        Name: 'DAUGHTERS OF KHAINE',
        Shoot: 4,
        HtH: 4,
        Wound: 4,
        Move: 8.2,
        Size: 6.3,
        Variety: 5.1,
        Warcry: false
    }
    const KHAINITE_SHADOWSTALKERS = {
        Name: 'KHAINITE SHADOWSTALKERS',
        Shoot: 2,
        HtH: 4,
        Wound: 2,
        Move: 6.1,
        Size: 8.3,
        Variety: 1.7,
        Warcry: true
    }
    const FYRESLAYERS = {
        Name: 'FYRESLAYERS',
        Shoot: 2,
        HtH: 4,
        Wound: 4,
        Move: 1.5,
        Size: 8.8,
        Variety: 4.6,
        Warcry: false
    }
    const IDONETH_DEEPKIN = {
        Name: 'FIDONETH DEEPKIN',
        Shoot: 2,
        HtH: 4,
        Wound: 4,
        Move: 8.5,
        Size: 5.2,
        Variety: 2.9,
        Warcry: false
    }
    const KHARADRON_OVERLORDS = {
        Name: 'KHARADRON OVERLORDS',
        Shoot: 10,
        HtH: 3,
        Wound: 5,
        Move: 6.5,
        Size: 6.3,
        Variety: 6.8,
        Warcry: false
    }
    const LUMINETH_REALM_LORDS = {
        Name: 'LUMINETH REALM-LORDS',
        Shoot: 8,
        HtH: 5,
        Wound: 4,
        Move: 10,
        Size: 8.9,
        Variety: 5.1,
        Warcry: false
    }
    const SERAPHON = {
        Name: 'SERAPHON',
        Shoot: 4,
        HtH: 4,
        Wound: 4,
        Move: 7,
        Size: 6.4,
        Variety: 8.3,
        Warcry: false
    }
    const SYLVANETH = {
        Name: 'SYLVANETH',
        Shoot: 3,
        HtH: 4,
        Wound: 4,
        Move: 6.6,
        Size: 6.1,
        Variety: 5.4,
        Warcry: false
    }
    const CITIES_OF_SIGMAR = {
        Name: 'CITIES OF SIGMAR',
        Shoot: 7,
        HtH: 4,
        Wound: 4,
        Move: 5.8,
        Size: 7.8,
        Variety: 10,
        Warcry: false
    }
    const THUNDERSTRIKE_STORMCASTS = {
        Name: 'STORMCASTS ETERNALS:THUNDERSTRIKE',
        Shoot: 3,
        HtH: 8,
        Wound: 7,
        Move: 3,
        Size: 5.6,
        Variety: 4.4,
        Warcry: false
    }
    const STORMCAST_ETERNALS_SACROSANCT_CHAMBER = {
        Name: 'STORMCAST ETERNALS; SACROSANCT CHAMBER',
        Shoot: 4,
        HtH: 6,
        Wound: 6,
        Move: 5.5,
        Size: 4.6,
        Variety: 5.9,
        Warcry: false
    }
    const STORMCAST_ETERNALS_VANGUARD_AUXILIARY_CHAMBER = {
        Name: 'STORMCAST ETERNALS: VANGUARD AUXILIARY CHAMBER',
        Shoot: 10,
        HtH: 5,
        Wound: 6,
        Move: 8.3,
        Size: 4.5,
        Variety: 3.9,
        Warcry: false
    }
    const STORMCAST_ETERNALS_WARRIOR_CHAMBER = {
        Name: 'STORMCAST ETERNALS: WARRIOR CHAMBER',
        Shoot: 4,
        HtH: 6,
        Wound: 6,
        Move: 8.4,
        Size: 5.2,
        Variety: 9,
        Warcry: false
    }
    const WarcryFraction = [BEASTS_OF_CHAOS, BLADES_OF_KHORNE_DAEMONS, BLADES_OF_KHORNE_BLOODBOUND, DISCIPLES_OF_TZEENTCH_DAEMONS, DISCIPLES_OF_TZEENTCH_ARCANITES, MAGGOTKIN_OF_NURGLE_AEMONS, MAGGOTKIN_OF_NURGLE_ROTBRINGERS, HEDONITES_OF_SLAANESH_DAEMONS, HEDONITES_OF_SLAANESH_SYBARITES, SKAVEN, SLAVES_TO_DARKNESSEN, IRON_GOLEM, UNTAMED_BEASTS, CORVUS_CABAL, CYPHER_LORDS, THE_UNMADE, SPLINTERED_FANG, SCIONS_OF_THE_FLAME, SPIRE_TYRANTS, DARKOATH_SAVAGERS, TARANTULOS_BROOD, IRON_GOLEM, FLESH_EATER_COURTS, NIGHTHAUNT, OSSIARCH_BONEREAPERS, SOULBLIGHT_GRAVELORDS, GLOOMSPITE_GITZ, BONESPLITTERZ, IRONJAWZ, KRULEBOYZ, OGOR_MAWTRIBES, DAUGHTERS_OF_KHAINE, KHAINITE_SHADOWSTALKERS, FYRESLAYERS, IDONETH_DEEPKIN, KHARADRON_OVERLORDS, LUMINETH_REALM_LORDS, SERAPHON, SYLVANETH, CITIES_OF_SIGMAR, THUNDERSTRIKE_STORMCASTS, STORMCAST_ETERNALS_SACROSANCT_CHAMBER, STORMCAST_ETERNALS_VANGUARD_AUXILIARY_CHAMBER, STORMCAST_ETERNALS_WARRIOR_CHAMBER]
    var ShootResult = []
    var HtHResult = []
    var WoundResult = []
    var MoveResult = []
    var SizeResult = []
    var VarietyResult = []
    for (var i = 0; i < WarcryFraction.length; i++) {
        ShootResult.push(WarcryFraction[i].Name),
            HtHResult.push(WarcryFraction[i].Name),
            WoundResult.push(WarcryFraction[i].Name),
            MoveResult.push(WarcryFraction[i].Name),
            SizeResult.push(WarcryFraction[i].Name),
            VarietyResult.push(WarcryFraction[i].Name)
    }

    // Обработка фильтров//
    var ShootMin = 2
    var ShootMax = 10
    var ShootAll = [ShootMin, ShootMax]
    sliderShoot.noUiSlider.on('change', (values, handle) => {
        ShootAll[handle] = Number(values[handle])
        ShootResult = []
        for (var i = 0; i < WarcryFraction.length; i++) {
            if (WarcryFraction[i].Shoot >= ShootAll[0] && WarcryFraction[i].Shoot <= ShootAll[1]) {
                ShootResult.push(WarcryFraction[i].Name)
            }
        }
    })

    var HtHMin = 3
    var HtHMax = 9
    var HtHAll = [HtHMin, HtHMax]
    sliderHtH.noUiSlider.on('change', (values, handle) => {
        HtHAll[handle] = Number(values[handle])
        HtHResult = []
        for (var i = 0; i < WarcryFraction.length; i++) {
            if (WarcryFraction[i].HtH >= HtHAll[0] && WarcryFraction[i].HtH <= HtHAll[1]) {
                HtHResult.push(WarcryFraction[i].Name)
            }
        }
    })


    var WoundMin = 2
    var WoundMax = 7
    var WoundAll = [WoundMin, WoundMax]
    sliderWound.noUiSlider.on('change', (values, handle) => {
        WoundAll[handle] = Number(values[handle])
        WoundResult = []
        for (var i = 0; i < WarcryFraction.length; i++) {
            if (WarcryFraction[i].Wound >= WoundAll[0] && WarcryFraction[i].Wound <= WoundAll[1]) {
                WoundResult.push(WarcryFraction[i].Name)
            }
        }
    })

    var MoveMin = 1.5
    var MoveMax = 10
    var MoveAll = [MoveMin, MoveMax]
    sliderMove.noUiSlider.on('change', (values, handle) => {
        MoveAll[handle] = Number(values[handle])
        MoveResult = []
        for (var i = 0; i < WarcryFraction.length; i++) {
            if (WarcryFraction[i].Move >= MoveAll[0] && WarcryFraction[i].Move <= MoveAll[1]) {
                MoveResult.push(WarcryFraction[i].Name)
            }
        }
    })

    var SizeMin = 4.3
    var SizeMax = 10.8
    var SizeAll = [SizeMin, SizeMax]
    sliderSize.noUiSlider.on('change', (values, handle) => {
        SizeAll[handle] = Number(values[handle])
        SizeResult = []
        for (var i = 0; i < WarcryFraction.length; i++) {
            if (WarcryFraction[i].Size >= SizeAll[0] && WarcryFraction[i].Size <= SizeAll[1]) {
                SizeResult.push(WarcryFraction[i].Name)
            }
        }
    })

    var VarietyMin = 1.2
    var VarietyMax = 10
    var VarietyAll = [VarietyMin, VarietyMax]
    sliderVariety.noUiSlider.on('change', (values, handle) => {
        VarietyAll[handle] = Number(values[handle])
        VarietyResult = []
        for (var i = 0; i < WarcryFraction.length; i++) {
            if (WarcryFraction[i].Variety >= VarietyAll[0] && WarcryFraction[i].Variety <= VarietyAll[1]) {
                VarietyResult.push(WarcryFraction[i].Name)
            }
        }
    })

    // Вывод рузельтата
    var AllResult = []
    var str = ''
    $('.chooser').on('click', () => {
        AllResult = _.intersection(ShootResult, HtHResult, WoundResult, MoveResult, SizeResult, VarietyResult)
        if (AllResult == []) {
            AllResult = ['Ничего не найдено']
        }
        for (var i = 0; i < AllResult.length; i++) {
            str += `${AllResult[i]} <br>`
        }
        result.html(str)
        str = ''
    })


})

