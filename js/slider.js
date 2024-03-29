$(function () {
    let checkWarcry = $('#WarcryCheck')
    let result = $('#result')

    let sliderShoot = $('.slider')[0];
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
    let sliderHtH = $('.slider')[1];
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
    let sliderWound = $('.slider')[2];
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
    let sliderMove = $('.slider')[3];
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
    let sliderSize = $('.slider')[4];
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
    let sliderletiety = $('.slider')[5];
    noUiSlider.create(sliderletiety, {
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
        Name: 'Beasts Of Chaos',
        Shoot: 3,
        HtH: 7,
        Wound: 6,
        Move: 5.1,
        Size: 6.1,
        letiety: 6.3,
        Warcry: false

    }
    const BLADES_OF_KHORNE_DAEMONS = {
        Name: 'Blades Of Khorne: Daemons',
        Shoot: 2,
        HtH: 9,
        Wound: 6,
        Move: 5.7,
        Size: 5.4,
        letiety: 2.0,
        Warcry: false

    }
    const BLADES_OF_KHORNE_BLOODBOUND = {
        Name: 'Blades Of Khorne: Bloodbound',
        Shoot: 1,
        HtH: 8,
        Wound: 5,
        Move: 5.6,
        Size: 4.8,
        letiety: 5.1,
        Warcry: false

    }
    const DISCIPLES_OF_TZEENTCH_DAEMONS = {
        Name: 'Disciples Of Tzeentch: Daemons',
        Shoot: 9,
        HtH: 3,
        Wound: 2,
        Move: 7.6,
        Size: 5.8,
        letiety: 2.9,
        Warcry: false

    }
    const DISCIPLES_OF_TZEENTCH_ARCANITES = {
        Name: 'Disciples Of Tzeentch: Arcanites',
        Shoot: 8,
        HtH: 4,
        Wound: 4,
        Move: 6.4,
        Size: 6,
        letiety: 6.1,
        Warcry: false

    }
    const MAGGOTKIN_OF_NURGLE_AEMONS = {
        Name: 'Maggotkin Of Nurgle: Daemons',
        Shoot: 1,
        HtH: 4,
        Wound: 5,
        Move: 3.2,
        Size: 7.2,
        letiety: 2.2,
        Warcry: false

    }
    const MAGGOTKIN_OF_NURGLE_ROTBRINGERS = {
        Name: 'Maggotkin Of Nurgle: Rotbringers',
        Shoot: 1,
        HtH: 6,
        Wound: 5,
        Move: 2.8,
        Size: 6,
        letiety: 2.7,
        Warcry: false

    }
    const HEDONITES_OF_SLAANESH_DAEMONS = {
        Name: 'Hedonites Of Slaanesh: Daemons',
        Shoot: 2,
        HtH: 6,
        Wound: 4,
        Move: 9,
        Size: 6.4,
        letiety: 2.9,
        Warcry: false

    }
    const HEDONITES_OF_SLAANESH_SYBARITES = {
        Name: 'Hedonites Of Slaanesh: Sybarites',
        Shoot: 2,
        HtH: 4,
        Wound: 3,
        Move: 8,
        Size: 5.8,
        letiety: 4.1,
        Warcry: false

    }
    const SKAVEN = {
        Name: 'Skaven',
        Shoot: 7,
        HtH: 4,
        Wound: 2,
        Move: 5.9,
        Size: 6.8,
        letiety: 8.8,
        Warcry: false

    }
    const SLAVES_TO_DARKNESSEN = {
        Name: 'Slaves To Darkness',
        Shoot: 1,
        HtH: 6,
        Wound: 5,
        Move: 7,
        Size: 5.6,
        letiety: 6.6,
        Warcry: false

    }
    const IRON_GOLEM = {
        Name: 'Iron Golem',
        Shoot: 1,
        HtH: 5,
        Wound: 5,
        Move: 3,
        Size: 8.2,
        letiety: 2.2,
        Warcry: true
    }
    const UNTAMED_BEASTS = {
        Name: 'Untamed Beasts',
        Shoot: 2,
        HtH: 4,
        Wound: 4,
        Move: 4.6,
        Size: 7.9,
        letiety: 1.7,
        Warcry: true
    }
    const CORVUS_CABAL = {
        Name: 'Corvus Cabal',
        Shoot: 1,
        HtH: 4,
        Wound: 3,
        Move: 5.3,
        Size: 8.3,
        letiety: 1.5,
        Warcry: true
    }
    const CYPHER_LORDS = {
        Name: 'Cypher Lords',
        Shoot: 1,
        HtH: 4,
        Wound: 3,
        Move: 4.6,
        Size: 7.5,
        letiety: 1.5,
        Warcry: true
    }
    const THE_UNMADE = {
        Name: 'The Unmade',
        Shoot: 1,
        HtH: 4,
        Wound: 3,
        Move: 4.6,
        Size: 7.9,
        letiety: 1.2,
        Warcry: true
    }
    const SPLINTERED_FANG = {
        Name: 'Splintered Fang',
        Shoot: 2,
        HtH: 4,
        Wound: 4,
        Move: 3.2,
        Size: 9.5,
        letiety: 2.4,
        Warcry: true
    }
    const SCIONS_OF_THE_FLAME = {
        Name: 'Scions Of The Flame',
        Shoot: 1,
        HtH: 5,
        Wound: 4,
        Move: 3.2,
        Size: 9.1,
        letiety: 2.7,
        Warcry: true
    }
    const SPIRE_TYRANTS = {
        Name: 'Spire Tyrants',
        Shoot: 1,
        HtH: 4,
        Wound: 3,
        Move: 2.9,
        Size: 9.5,
        letiety: 2.2,
        Warcry: true
    }
    const DARKOATH_SAVAGERS = {
        Name: 'Darkoath Savagers',
        Shoot: 1,
        HtH: 4,
        Wound: 3,
        Move: 3,
        Size: 9,
        letiety: 2.9,
        Warcry: true
    }
    const TARANTULOS_BROOD = {
        Name: 'Tarantulos Brood',
        Shoot: 1,
        HtH: 4,
        Wound: 2,
        Move: 5,
        Size: 10.8,
        letiety: 1.7,
        Warcry: true
    }
    const FLESH_EATER_COURTS = {
        Name: 'Flesh-eater Courts',
        Shoot: 1,
        HtH: 6,
        Wound: 6,
        Move: 7.2,
        Size: 4.9,
        letiety: 2.9,
        Warcry: false
    }
    const NIGHTHAUNT = {
        Name: 'Nighthaunt',
        Shoot: 3,
        HtH: 4,
        Wound: 4,
        Move: 7.1,
        Size: 6.4,
        letiety: 6.1,
        Warcry: false
    }
    const OSSIARCH_BONEREAPERS = {
        Name: 'Ossiarch BonereaperS',
        Shoot: 2,
        HtH: 5,
        Wound: 5,
        Move: 5.6,
        Size: 5.7,
        letiety: 4.4,
        Warcry: false
    }
    const SOULBLIGHT_GRAVELORDS = {
        Name: 'Soulblight Gravelords',
        Shoot: 1,
        HtH: 4,
        Wound: 4,
        Move: 5.1,
        Size: 7,
        letiety: 5.4,
        Warcry: false
    }
    const GLOOMSPITE_GITZ = {
        Name: 'Gloomspite Gitz',
        Shoot: 3,
        HtH: 3,
        Wound: 3,
        Move: 5.6,
        Size: 7.8,
        letiety: 6.3,
        Warcry: false
    }
    const BONESPLITTERZ = {
        Name: 'Bonesplitterz',
        Shoot: 2,
        HtH: 5,
        Wound: 4,
        Move: 6.4,
        Size: 6.5,
        letiety: 4.6,
        Warcry: false
    }
    const IRONJAWZ = {
        Name: 'Ironjawz',
        Shoot: 1,
        HtH: 4,
        Wound: 6,
        Move: 3.4,
        Size: 5.6,
        letiety: 3.9,
        Warcry: false
    }
    const KRULEBOYZ = {
        Name: 'Kruleboyz',
        Shoot: 4,
        HtH: 3,
        Wound: 4,
        Move: 3.4,
        Size: 7.6,
        letiety: 3.7,
        Warcry: false
    }
    const OGOR_MAWTRIBES = {
        Name: 'Ogor Mawtribes',
        Shoot: 5,
        HtH: 9,
        Wound: 6,
        Move: 4.7,
        Size: 4.3,
        letiety: 4.6,
        Warcry: false
    }
    const DAUGHTERS_OF_KHAINE = {
        Name: 'Daughters Of Khaine',
        Shoot: 4,
        HtH: 4,
        Wound: 4,
        Move: 8.2,
        Size: 6.3,
        letiety: 5.1,
        Warcry: false
    }
    const KHAINITE_SHADOWSTALKERS = {
        Name: 'Khainite Shadowstalkers',
        Shoot: 2,
        HtH: 4,
        Wound: 2,
        Move: 6.1,
        Size: 8.3,
        letiety: 1.7,
        Warcry: true
    }
    const FYRESLAYERS = {
        Name: 'Fyreslayers',
        Shoot: 2,
        HtH: 4,
        Wound: 4,
        Move: 1.5,
        Size: 8.8,
        letiety: 4.6,
        Warcry: false
    }
    const IDONETH_DEEPKIN = {
        Name: 'Fidoneth Deepkin',
        Shoot: 2,
        HtH: 4,
        Wound: 4,
        Move: 8.5,
        Size: 5.2,
        letiety: 2.9,
        Warcry: false
    }
    const KHARADRON_OVERLORDS = {
        Name: 'Kharadron Overlords',
        Shoot: 10,
        HtH: 3,
        Wound: 5,
        Move: 6.5,
        Size: 6.3,
        letiety: 6.8,
        Warcry: false
    }
    const LUMINETH_REALM_LORDS = {
        Name: 'Lumineth Realm-lords',
        Shoot: 8,
        HtH: 5,
        Wound: 4,
        Move: 10,
        Size: 8.9,
        letiety: 5.1,
        Warcry: false
    }
    const SERAPHON = {
        Name: 'Seraphon',
        Shoot: 4,
        HtH: 4,
        Wound: 4,
        Move: 7,
        Size: 6.4,
        letiety: 8.3,
        Warcry: false
    }
    const SYLVANETH = {
        Name: 'Sylvaneth',
        Shoot: 3,
        HtH: 4,
        Wound: 4,
        Move: 6.6,
        Size: 6.1,
        letiety: 5.4,
        Warcry: false
    }
    const CITIES_OF_SIGMAR = {
        Name: 'Cities Of Sigmar',
        Shoot: 7,
        HtH: 4,
        Wound: 4,
        Move: 5.8,
        Size: 7.8,
        letiety: 10,
        Warcry: false
    }
    const THUNDERSTRIKE_STORMCASTS = {
        Name: 'Stormcasts Eternals: Thunderstrike',
        Shoot: 3,
        HtH: 8,
        Wound: 7,
        Move: 3,
        Size: 5.6,
        letiety: 4.4,
        Warcry: false
    }
    const STORMCAST_ETERNALS_SACROSANCT_CHAMBER = {
        Name: 'Stormcast Eternals: Sacrosanct Chamber',
        Shoot: 4,
        HtH: 6,
        Wound: 6,
        Move: 5.5,
        Size: 4.6,
        letiety: 5.9,
        Warcry: false
    }
    const STORMCAST_ETERNALS_VANGUARD_AUXILIARY_CHAMBER = {
        Name: 'Stormcast Eternals: Vanguard Auxiliary Chamber',
        Shoot: 10,
        HtH: 5,
        Wound: 6,
        Move: 8.3,
        Size: 4.5,
        letiety: 3.9,
        Warcry: false
    }
    const STORMCAST_ETERNALS_WARRIOR_CHAMBER = {
        Name: 'Stormcast Eternals: Warrior Chamber',
        Shoot: 4,
        HtH: 6,
        Wound: 6,
        Move: 8.4,
        Size: 5.2,
        letiety: 9,
        Warcry: false
    }
    const WarcryFraction = [BEASTS_OF_CHAOS, BLADES_OF_KHORNE_DAEMONS, BLADES_OF_KHORNE_BLOODBOUND, DISCIPLES_OF_TZEENTCH_DAEMONS, DISCIPLES_OF_TZEENTCH_ARCANITES, MAGGOTKIN_OF_NURGLE_AEMONS, MAGGOTKIN_OF_NURGLE_ROTBRINGERS, HEDONITES_OF_SLAANESH_DAEMONS, HEDONITES_OF_SLAANESH_SYBARITES, SKAVEN, SLAVES_TO_DARKNESSEN, IRON_GOLEM, UNTAMED_BEASTS, CORVUS_CABAL, CYPHER_LORDS, THE_UNMADE, SPLINTERED_FANG, SCIONS_OF_THE_FLAME, SPIRE_TYRANTS, DARKOATH_SAVAGERS, TARANTULOS_BROOD, IRON_GOLEM, FLESH_EATER_COURTS, NIGHTHAUNT, OSSIARCH_BONEREAPERS, SOULBLIGHT_GRAVELORDS, GLOOMSPITE_GITZ, BONESPLITTERZ, IRONJAWZ, KRULEBOYZ, OGOR_MAWTRIBES, DAUGHTERS_OF_KHAINE, KHAINITE_SHADOWSTALKERS, FYRESLAYERS, IDONETH_DEEPKIN, KHARADRON_OVERLORDS, LUMINETH_REALM_LORDS, SERAPHON, SYLVANETH, CITIES_OF_SIGMAR, THUNDERSTRIKE_STORMCASTS, STORMCAST_ETERNALS_SACROSANCT_CHAMBER, STORMCAST_ETERNALS_VANGUARD_AUXILIARY_CHAMBER, STORMCAST_ETERNALS_WARRIOR_CHAMBER]
    let ShootResult = []
    let HtHResult = []
    let WoundResult = []
    let MoveResult = []
    let SizeResult = []
    let letietyResult = []
    let WarcryResult = WarcryFraction.filter(fraction => !fraction.Warcry).map(fraction => fraction.Name)
    let FullResult = []

    for (let i = 0; i < WarcryFraction.length; i++) {
        ShootResult.push(WarcryFraction[i].Name),
            HtHResult.push(WarcryFraction[i].Name),
            WoundResult.push(WarcryFraction[i].Name),
            MoveResult.push(WarcryFraction[i].Name),
            SizeResult.push(WarcryFraction[i].Name),
            letietyResult.push(WarcryFraction[i].Name)
        FullResult.push(WarcryFraction[i].Name)
    }

    // Обработка фильтров//
    let ShootMin = 2
    let ShootMax = 10
    let ShootAll = [ShootMin, ShootMax]
    sliderShoot.noUiSlider.on('change', (values, handle) => {
        ShootAll[handle] = Number(values[handle])
        ShootResult = []
        for (let i = 0; i < WarcryFraction.length; i++) {
            if (WarcryFraction[i].Shoot >= ShootAll[0] && WarcryFraction[i].Shoot <= ShootAll[1]) {
                ShootResult.push(WarcryFraction[i].Name)
            }
        }
    })

    let HtHMin = 3
    let HtHMax = 9
    let HtHAll = [HtHMin, HtHMax]
    sliderHtH.noUiSlider.on('change', (values, handle) => {
        HtHAll[handle] = Number(values[handle])
        HtHResult = []
        for (let i = 0; i < WarcryFraction.length; i++) {
            if (WarcryFraction[i].HtH >= HtHAll[0] && WarcryFraction[i].HtH <= HtHAll[1]) {
                HtHResult.push(WarcryFraction[i].Name)
            }
        }
    })


    let WoundMin = 2
    let WoundMax = 7
    let WoundAll = [WoundMin, WoundMax]
    sliderWound.noUiSlider.on('change', (values, handle) => {
        WoundAll[handle] = Number(values[handle])
        WoundResult = []
        for (let i = 0; i < WarcryFraction.length; i++) {
            if (WarcryFraction[i].Wound >= WoundAll[0] && WarcryFraction[i].Wound <= WoundAll[1]) {
                WoundResult.push(WarcryFraction[i].Name)
            }
        }
    })

    let MoveMin = 1.5
    let MoveMax = 10
    let MoveAll = [MoveMin, MoveMax]
    sliderMove.noUiSlider.on('change', (values, handle) => {
        MoveAll[handle] = Number(values[handle])
        MoveResult = []
        for (let i = 0; i < WarcryFraction.length; i++) {
            if (WarcryFraction[i].Move >= MoveAll[0] && WarcryFraction[i].Move <= MoveAll[1]) {
                MoveResult.push(WarcryFraction[i].Name)
            }
        }
    })

    let SizeMin = 4.3
    let SizeMax = 10.8
    let SizeAll = [SizeMin, SizeMax]
    sliderSize.noUiSlider.on('change', (values, handle) => {
        SizeAll[handle] = Number(values[handle])
        SizeResult = []
        for (let i = 0; i < WarcryFraction.length; i++) {
            if (WarcryFraction[i].Size >= SizeAll[0] && WarcryFraction[i].Size <= SizeAll[1]) {
                SizeResult.push(WarcryFraction[i].Name)
            }
        }
    })

    let letietyMin = 1.2
    let letietyMax = 10
    let letietyAll = [letietyMin, letietyMax]
    sliderletiety.noUiSlider.on('change', (values, handle) => {
        letietyAll[handle] = Number(values[handle])
        letietyResult = []
        for (let i = 0; i < WarcryFraction.length; i++) {
            if (WarcryFraction[i].letiety >= letietyAll[0] && WarcryFraction[i].letiety <= letietyAll[1]) {
                letietyResult.push(WarcryFraction[i].Name)
            }
        }
    })

    checkWarcry.on('click', () => {
        WarcryResult = checkWarcry.prop('checked') ?
            FullResult : WarcryFraction.filter(fraction => !fraction.Warcry).map(fraction => fraction.Name);
        console.log(WarcryResult)
    })
    function commonElements(array1, array2, array3, array4, array5, array6, array7) {
        console.log(FullResult)

        let common = FullResult.filter(x => array1.includes(x))
        console.log(common)

        common = common.filter(x => array2.includes(x))
        console.log(common)

        common = common.filter(x => array3.includes(x))
        console.log(common)

        common = common.filter(x => array4.includes(x))
        console.log(common)

        common = common.filter(x => array5.includes(x))
        console.log(common)

        common = common.filter(x => array6.includes(x))
        console.log(common)

        common = common.filter(x => array7.includes(x))
        console.log(common)

        return common;
    }

    // Вывод рузельтата
    const createResult = () => {
        let AllResult = []
        let str = ''
        let res = [ShootResult, HtHResult, WoundResult, MoveResult, SizeResult, letietyResult, WarcryResult]
        AllResult = commonElements(ShootResult, HtHResult, WoundResult, MoveResult, SizeResult, letietyResult, WarcryResult)
        if (AllResult[0] == undefined) {
            AllResult = ['Гоббо ничего не смог найти для тебя.']
        }
        for (let i = 0; i < AllResult.length; i++) {
            str += `${AllResult[i]} <br> <br>`
        }
        result.html(str)
        str = ''
        console.log(res, ShootResult.length, HtHResult.length, WoundResult.length, MoveResult.length, SizeResult.length, letietyResult.length, WarcryResult.length)
    }
    $('.content').on('click', () => {
        createResult()

    })


})

