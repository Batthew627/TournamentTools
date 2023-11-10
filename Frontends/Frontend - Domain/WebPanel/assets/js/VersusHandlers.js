function OneVOneHandler() {
    createSwal({
        title: 'Player 1 Info',
        input: 'textarea',
        inputPlaceholder: 'Username\nTwitch Name',
        footer: '<a href="https://www.youtube.com/watch?v=_UYZaVLu1h0" target="blank"_>How to do this.</a>',
        ...swalConfig,
    }).then((result) => {
        if (result.value) {
            PlayerInfo.push(result.value.split('\n'));
            createSwal({
                title: 'Player 2 Info',
                input: 'textarea',
                inputPlaceholder: 'Username\nTwitch Name',
                footer: '<a href="https://www.youtube.com/watch?v=_UYZaVLu1h0" target="blank"_>How to do this.</a>',
                ...swalConfig,
            }).then((result) => {
                if (result.value) {
                    PlayerInfo.push(result.value.split('\n'));
                    createSwal({
                        title: 'Round',
                        input: 'text',
                        inputPlaceholder: 'Round 1',
                        footer: '<a href="https://www.youtube.com/watch?v=_UYZaVLu1h0" target="blank"_>How to do this.</a>',
                        ...swalConfig,
                    }).then((result) => {
                        if (result.value) {
                            [PlayerNames[0], PlayerNames[1]] = [PlayerInfo[0][0], PlayerInfo[1][0]];
                            PlayerInfo.push(result.value.split("\n"));
                            round = result.value;

                            document.getElementById("playerScore").removeAttribute("disabled");
                            document.getElementById("P1ScoreSlider").removeAttribute("disabled");
                            document.getElementById("P2ScoreSlider").removeAttribute("disabled");
                            document.getElementById("currentMap").removeAttribute("disabled");
                            document.getElementById("mapPlaying").removeAttribute("disabled");
                            document.getElementById("P1Name").innerHTML = `${PlayerNames[0]}'s score`;
                            document.getElementById("P2Name").innerHTML = `${PlayerNames[1]}'s score`;
                            inMatch = true;
                            ws.send(JSON.stringify({
                                Type: '5',
                                command: 'createUsers',
                                matchStyle: '1v1',
                                PlayerNames: [PlayerNames[0], PlayerNames[1]],
                                PlayerIds: [PlayerIDs[0], PlayerIDs[1]],
                                TwitchIds: [PlayerInfo[0][1], PlayerInfo[1][1]],
                                Round: round
                            }));
                            if (!local) {
                                BeatKhana();
                            }
                            if (local) {
                                localPools();
                            }
                        }
                    })
                }
            })
        }
    })
}

const AllPlayerIDs = [76561199157065937,
    76561198225951968,
    76561198797524994,
    76561198334343711,
    76561199229335580,
    76561198948043800,
    76561198835431545,
    76561198390926781,
    76561198085444341,
    76561198803740722,
    76561198167372371,
    76561198988695829,
    76561198329760372,
    76561199237802861,
    76561198093028672,
    76561199124634617,
    76561198108275916,
    76561199080950125,
    76561198968616704,
    76561198181886967,
    76561199122886452,
    76561198381861023,
    76561198073564762,
    76561198078200653,
    76561199003586234,
    76561199013457802,
    76561198160636106,
    76561198354105842,
    76561198089913211,
    76561198844037204,
    76561198376929690,
    76561199050013204,
    76561198311143750,
    76561198993934070,
    3318921274845075,
    76561198096273599,
    76561197974131273,
    76561198843522732,
    76561198161493499,
    76561199104046453,
    76561198941171879,
    76561198142914475,
    76561198305748823];

const AllTwitchNames = [
    "voltage_4536",
    "skytoss2048",
    "itsrexagain",
    "semdol1",
    "greatwalloper273",
    "Svensaber",
    "ajmonkey21_",
    "spectral2506",
    "dieeneschrodinger",
    "hammyie",
    "CrusaderPepe",
    "olbmaphlee1",
    "noam15A",
    "black_void1001",
    "takanas1",
    "computerhackerman",
    "floatyoat",
    "blobby56789",
    "yurkleee",
    "b4z1c",
    "monkeyhere1234",
    "Scooward",
    "sanichello",
    "potasium_",
    "fqrbi",
    "bunnumss",
    "rosievr_",
    "sckuffles",
    "HypersonicSharkz",
    "scooooop_",
    "daynerious",
    "07doomguy",
    "wooffley",
    "tanhis",
    "liammtwitch",
    "rustydesu",
    "justcallmejack",
    "mabe45",
    "ghilovr",
    "Nolantherhino",
    "finnishguy123_",
    "ryjiku",
    "mr_bjo"
]

function FindTwitchName(SSID) {
    var index = AllPlayerIDs.indexOf(SSID)
    return (AllTwitchNames[index])
}

function TwoVTwoHandler() {
    createSwal({
        title: 'Team Images',
        input: 'textarea',
        inputPlaceholder: 'Team 1 Image URL\nTeam 2 Image URL',
        footer: '<a href="https://www.youtube.com/watch?v=_UYZaVLu1h0" target="blank"_>How to do this.</a>',
        ...swalConfig,
    }).then((result) => {
        if (result.value) {
            TeamImages.push(result.value.split('\n'));
            createSwal({
                title: 'Team 1 Twitch-names\n(Only name)',
                input: 'textarea',
                inputPlaceholder: `${PlayerIDs[0]}\n${PlayerIDs[1]}`,
                footer: '<a href="https://www.youtube.com/watch?v=_UYZaVLu1h0" target="blank"_>How to do this.</a>',
                ...swalConfig,
            }).then((result) => {
                if (result.value) {
                    PlayerInfo.push(FindTwitchName(PlayerIDs[0]))
                    PlayerInfo.push(FindTwitchName(PlayerIDs[1]))

                    createSwal({
                        title: 'Team 2 Twitch-names\n(Only name)',
                        input: 'textarea',
                        inputPlaceholder: `${PlayerNames[2]}\n${PlayerNames[3]}`,
                        footer: '<a href="https://www.youtube.com/watch?v=_UYZaVLu1h0" target="blank"_>How to do this.</a>',
                        ...swalConfig,
                    }).then((result) => {
                        if (result.value) {
                            PlayerInfo.push(FindTwitchName(PlayerIDs[2]))
                            PlayerInfo.push(FindTwitchName(PlayerIDs[3]))
                            createSwal({
                                title: 'Round',
                                input: 'text',
                                inputPlaceholder: 'Round 1',
                                footer: '<a href="https://www.youtube.com/watch?v=_UYZaVLu1h0" target="blank"_>How to do this.</a>',
                                ...swalConfig,
                            }).then((result) => {
                                if (result.value) {
                                    round = result.value;

                                    document.getElementById("playerScore").removeAttribute("disabled");
                                    document.getElementById("P1ScoreSlider").removeAttribute("disabled");
                                    document.getElementById("P2ScoreSlider").removeAttribute("disabled");
                                    document.getElementById("currentMap").removeAttribute("disabled");
                                    document.getElementById("mapPlaying").removeAttribute("disabled");
                                    document.getElementById("P1Name").innerHTML = `${TeamNamesIDs[0]}'s score`;
                                    document.getElementById("P2Name").innerHTML = `${TeamNamesIDs[2]}'s score`;
                                    inMatch = true;
                                    ws.send(JSON.stringify({
                                        Type: '5',
                                        command: 'createUsers',
                                        matchStyle: '2v2',
                                        PlayerNames: [PlayerNames[0], PlayerNames[1], PlayerNames[2], PlayerNames[3]],
                                        PlayerIds: [PlayerIDs[0], PlayerIDs[1], PlayerIDs[2], PlayerIDs[3]],
                                        TwitchIds: [PlayerInfo[0][0], PlayerInfo[0][1], PlayerInfo[1][0], PlayerInfo[1][1]],
                                        TeamNames: [TeamNamesIDs[0], TeamNamesIDs[2]],
                                        TeamIDs: [TeamNamesIDs[1], TeamNamesIDs[3]],
                                        TeamImages: [TeamImages[0][0], TeamImages[0][1]],
                                        Round: round
                                    }));
                                    if (!local) {
                                        BeatKhana();
                                    }
                                    if (local) {
                                        localPools();
                                    }
                                }
                            })
                        }
                    })
                }
            })
        }
    })
}