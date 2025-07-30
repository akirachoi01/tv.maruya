const channels = [
  {
    'name': 'CNN',
    'category': 'Local',
    'type': 'mpd',
    'url': 'https://live-atv-cdn.izzigo.tv/5/out/u/dash/HBOPLUSHD/default.mpd',
    'drm': {
      'clearkey': {
        'keyId': '31363331363734363432333339393538',
        'key': 'bb43112b7b72e9c287da0ecdec8606a7'
      }
    }
  },
  {
    'name': 'TV5',
    'category': 'Local',
    'type': 'mpd',
    'url': 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/tv5_hd.mpd',
    'drm': {
      'clearkey': {
        'keyId': '53a3776a034dbe5f483d0f3a46f5fddf',
        'key': '3ab7cff1e63b9efc40aa962023b4b6b8'
      }
    }
  },
  {
    'name': 'A2Z',
    'category': 'Local',
    'type': 'mpd',
    'url': 'https://bunproxy.azurewebsites.net/api/001/2/ch00000090990000001093/manifest.mpd?virtualDomain=001.live_hls.zte.com',
    'drm': {
      'clearkey': {
        'keyId': '22312FtIwGG',
        'key': '7a98f8e748e2e14057e9f99ac8e3a025'
      }
    }
  },
  {
    'name': 'PTV',
    'category': 'Local',
    'type': 'mpd',
    'url': 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_ptv4_sd.mpd',
    'drm': {
      'clearkey': {
        'keyId': '34880f56627c11ee8c990242ac120002',
        'key': '0f8537d8412b11edb8780242ac120002'
      }
    }
  },
  {
    'name': 'GTV',
    'category': 'Local',
    'type': 'mpd',
    'url': 'https://bunproxy.azurewebsites.net/api/001/2/ch00000090990000001286/manifest.mpd?virtualDomain=001.live_hls.zte.com',
    'drm': {
      'clearkey': {
        'keyId': '2e2ac52cadf843459915eaa1a9b95e48',
        'key': '96c5ef69479732ae734f962748c19729'
      }
    }
  },
  {
    'name': 'NET25',
    'category': 'Local',
    'type': 'mpd',
    'url': 'https://bunproxy.azurewebsites.net/api/001/2/ch00000090990000001143/manifest.mpd?virtualDomain=001.live_hls.zte.com',
    'drm': {
      'clearkey': {
        'keyId': '31363233323238353336303333363036',
        'key': '31363232353335323435353337353331'
      }
    }
  },
  {
    'name': 'ONE NEWS',
    'category': 'Local',
    'type': 'mpd',
    'url': 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/onenews_hd1.mpd',
    'drm': {
      'clearkey': {
        'keyId': '77d98ed71db7524c27875a09a975f9e6',
        'key': '3085cadf11d93aa24b88ba938ad61ccd'
      }
    }
  },
  {
    'name': 'IBC 13',
    'category': 'Local',
    'type': 'mpd',
    'url': 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/ibc13_sd_new.mpd',
    'drm': {
      'clearkey': {
        'keyId': '387938463676644f7141503474507435',
        'key': '335511dfdf0d03bc06f1fdead5870b5a'
      }
    }
  },
  {
    'name': 'CNN PHILIPPINES',
    'category': 'Local',
    'type': 'mpd',
    'url': 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_cnnhd.mpd',
    'drm': {
      'clearkey': {
        'keyId': 'b5a3a800848120c843ae0fa68c09c261',
        'key': 'fad936249e036830aa5bef41bec05326'
      }
    }
  },
  {
    'name': 'A2Z',
    'category': 'Local',
    'type': 'mpd',
    'url': 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_a2z.mpd',
    'drm': {
      'clearkey': {
        'keyId': 'f703e4c8ec9041eeb5028ab4248fa094',
        'key': 'f2f613fb2132acd019d2a96bf1be15c1'
      }
    }
  },
  {
    'name': 'ALL TV',
    'category': 'Local',
    'type': 'mpd',
    'url': 'https://bunproxy.azurewebsites.net/api/001/2/ch00000090990000001109/manifest.mpd?virtualDomain=001.live_hls.zte.com',
    'drm': {
      'clearkey': {
        'keyId': '31363233323238353336303333363036',
        'key': '40314mkWgwF'
      }
    }
  },
  {
    'name': 'RPTV',
    'category': 'Local',
    'type': 'mpd',
    'url': 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cnn_rptv_prod_hd.mpd',
    'drm': {
      'clearkey': {
        'keyId': 'b04ae8017b5b4601a5a0c9060f6d5b7d',
        'key': '83b7ae276784a7f78f4a0c1190974d5c'
      }
    }
  },
  {
    'name': 'DZRH TV',
    'category': 'Local',
    'type': 'mpd',
    'url': 'https://bunproxy.azurewebsites.net/api/001/2/ch00000090990000001159/manifest.mpd?virtualDomain=001.live_hls.zte.com',
    'drm': {
      'clearkey': {
        'keyId': '5436395534576f7638744a43356d336e',
        'key': '4b44557035556777346e4b3745613651'
      }
    }
  },
  {
    'name': 'RJ TV',
    'category': 'Local',
    'type': 'mpd',
    'url': 'https://bunproxy.azurewebsites.net/api/001/2/ch00000090990000001092/manifest.mpd?virtualDomain=001.live_hls.zte.com',
    'drm': {
      'clearkey': {
        'keyId': '6169dd042bb5e59d709272b614011bbb',
        'key': 'a82edc340bc73447bac16cdfed0a4c62'
      }
    }
  },
  {
    'name': 'RADYO BANDIDO TV',
    'category': 'Local',
    'type': 'mpd',
    'url': 'https://d7x8z4yuq42qn.cloudfront.net/index_7.m3u8',
    'drm': {
      'clearkey': {
        'keyId': '27662063ZATMqp',
        'key': '346b9f41e2933748c8861f82932e0110'
      }
    }
  },
  {
    'name': 'CLTV 36',
    'category': 'Local',
    'type': 'mpd',
    'url': 'https://bunproxy.azurewebsites.net/api/001/2/ch00000090990000001254/manifest.mpd?virtualDomain=001.live_hls.zte.com',
    'drm': {
      'clearkey': {
        'keyId': '18827aad7e2e79e526f529fd5027cb47',
        'key': '4d7e33da19b971cef49e35eccdb9de0b'
      }
    }
  },
  {
    'name': 'DZMM TELERADYO',
    'category': 'Local',
    'type': 'mpd',
    'url': 'https://bunproxy.azurewebsites.net/api/001/2/ch00000090990000001174/manifest.mpd?virtualDomain=001.live_hls.zte.com',
    'drm': {
      'clearkey': {
        'keyId': '279695ebe0fb1bc5787422b6b59ce8a8',
        'key': '4ddc4cd97e7016485cb6d25bc2ba3cda'
      }
    }
  },
  {
    'name': 'UNTV',
    'category': 'Local',
    'type': 'mpd',
    'url': 'https://bunproxy.azurewebsites.net/api/001/2/ch00000090990000001177/manifest.mpd?virtualDomain=001.live_hls.zte.com',
    'drm': {
      'clearkey': {
        'keyId': '386f3337674c36666e3861713930726f',
        'key': '2bfc3e059a9f4176b835a15c9a0c0dac'
      }
    }
  },
  {
    'name': 'ALL TV',
    'category': 'Local',
    'type': 'mpd',
    'url': 'https://bunproxy.azurewebsites.net/api/001/2/ch00000090990000001109/manifest.mpd?virtualDomain=001.live_hls.zte.com',
    'drm': {
      'clearkey': {
        'keyId': '31363232303137373937323535313836',
        'key': '39346c527a596c59304a313449343338'
      }
    }
  },
  {
    'name': 'FRANCE 24',
    'category': 'News',
    'type': 'hls',
    'url': 'https://a-cdn.klowdtv.com/live2/france24_720p/chunks.m3u8'
  },
  {
    'name': 'AL JAZEERA',
    'category': 'News',
    'type': 'mpd',
    'url': 'https://uselector.cdn.intigral-ott.net/MBMH/MBMH.isml/manifest.mpd',
    'drm': {
      'clearkey': {
        'keyId': '5458f45efedb4d6f8aa6ac76c85b621b',
        'key': '9547f9aead1237c8a3b1bf0a91ed9995'
      }
    }
  },
  {
    'name': 'BLOOMBERG',
    'category': 'News',
    'type': 'mpd',
    'url': 'https://www.bloomberg.com/media-manifest/streams/asia.m3u8',
    'drm': {
      'clearkey': {
        'keyId': 'b8ae7679cf18e7261303313b18ba7a14',
        'key': '723548436f6e34333961586150756649'
      }
    }
  },
  {
    'name': 'ONE PH',
    'category': 'Local',
    'type': 'mpd',
    'url': 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/oneph_sd.mpd',
    'drm': {
      'clearkey': {
        'keyId': '8726ef7eaf5b9dce15fb6aa9f80bd53f',
        'key': 'd3ad27d7fe1f14fb1a2cd5688549fbab'
      }
    }
  },
  {
    'name': 'BILYONARYO',
    'category': 'Local',
    'type': 'mpd',
    'url': 'https://qp-pldt-live-grp-05-prod.akamaized.net/out/u/bilyonaryoch.mpd',
    'drm': {
      'clearkey': {
        'keyId': '4cbc004d8c444f9f996db42059ce8178',
        'key': '38694e34324d543478316b7455753437'
      }
    }
  },
  {
    'name': 'SMNI',
    'category': 'Local',
    'type': 'mpd',
    'url': 'https://tglmp04.akamaized.net/out/v1/61b00aa312c84a0b988dc000d37926db/manifest.mpd',
    'drm': {
      'clearkey': {
        'keyId': '3ff02fcd80c2e3230c52ae70fe903410',
        'key': '79f4028730acca9ab8b00f26158ddb10'
      }
    }
  },
  {
    'name': 'TVUP',
    'category': 'Local',
    'type': 'mpd',
    'url': 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/tvup_prd.mpd',
    'drm': {
      'clearkey': {
        'keyId': '83e813ccd4ca4837afd611037af02f63',
        'key': 'ae26845bd33038a9c0774a0981007294'
      }
    }
  },
  {
    'name': 'TRUE FM TV',
    'category': 'Local',
    'type': 'mpd',
    'url': 'https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/truefm_tv.mpd',
    'drm': {
      'clearkey': {
        'keyId': '94253cf1df2659c3ea253ba1091eca4d',
        'key': '2b9ba811e9c5aeafc8ae1b71cdca4d6a'
      }
    }
  },
  {
    'name': 'ALIW CHANNEL 23',
    'category': 'Local',
    'type': 'mpd',
    'url': 'https://bunproxy.azurewebsites.net/api/001/2/ch00000090990000001245/manifest.mpd?virtualDomain=001.live_hls.zte.com',
    'drm': {
      'clearkey': {
        'keyId': '34ce95b60c424e169619816c5181aded',
        'key': '4b80724d0ef86bcb2c21f7999d67739d'
      }
    }
  },
  {
    'name': 'LIGHT TV',
    'category': 'Local',
    'type': 'mpd',
    'url': 'https://bunproxy.azurewebsites.net/api/001/2/ch00000090990000001179/manifest.mpd?virtualDomain=001.live_hls.zte.com',
    'drm': {
      'clearkey': {
        'keyId': '1a655189ab5c49eb235308c2b1a9e710',
        'key': '0a7ab3612f434335aa6e895016d8cd2d'
      }
    }
  },
  {
    'name': 'MINDANOW NETWORK',
    'category': 'Local',
    'type': 'mpd',
    'url': 'https://bunproxy.azurewebsites.net/api/001/2/ch00000090990000001243/manifest.mpd?virtualDomain=001.live_hls.zte.com',
    'drm': {
      'clearkey': {
        'keyId': '4e993aa8c1f295f8b94e8e9e6f6d0bfe',
        'key': '38346b5732353165303954347677476e'
      }
    }
  },
  {
    'name': 'GOLDEN NATION NETWORK',
    'category': 'Local',
    'type': 'mpd',
    'url': 'https://bunproxy.azurewebsites.net/api/001/2/ch00000090990000001154/manifest.mpd?virtualDomain=001.live_hls.zte.com',
    'drm': {
      'clearkey': {
        'keyId': '31363232363231343638363035363236',
        'key': '911e72adf36946afbdbb4f80782a8394'
      }
    }
  },
  {
    'name': 'INC TV',
    'category': 'Local',
    'type': 'mpd',
    'url': 'https://bunproxy.azurewebsites.net/api/001/2/ch00000090990000001123/manifest.mpd?virtualDomain=001.live_hls.zte.com',
    'drm': {
      'clearkey': {
        'keyId': '31363233323238373138303333383536',
        'key': '31363232303230383430323537313039'
      }
    }
  },
  {
    'name': 'EWTN',
    'category': 'Local',
    'type': 'mpd',
    'url': 'https://bunproxy.azurewebsites.net/api/001/2/ch00000090990000001104/manifest.mpd?virtualDomain=001.live_hls.zte.com',
    'drm': {
      'clearkey': {
        'keyId': 'f3266bec607f25879f48640f30f1c888',
        'key': 'eac7cd7979f04288bc335fc1d88fa344'
      }
    }
  },
  {
    'name': 'TV MARIA',
    'category': 'Local',
    'type': 'mpd',
    'url': 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/tvmaria_prd.mpd',
    'drm': {
      'clearkey': {
        'keyId': 'd8520e96a1283ab6e5be538474bfa810',
        'key': '74516e7a4f3472713651316233425841'
      }
    }
  },
  {
    'name': 'CINEONE',
    'category': 'Local',
    'type': 'mpd',
    'url': 'https://linearjitp-playback.astro.com.my/dash-wv/linear/500/default_ott.mpd',
    'drm': {
      'clearkey': {
        'keyId': '31bb1ee9a8d088f62b0103550c301449',
        'key': 'de6c5feaae5f6963b4b392ddc8b6a778'
      }
    }
  },
  {
    'name': 'ORAS NG HIMALA TV',
    'category': 'Local',
    'type': 'mpd',
    'url': 'https://bunproxy.azurewebsites.net/api/001/2/ch00000090990000001175/manifest.mpd?virtualDomain=001.live_hls.zte.com',
    'drm': {
      'clearkey': {
        'keyId': '31363233323237303338303332343538',
        'key': '6HeYyIE'
      }
    }
  },
  {
    'name': 'DWAR ABANTE RADYO',
    'category': 'Local',
    'type': 'mpd',
    'url': 'https://bunproxy.azurewebsites.net/api/001/2/ch00000090990000001338/manifest.mpd?virtualDomain=001.live_hls.zte.com',
    'drm': {
      'clearkey': {
        'keyId': '6a9fcc2f94258cee0f2108687c42e710',
        'key': '15b830e0b73b0b8ef99786121997d5f5'
      }
    }
  },
  {
    'name': 'KAPAMILYA CHANNEL HD',
    'category': 'Local',
    'type': 'mpd',
    'url': 'https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-anc-global-dash-abscbnono/index.mpd',
    'drm': {
      'clearkey': {
        'keyId': '2fbdaa3bea0d0323ae011b318d1db716',
        'key': 'ce5d18ffd68650affce1985201983ab7'
      }
    }
  },
  {
    'name': 'PBA RUSH',
    'category': 'Local',
    'type': 'mpd',
    'url': 'https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/cg_pbarush_hd1.mpd',
    'drm': {
      'clearkey': {
        'keyId': '95588338ee37423e99358a6d431324b9',
        'key': 'f2f613fb2132acd019d2a96bf1be15c1'
      }
    }
  },
  {
    'name': 'CINEMO!',
    'category': 'Local',
    'type': 'mpd',
    'url': 'https://bunproxy.azurewebsites.net/api/001/2/ch00000090990000001081/manifest.mpd?virtualDomain=001.live_hls.zte.com',
    'drm': {
      'clearkey': {
        'keyId': '94bc19ad9cb04a7e6871e650a7f6529c',
        'key': 'cacc2086a1ac693d6173084b942e751d'
      }
    }
  },
  {
    'name': 'UAAP VARSITY',
    'category': 'Local',
    'type': 'mpd',
    'url': 'https://qp-pldt-live-grp-10-prod.akamaized.net/out/u/cg_uaap_cplay_sd.mpd',
    'drm': {
      'clearkey': {
        'keyId': '361197805d0149c29801946cf2dde67c',
        'key': 'f2f613fb2132acd019d2a96bf1be15c1'
      }
    }
  },
  {
    'name': 'CINEMA ONE',
    'category': 'Local Entertainment',
    'type': 'mpd',
    'url': 'https://bunproxy.azurewebsites.net/api/001/2/ch00000090990000001283/manifest.mpd?virtualDomain=001.live_hls.zte.com',
    'drm': {
      'clearkey': {
        'keyId': '31363331363736373234333532363730',
        'key': '684b6853695333444a6b345579376a61'
      }
    }
  },
  {
    'name': 'PBO',
    'category': 'Local Entertainment',
    'type': 'mpd',
    'url': 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/pbo_sd.mpd',
    'drm': {
      'clearkey': {
        'keyId': '2fb39ab3f55333d5fa3e830ebf99ec16',
        'key': '271873crVSgp'
      }
    }
  },
  {
    'name': 'JEEPNEY TV',
    'category': 'Local Entertainment',
    'type': 'mpd',
    'url': 'https://bunproxy.azurewebsites.net/api/001/2/ch00000090990000001090/manifest.mpd?virtualDomain=001.live_hls.zte.com',
    'drm': {
      'clearkey': {
        'keyId': 'b207c44332844523a3a3b0469e5652d7',
        'key': '2ffd7230416150fd5196fd7ea71c36f3'
      }
    }
  },
  {
    'name': 'CINEMA ONE',
    'category': 'Local Entertainment',
    'type': 'mpd',
    'url': 'https://linearjitp-playback.astro.com.my/dash-wv/linear/500/default_ott.mpd',
    'drm': {
      'clearkey': {
        'keyId': '31bb1ee9a8d088f62b0103550c301449',
        'key': 'de6c5feaae5f6963b4b392ddc8b6a778'
      }
    }
  },
  {
    'name': 'FRONT ROW CHANNEL',
    'category': 'Local Entertainment',
    'type': 'hls',
    'url': 'https://jungotvstream.chanall.tv/jungotv/frontrow/stream.m3u8'
  },
  {
    'name': 'SOLARFLIX',
    'category': 'Local Entertainment',
    'type': 'mpd',
    'url': 'https://fta2-cdn-flr.visionplus.id/out/v1/782400332c96440598260730a864bc6f/index.mpd',
    'drm': {
      'clearkey': {
        'keyId': '0c64ccfb978e7390bd33344075492aec',
        'key': '3de28411cf08a64ea935b9578f6d0edd'
      }
    }
  },
  {
    'name': 'SARI-SARI',
    'category': 'Local Entertainment',
    'type': 'mpd',
    'url': 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_sari_sari_sd.mpd',
    'drm': {
      'clearkey': {
        'keyId': 'cb9e1a122ed1c6445f7d3fd2162358f1',
        'key': '40f019b86241d23ef075633fd7f1e927'
      }
    }
  },
  {
    'name': 'BUKO',
    'category': 'Local Entertainment',
    'type': 'mpd',
    'url': 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_buko_sd.mpd',
    'drm': {
      'clearkey': {
        'keyId': 'd273c085f2ab4a248e7bfc375229007d',
        'key': '7932354c3a84f7fc1b80efa6bcea0615'
      }
    }
  },
  {
    'name': 'TAP ACTION FLIX',
    'category': 'Local Entertainment',
    'type': 'mpd',
    'url': 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_tapactionflix_hd1.mpd',
    'drm': {
      'clearkey': {
        'keyId': '342972045bddbc97f43cc3c841cdc6b9',
        'key': '322d06e9326f4753a7ec0908030c13d8'
      }
    }
  },
  {
    'name': 'TAP TV',
    'category': 'Local Entertainment',
    'type': 'mpd',
    'url': 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_taptv_sd.mpd',
    'drm': {
      'clearkey': {
        'keyId': '8ccb6857157c1a01c5a47eb853f51aa2',
        'key': '911e72adf36946afbdbb4f80782a8394'
      }
    }
  },
  {
    'name': 'TVN MOVIES PINOY',
    'category': 'Local Entertainment',
    'type': 'mpd',
    'url': 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_tvnmovie.mpd',
    'drm': {
      'clearkey': {
        'keyId': 'a8795f3bdb8a4778b7e888ee484cc7a1',
        'key': 'fecaa3486d9deef3f7f0e1a95b662cb7'
      }
    }
  },
  {
    'name': 'CELESTIAL MOVIES PINOY',
    'category': 'Local Entertainment',
    'type': 'hls',
    'url': 'https://bunproxy.azurewebsites.net/api/001/2/ch00000090990000001234/manifest.mpd?virtualDomain=001.live_hls.zte.com'
  },
  {
    'name': 'HALLYPOP',
    'category': 'Jungo TV',
    'type': 'hls',
    'url': 'https://jungotvstream.chanall.tv/jungotv/hallypop/stream.m3u8'
  },
  {
    'name': 'JUNGO PINOY TV',
    'category': 'Jungo TV',
    'type': 'hls',
    'url': 'https://jungotvstream.chanall.tv/jungotv/jungopinoytv/stream.m3u8'
  },
  {
    'name': 'SCREAMFLIX',
    'category': 'Jungo TV',
    'type': 'hls',
    'url': 'https://jungotvstream.chanall.tv/jungotv/screamflix/stream.m3u8'
  },
  {
    'name': 'COMBATGO',
    'category': 'Jungo TV',
    'type': 'hls',
    'url': 'https://jungotvstream.chanall.tv/jungotv/combatgo/stream.m3u8'
  },
  {
    'name': 'CCTV-4',
    'category': 'News',
    'type': 'mpd',
    'url': 'https://amg00405-rakutentv-cgtn-rakuten-i9tar.amagi.tv/master.m3u8',
    'drm': {
      'clearkey': {
        'keyId': 'fa49373ddac7b0e9079e62a1ab55807c',
        'key': 'af573556d33ef2f094b98c7d22e9ffce'
      }
    }
  },
  {
    'name': 'CGTN DOCUMENTARY',
    'category': 'News',
    'type': 'hls',
    'url': 'https://cdn4.skygo.mn/live/disk1/CGTN_Doc/HLSv3-FTA/CGTN_Doc.m3u8'
  },
  {
    'name': 'WION',
    'category': 'News',
    'type': 'hls',
    'url': 'https://jmp2.uk/sam-DEBD4900001QV.m3u8'
  },
  {
    'name': 'DW',
    'category': 'News',
    'type': 'hls',
    'url': 'https://dwamdstream102.akamaized.net/hls/live/2015525/dwstream102/index.m3u8'
  },
  {
    'name': 'NHK WORLD JAPAN',
    'category': 'News',
    'type': 'hls',
    'url': 'https://nhkwlive-ojp.akamaized.net/hls/live/2003459/nhkwlive-ojp-en/index.m3u8'
  },
  {
    'name': 'BLOOMBERG',
    'category': 'News',
    'type': 'mpd',
    'url': 'https://www.bloomberg.com/media-manifest/streams/asia.m3u8',
    'drm': {
      'clearkey': {
        'keyId': 'b8ae7679cf18e7261303313b18ba7a14',
        'key': '723548436f6e34333961586150756649'
      }
    }
  },
  {
    'name': 'REUTERS',
    'category': 'News',
    'type': 'hls',
    'url': 'https://jmp2.uk/sam-DEBD4900001QV.m3u8'
  },
  {
    'name': 'TRT WORLD',
    'category': 'News',
    'type': 'hls',
    'url': 'https://tv-trtworld.medya.trt.com.tr/master.m3u8'
  },
  {
    'name': 'RT DOCUMENTARY',
    'category': 'News',
    'type': 'hls',
    'url': 'https://rt-rtd.rttv.com/dvr/rtdoc/playlist.m3u8'
  },
  {
    'name': 'PHOENIX INFONEWS',
    'category': 'News',
    'type': 'mpd',
    'url': 'https://linearjitp-playback.astro.com.my/dash-wv/linear/605/default_ott.mpd',
    'drm': {
      'clearkey': {
        'keyId': '33333f38930949b1af65b3361ad80d1d',
        'key': '47383839496f476d796177694b666a37'
      }
    }
  },
  {
    'name': 'RAI NEWS 24',
    'category': 'News',
    'type': 'mpd',
    'url': 'https://viamotionhsi.netplus.ch/live/eds/rainews/browser-dash/rainews.mpd',
    'drm': {
      'clearkey': {
        'keyId': '3f4423fecb09438c8782af0a7bcb2204',
        'key': '184f94303d3357b9a7381ccdeee9b611'
      }
    }
  },
  {
    'name': 'PHOENIX CHINESE',
    'category': 'News',
    'type': 'mpd',
    'url': 'https://linearjitp-playback.astro.com.my/dash-wv/linear/605/default_ott.mpd',
    'drm': {
      'clearkey': {
        'keyId': '33333f38930949b1af65b3361ad80d1d',
        'key': '47383839496f476d796177694b666a37'
      }
    }
  },
  {
    'name': 'HBO',
    'category': 'Movies',
    'type': 'mpd',
    'url': 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_hbohd.mpd',
    'drm': {
      'clearkey': {
        'keyId': 'b21654621230ae21714a5cab52daeb9d',
        'key': '1917f4caf2364e6d9b1507326a85ead6'
      }
    }
  },
  {
    'name': 'CINEMAX 2',
    'category': 'Movies',
    'type': 'mpd',
    'url': 'https://dash2.antik.sk/stream/hisi_cinemax_2/playlist_cbcs.mpd',
    'drm': {
      'clearkey': {
        'keyId': '564b3b1c781043c19242c66e348699c5',
        'key': '971ebbe2d887476398e97c37e0c5c591'
      }
    }
  },
  {
    'name': 'HBO HITS',
    'category': 'Movies',
    'type': 'mpd',
    'url': 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_hbohits.mpd',
    'drm': {
      'clearkey': {
        'keyId': 'a1340a251a5aa63a9b0ea5d9d7f67595',
        'key': 'e6e1173c892f7fbd60a37a76a78935cb'
      }
    }
  },
  {
    'name': 'HBO FAMILY',
    'category': 'HBO Pack',
    'type': 'mpd',
    'url': 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_hbofam.mpd',
    'drm': {
      'clearkey': {
        'keyId': '872910c843294319800d85f9a0940607',
        'key': '534fab4541fef31921dd970c65d51848'
      }
    }
  },
  {
    'name': 'HBO PLUS',
    'category': 'Movies',
    'type': 'mpd',
    'url': 'https://live-atv-cdn.izzigo.tv/5/out/u/dash/HBOPOPHD/default.mpd',
    'drm': {
      'clearkey': {
        'keyId': '1dc30f49888c4652897d9c998aa2cac1',
        'key': '265c00f7fd825ad3e092b56081953b60'
      }
    }
  },
  {
    'name': 'HBO XTREME',
    'category': 'Movies',
    'type': 'mpd',
    'url': 'https://live-atv-cdn.izzigo.tv/5/out/u/dash/HBOXTREMEHD/default.mpd',
    'drm': {
      'clearkey': {
        'keyId': '2e53f8d8a5e94bca8f9a1e16ce67df33',
        'key': 'e8ea3a1ae6892eb76a73dc1b14d216d6'
      }
    }
  },
  {
    'name': 'HBO 2',
    'category': 'Movies',
    'type': 'mpd',
    'url': 'https://live-atv-cdn.izzigo.tv/5/out/u/dash/HBO2HD/default.mpd',
    'drm': {
      'clearkey': {
        'keyId': '45e77e6a8ba767b63cacfdb01ef2ac29',
        'key': '933ae273b166baa8fb203eef1a7adbdf'
      }
    }
  },
  {
    'name': 'HBO SIGNATURE',
    'category': 'Movies',
    'type': 'mpd',
    'url': 'https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/cg_hbosign.mpd',
    'drm': {
      'clearkey': {
        'keyId': 'e31a5a81caff5d07ea2411a571fc2e59',
        'key': '34880f56627c11ee8c990242ac120002'
      }
    }
  },
  {
    'name': 'HBO BOXING',
    'category': 'Movies',
    'type': 'mpd',
    'url': 'https://ottb.live.cf.ww.aiv-cdn.net/pdx-nitro/live/clients/dash/enc/ejmisemcpz/out/v1/9e10d2bc67434f7d95911c3e695ce087/cenc.mpd',
    'drm': {
      'clearkey': {
        'keyId': 'b7299ea0af8945479cd2f287ee7d530e',
        'key': '99bd7c1ff2391244b4e40e08bef1109d'
      }
    }
  },
  {
    'name': 'HBO MUNDI',
    'category': 'Movies',
    'type': 'mpd',
    'url': 'https://live-atv-cdn.izzigo.tv/5/out/u/dash/HBOMUNDIHD/default.mpd',
    'drm': {
      'clearkey': {
        'keyId': 'b4abbee95b69b3e80a0d141272c870db',
        'key': '2f5a3199b26e9b693ae881af7ff864cf'
      }
    }
  },
  {
    'name': 'HBO ZONE',
    'category': 'Movies',
    'type': 'hls',
    'url': 'https://ott.udptv.net/stream/iptv/hbozone/master.m3u8?u=discord.gg/civ4&p=b48a689eecee46d3167cbb669dddcd7f2e9f877b9ed7ee2bcc5bdfd0ca930ffd'
  },
  {
    'name': 'UNIVERSAL TV',
    'category': 'Universal+ Pack',
    'type': 'mpd',
    'url': 'https://live-atv-cdn.izzigo.tv/4/out/u/dash/UNIVERSALCHANNELHD/default.mpd',
    'drm': {
      'clearkey': {
        'keyId': '29e3d2678107f0ab0b35b6537c734f2a',
        'key': '92834ab4a7e1499b90886c5d49220e46'
      }
    }
  },
  {
    'name': 'STUDIO UNIVERSAL',
    'category': 'Universal+ Pack',
    'type': 'mpd',
    'url': 'https://live-atv-cdn.izzigo.tv/2/out/u/dash/UNIVERSALCINEMAHD/default.mpd',
    'drm': {
      'clearkey': {
        'keyId': '2b1443f33c919c89429a21259974a224',
        'key': '63ac662dde310cfb4cc6f9b43b34196d'
      }
    }
  },
  {
    'name': 'UNIVERSAL PREMIERE',
    'category': 'Universal+ Pack',
    'type': 'mpd',
    'url': 'https://live-atv-cdn.izzigo.tv/2/out/u/dash/UNIVERSALPREMIEREHD/default.mpd',
    'drm': {
      'clearkey': {
        'keyId': '31363231393132323937323234333139',
        'key': '31363231393131363337323232353030'
      }
    }
  },
  {
    'name': 'SYFY',
    'category': 'Universal+ Pack',
    'type': 'mpd',
    'url': 'https://cors.jugorder.de/https://linear210-de-dash1-prd-cf.cdn12.skycdp.com/bced/0343427/index.mpd?c3.ri=13627716774460847459',
    'drm': {
      'clearkey': {
        'keyId': '31363735313530343938343234373739',
        'key': '16ecd238c0394592b8d3559c06b1faf5'
      }
    }
  },
  {
    'name': 'UNIVERSAL REALITY',
    'category': 'Universal+ Pack',
    'type': 'mpd',
    'url': 'https://live-atv-cdn.izzigo.tv/2/out/u/dash/UNIVERSALREALITYHD/default.mpd',
    'drm': {
      'clearkey': {
        'keyId': '4708dc633793632adb2287ef37b2dc79',
        'key': '3bd6688b8b44e96201e753224adfc8fb'
      }
    }
  },
  {
    'name': 'UNIVERSAL CRIME',
    'category': 'Universal+ Pack',
    'type': 'mpd',
    'url': 'https://live-atv-cdn.izzigo.tv/2/out/u/dash/UNIVERSALCRIMEHD/default.mpd',
    'drm': {
      'clearkey': {
        'keyId': 'c48c8e48dba24420b5dcef9f5b847b12',
        'key': 'eb65e4b92473ed6e33ff05a56343dbab'
      }
    }
  },
  {
    'name': '13TH STREET',
    'category': 'Universal+ Pack',
    'type': 'mpd',
    'url': 'https://cors.jugorder.de/https://linear210-de-dash1-prd-cf.cdn12.skycdp.com/bced/033341/index.mpd?c3.ri=13629687177772365970',
    'drm': {
      'clearkey': {
        'keyId': '31373031363636343834333733333033',
        'key': '000bd9fa95de8d88a40ba57ab09d400c'
      }
    }
  },
  {
    'name': 'UNIVERSAL COMEDY',
    'category': 'Universal+ Pack',
    'type': 'mpd',
    'url': 'https://live-atv-cdn.izzigo.tv/2/out/u/dash/UNIVERSALCOMEDYHD/default.mpd',
    'drm': {
      'clearkey': {
        'keyId': '273189c214e85b43ac36298d1c422330',
        'key': '0e7e35a07e2c12822316c0dc4873903f'
      }
    }
  },
  {
    'name': 'DREAMWORKS (TAG)',
    'category': 'Universal+ Pack',
    'type': 'mpd',
    'url': 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_dreamworktag.mpd',
    'drm': {
      'clearkey': {
        'keyId': 'd626598c2ab452537509dcb8a86db910',
        'key': 'b712c4ec307300043333a6899a402c10'
      }
    }
  },
  {
    'name': 'AXN',
    'category': 'General Entertainment',
    'type': 'mpd',
    'url': 'https://linearjitp-playback.astro.com.my/dash-wv/linear/700/default_ott.mpd',
    'drm': {
      'clearkey': {
        'keyId': '1ba155e345c4456ba891cbee9b3e1c4c',
        'key': 'b11a040f74a5e81b06b5f771cf1f7567'
      }
    }
  },
  {
    'name': 'COMEDY CENTRAL',
    'category': 'General Entertainment',
    'type': 'mpd',
    'url': 'https://live-atv-cdn.izzigo.tv/2/out/u/dash/COMEDYCENTRALHD/default.mpd',
    'drm': {
      'clearkey': {
        'keyId': '31363231393133313335323234373039',
        'key': '20c884ef8ed26b2762f8b1a78f2d1910'
      }
    }
  },
  {
    'name': 'STAR WORLD',
    'category': 'General Entertainment',
    'type': 'mpd',
    'url': 'https://uselector.cdn.intigral-ott.net/STW/STW.isml/manifest.mpd',
    'drm': {
      'clearkey': {
        'keyId': '96c5ef69479732ae734f962748c19729',
        'key': 'ad1f003b4f0b31b75ea4593844435600'
      }
    }
  },
  {
    'name': 'FX',
    'category': 'General Entertainment',
    'type': 'hls',
    'url': 'https://tr.live.clarovtrcdn.vtrplay.com/fxhdchi/vxfmt=dp/playlist.m3u8?device_profile=STB_HLS_VCAS_LIVE_HD'
  },
  {
    'name': 'ASTRO SHOWCASE',
    'category': 'General Entertainment',
    'type': 'mpd',
    'url': 'https://linearjitp-playback.astro.com.my/dash-wv/linear/9983/default_ott.mpd',
    'drm': {
      'clearkey': {
        'keyId': '387938463676644f7141503474507435',
        'key': '335511dfdf0d03bc06f1fdead5870b5a'
      }
    }
  },
  {
    'name': 'ANIPLUS',
    'category': 'General Entertainment',
    'type': 'mpd',
    'url': 'https://ott.udptv.net/stream/iptv/aniplus/master.m3u8?u=discord.gg/civ4&p=b48a689eecee46d3167cbb669dddcd7f2e9f877b9ed7ee2bcc5bdfd0ca930ffd',
    'drm': {
      'clearkey': {
        'keyId': '0559c95496d44fadb94105b9176c3579',
        'key': 'bfbcfcb8137dd565a7f4b5ce7800c1f0 '
      }
    }
  },
  {
    'name': 'HITS',
    'category': 'General Entertainment',
    'type': 'mpd',
    'url': 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/hits_hd1.mpd',
    'drm': {
      'clearkey': {
        'keyId': '7ce96e01eee54fb77e5cc4e7b753d6b0',
        'key': 'b4a7b3289eff493d8700becf2e2a1157'
      }
    }
  },
  {
    'name': 'MTV',
    'category': 'General Entertainment',
    'type': 'mpd',
    'url': 'https://viamotionhsi.netplus.ch/live/eds/mtvfrance/browser-dash/mtvfrance.mpd',
    'drm': {
      'clearkey': {
        'keyId': '3551344768323677674c32704a713249',
        'key': '396c467233356c357355497565533536'
      }
    }
  },
  {
    'name': 'ROCK ENTERTAINMENT',
    'category': 'General Entertainment',
    'type': 'mpd',
    'url': 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_rockentertainment.mpd',
    'drm': {
      'clearkey': {
        'keyId': 'e4ee0cf8ca9746f99af402ca6eed8dc7',
        'key': 'ee86cc9df1984d42ab7f4e4b5d4779c6'
      }
    }
  },
  {
    'name': 'ROCK ACTION',
    'category': 'General Entertainment',
    'type': 'mpd',
    'url': 'https://ottb.live.cf.ww.aiv-cdn.net/dub-nitro/live/clients/dash/enc/crenwml9jf/out/v1/09518f97387b4ea5a69279a1aa1daf0a/cenc.mpd',
    'drm': {
      'clearkey': {
        'keyId': '0f856fa0412b11edb8780242ac120002',
        'key': '4a4f75336e6e30764575624855326937'
      }
    }
  },
  {
    'name': 'HITS NOW',
    'category': 'General Entertainment',
    'type': 'mpd',
    'url': 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/hits_hd1.mpd',
    'drm': {
      'clearkey': {
        'keyId': '7ce96e01eee54fb77e5cc4e7b753d6b0',
        'key': 'b4a7b3289eff493d8700becf2e2a1157'
      }
    }
  },
  {
    'name': 'HITS MOVIES',
    'category': 'General Entertainment',
    'type': 'mpd',
    'url': 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/hits_hd1.mpd',
    'drm': {
      'clearkey': {
        'keyId': '7ce96e01eee54fb77e5cc4e7b753d6b0',
        'key': 'b4a7b3289eff493d8700becf2e2a1157'
      }
    }
  },
  {
    'name': 'PARAMOUNT',
    'category': 'General Entertainment',
    'type': 'mpd',
    'url': 'https://live-atv-cdn.izzigo.tv/2/out/u/dash/PARAMOUNTHD/default.mpd',
    'drm': {
      'clearkey': {
        'keyId': 'ca2931211c1a261f082a3a2c4fd9f91b',
        'key': '373648504f5155373054657665783851'
      }
    }
  },
  {
    'name': 'TLC',
    'category': 'General Entertainment',
    'type': 'mpd',
    'url': 'https://ottb.live.cf.ww.aiv-cdn.net/dub-nitro/live/clients/dash/enc/kaq34ndrio/out/v1/a8d9a45706e54ae49a922dc6d9dd151f/cenc.mpd',
    'drm': {
      'clearkey': {
        'keyId': 'bc006e72e9aab57aca8ae75a83e8f20e',
        'key': 'edf1a715de9748638dd2fad75a419af2'
      }
    }
  },
  {
    'name': 'MBC ACTION',
    'category': 'General Entertainment',
    'type': 'mpd',
    'url': 'https://uselector.cdn.intigral-ott.net/MBAH/MBAH.isml/manifest.mpd',
    'drm': {
      'clearkey': {
        'keyId': 'ad1f003b4f0b31b75ea4593844435600',
        'key': '0f8537d8412b11edb8780242ac120002'
      }
    }
  },
  {
    'name': 'MBC MAX',
    'category': 'General Entertainment',
    'type': 'mpd',
    'url': 'https://uselector.cdn.intigral-ott.net/MBMH/MBMH.isml/manifest.mpd',
    'drm': {
      'clearkey': {
        'keyId': '5458f45efedb4d6f8aa6ac76c85b621b',
        'key': '9547f9aead1237c8a3b1bf0a91ed9995'
      }
    }
  },
  {
    'name': 'ADULT SWIM',
    'category': 'General Entertainment',
    'type': 'hls',
    'url': 'https://amg19223-amg19223c12-amgplt0352.playout.now3.amagi.tv/playlist/amg19223-amg19223c12-amgplt0352/playlist.m3u8'
  },
  {
    'name': 'TAP MOVIES',
    'category': 'General Entertainment',
    'type': 'mpd',
    'url': 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_tapmovies_hd1.mpd',
    'drm': {
      'clearkey': {
        'keyId': '273189c214e85b43ac36298d1c422330',
        'key': '0e7e35a07e2c12822316c0dc4873903f'
      }
    }
  },
  {
    'name': 'TAP EDGE',
    'category': 'General Entertainment',
    'type': 'mpd',
    'url': 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_tapactionflix_hd1.mpd',
    'drm': {
      'clearkey': {
        'keyId': '342972045bddbc97f43cc3c841cdc6b9',
        'key': '322d06e9326f4753a7ec0908030c13d8'
      }
    }
  },
  {
    'name': 'WARNER TV',
    'category': 'General Entertainment',
    'type': 'hls',
    'url': 'https://cdn4.skygo.mn/live/disk1/Warner/HLSv3-FTA/Warner.m3u8'
  },
  {
    'name': 'AMC',
    'category': 'General Entertainment',
    'type': 'mpd',
    'url': 'https://live-crave.video.9c9media.com/ab4332c60e19b6629129eeb38a2a6ac6db5df2571721750022187/fe/f/crave/crave2/manifest.mpd',
    'drm': {
      'clearkey': {
        'keyId': '39cebece8b36640f9ba3f248ecfdf86a',
        'key': 'b159847f9af0500738b01e91cf023e30'
      }
    }
  },
  {
    'name': 'THRILL',
    'category': 'General Entertainment',
    'type': 'mpd',
    'url': 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_thrill_sd.mpd',
    'drm': {
      'clearkey': {
        'keyId': '3ab7cff1e63b9efc40aa962023b4b6b8',
        'key': '362202eefc5d9e42eec6450998cce9e8'
      }
    }
  },
  {
    'name': 'HITS MOVIES',
    'category': 'General Entertainment',
    'type': 'mpd',
    'url': 'https://times-ott-live.akamaized.net/moviesnow_wv_drm/index.mpd',
    'drm': {
      'clearkey': {
        'keyId': '40f019b86241d23ef075633fd7f1e927',
        'key': '29767a578aae2eacb284247ccd9eb10'
      }
    }
  },
  {
    'name': 'MNX',
    'category': 'General Entertainment',
    'type': 'mpd',
    'url': 'https://times-ott-live.akamaized.net/mnxhd_wv_drm/index.mpd',
    'drm': {
      'clearkey': {
        'keyId': '4a9bf0cfba1cb4e52de3d458f6fb3a2',
        'key': '29767a578aae2eacb284247ccd9eb10'
      }
    }
  },
  {
    'name': 'MN+',
    'category': 'General Entertainment',
    'type': 'mpd',
    'url': 'https://times-ott-live.akamaized.net/mnplus_wv_drm/index.mpd',
    'drm': {
      'clearkey': {
        'keyId': 'bc9f3a3f7ce7922c3b599e2e0c1f7830',
        'key': '29767a578aae2eacb284247ccd9eb10'
      }
    }
  },
  {
    'name': 'ROMEDY NOW',
    'category': 'General Entertainment',
    'type': 'mpd',
    'url': 'https://times-ott-live.akamaized.net/romedynow_wv_drm/index.mpd',
    'drm': {
      'clearkey': {
        'keyId': 'a82edc340bc73447bac16cdfed0a4c62',
        'key': '29767a578aae2eacb284247ccd9eb10'
      }
    }
  },
  {
    'name': 'CRAVE 1',
    'category': 'General Entertainment',
    'type': 'mpd',
    'url': 'https://live-crave.video.9c9media.com/137c6e2e72e1bf67b82614c7c9b216d6f3a8c8281748505659713/fe/f/crave/crave1/manifest.mpd',
    'drm': {
      'clearkey': {
        'keyId': '4a107945066f45a9af2c32ea88be60f4',
        'key': 'ddb99755e0bebd98c92c7eab974bf161'
      }
    }
  },
  {
    'name': 'CRAVE 2',
    'category': 'General Entertainment',
    'type': 'mpd',
    'url': 'https://live-crave.video.9c9media.com/ab4332c60e19b6629129eeb38a2a6ac6db5df2571721750022187/fe/f/crave/crave2/manifest.mpd',
    'drm': {
      'clearkey': {
        'keyId': '39cebece8b36640f9ba3f248ecfdf86a',
        'key': 'b159847f9af0500738b01e91cf023e30'
      }
    }
  },
  {
    'name': 'CRAVE 3',
    'category': 'General Entertainment',
    'type': 'mpd',
    'url': 'https://live-crave.video.9c9media.com/58def7d65f59ffaf995238981dd0e276d5a8fe8d1748593014588/fe/f/crave/crave3/manifest.mpd',
    'drm': {
      'clearkey': {
        'keyId': '31363231323336323430303533343333',
        'key': '1452d46b8ecd87b38310ce90d4f5209f'
      }
    }
  },
  {
    'name': 'CRAVE 4',
    'category': 'General Entertainment',
    'type': 'mpd',
    'url': 'https://live-crave.video.9c9media.com/c5875a31f178e038f7cc572b1aa0defb996ce7171748593186018/fe/f/crave/crave4/manifest.mpd',
    'drm': {
      'clearkey': {
        'keyId': '397c64e42507d95e5460830918c22a98',
        'key': '09e84fc7ecb71def143cd7e2771f3b35'
      }
    }
  },
  {
    'name': 'DISNEY CHANNEL',
    'category': 'Kids & Family',
    'type': 'mpd',
    'url': 'https://fta3-cdn-flr.visionplus.id/out/v1/fe4d00f07e2f43b789102b84b4d243a9/index.mpd',
    'drm': {
      'clearkey': {
        'keyId': '157e1c841452f36b772c9e782627039a',
        'key': 'daad0aeb165b9a26b706f2a261b8fafe'
      }
    }
  },
  {
    'name': 'DISNEY XD',
    'category': 'Kids & Family',
    'type': 'mpd',
    'url': 'https://fta3-cdn-flr.visionplus.id/out/v1/fe4d00f07e2f43b789102b84b4d243a9/index.mpd',
    'drm': {
      'clearkey': {
        'keyId': '157e1c841452f36b772c9e782627039a',
        'key': 'daad0aeb165b9a26b706f2a261b8fafe'
      }
    }
  },
  {
    'name': 'DISNEY JR',
    'category': 'Kids & Family',
    'type': 'mpd',
    'url': 'https://ottb.live.cf.ww.aiv-cdn.net/dub-nitro/live/clients/dash/enc/jts4tzzv1k/out/v1/8a5b29f7068c415aa371ea95743382e6/cenc.mpd',
    'drm': {
      'clearkey': {
        'keyId': '32d50635bfd05fbf8189a0e3f6c8db09',
        'key': 'ffa7c3ca6020428c919e13b817b7e31b'
      }
    }
  },
  {
    'name': 'CARTOON NETWORK',
    'category': 'Kids & Family',
    'type': 'hls',
    'url': 'https://cdn4.skygo.mn/live/disk1/Cartoon_Network/HLSv3-FTA/Cartoon_Network.m3u8'
  },
  {
    'name': 'CARTOONITO',
    'category': 'Kids & Family',
    'type': 'mpd',
    'url': 'https://fta2-cdn-flr.visionplus.id/out/v1/2e55bc8199044c27b1dbb827af65a04f/index.mpd',
    'drm': {
      'clearkey': {
        'keyId': '6ff29fb2d6b7d825eb06004650a0a4ea',
        'key': '8ab093adabdc343b8734b7ecf0aea11a'
      }
    }
  },
  {
    'name': 'BOOMERANG',
    'category': 'Kids & Family',
    'type': 'mpd',
    'url': 'https://fl1.moveonjoy.com/BOOMERANG/manifest.mpd',
    'drm': {
      'clearkey': {
        'keyId': '413a968a306c4f938f8303e9114d2e1b',
        'key': '342972045bddbc97f43cc3c841cdc6b9'
      }
    }
  },
  {
    'name': 'NICKELODEON',
    'category': 'Kids & Family',
    'type': 'mpd',
    'url': 'https://d14c00opfjb50c.cloudfront.net/out/v1/0fa4eb67579d41cca4ed146c93aa855f/index.mpd',
    'drm': {
      'clearkey': {
        'keyId': '92b162b0b1d0dbb1e401f5845b4ce109',
        'key': '15b830e0b73b0b8ef99786121997d5f5'
      }
    }
  },
  {
    'name': 'NICK JR',
    'category': 'Kids & Family',
    'type': 'mpd',
    'url': 'https://fta1-cdn-flr.visionplus.id/out/v1/dc63bd198bc44193b570e0567ff5b22c/index.mpd',
    'drm': {
      'clearkey': {
        'keyId': '361197805d0149c29801946cf2dde67c',
        'key': '3de28411cf08a64ea935b9578f6d0edd'
      }
    }
  },
  {
    'name': 'NICK TOONS',
    'category': 'Kids & Family',
    'type': 'mpd',
    'url': 'https://fta3-cdn-flr.visionplus.id/out/v1/bde0a6d8d3fd4d77ae5093ad2e6699dc/index.mpd',
    'drm': {
      'clearkey': {
        'keyId': '227ffaf09bec4a889e0e0988704d52a2',
        'key': 'bb3e4bfa1821d2bdc25c9a0970e4e3b8'
      }
    }
  },
  {
    'name': 'DREAMWORKS CHANNEL',
    'category': 'Kids & Family',
    'type': 'mpd',
    'url': 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_dreamworks_hd1.mpd',
    'drm': {
      'clearkey': {
        'keyId': '4ab9645a2a0a47edbd65e8479c2b9669',
        'key': '90cc957ead3f42e98b46d14e8c4b08de'
      }
    }
  },
  {
    'name': 'DISCOVERY KIDS',
    'category': 'Kids & Family',
    'type': 'mpd',
    'url': 'https://live-atv-cdn.izzigo.tv/1/out/u/dash/DISCOVERYKIDSHD/default.mpd',
    'drm': {
      'clearkey': {
        'keyId': '07c7f996b1734ea288641a68e1cfdc4d',
        'key': 'ae26845bd33038a9c0774a0981007294'
      }
    }
  },
  {
    'name': 'CBEEBIES',
    'category': 'Kids & Family',
    'type': 'mpd',
    'url': 'https://ottb.live.cf.ww.aiv-cdn.net/dub-nitro/live/clients/dash/enc/xfixnh8glr/out/v1/7bd3f3b9e3f94d15bc0a52878c067d60/cenc.mpd',
    'drm': {
      'clearkey': {
        'keyId': 'ad2371259d34404cb89d54a4dc88dcd3',
        'key': '39c175581e237eff9559607eb9b23c10'
      }
    }
  },
  {
    'name': 'ZOOMOO',
    'category': 'Kids & Family',
    'type': 'hls',
    'url': 'https://amg01553-blueantmediaasi-zoomoonz-samsungnz-rdufn.amagi.tv/playlist/amg01553-blueantmediaasi-zoomoonz-samsungnz/playlist.m3u8'
  },
  {
    'name': 'JIMJAM',
    'category': 'Kids & Family',
    'type': 'mpd',
    'url': 'https://dash2.antik.sk/stream/hisi_jimjam/playlist_cbcs.mpd',
    'drm': {
      'clearkey': {
        'keyId': '5769730ffbdc4b2fd8945929d9ace063',
        'key': 'aa00f320f06247dcaf8e3cea1fb07f44'
      }
    }
  },
  {
    'name': 'MOONBUG',
    'category': 'Kids & Family',
    'type': 'mpd',
    'url': 'https://linearjitp-playback.astro.com.my/dash-wv/linear/5110/default_ott.mpd',
    'drm': {
      'clearkey': {
        'keyId': 'ce57c9490bd772b390d78b9fedaf8d36',
        'key': 'fdcaf4c23899b53dee1ade954f81accd'
      }
    }
  },
  {
    'name': 'PBS KIDS',
    'category': 'Kids & Family',
    'type': 'mpd',
    'url': 'https://linearjitp-playback.astro.com.my/dash-wv/linear/5096/default_ott.mpd',
    'drm': {
      'clearkey': {
        'keyId': '673478506852336979544a4f38475479',
        'key': '51646d5e500648c6a4e319c7861e963f'
      }
    }
  },
  {
    'name': 'BABYFIRST',
    'category': 'Kids & Family',
    'type': 'hls',
    'url': 'https://streams2.sofast.tv/ptnr-yupptv/title-BABYFIRST-ENG_YuppTV/v1/master/611d79b11b77e2f571934fd80ca1413453772ac7/c8d16110-566c-4e95-a1df-55d175e9e201/manifest.m3u8'
  },
  {
    'name': 'DA VINCI',
    'category': 'Kids & Family',
    'type': 'mpd',
    'url': 'https://d2vnbkvjbims7j.cloudfront.net/containerA/LTN/playlist.m3u8',
    'drm': {
      'clearkey': {
        'keyId': '5713350KvZGUi',
        'key': '46MtPTaV'
      }
    }
  },
  {
    'name': 'GALAXY',
    'category': 'International',
    'type': 'mpd',
    'url': 'https://linearjitp-playback.astro.com.my/dash-wv/linear/5017/default_ott.mpd',
    'drm': {
      'clearkey': {
        'keyId': '6039ec9b213aca913821677a28bd78ae',
        'key': '31363735303934383833333131363533'
      }
    }
  },
  {
    'name': 'ANIME X HIDIVE',
    'category': 'International',
    'type': 'hls',
    'url': 'https://amc-anime-x-hidive-1-us.tablo.wurl.tv/playlist.m3u8'
  },
  {
    'name': 'AT-X',
    'category': 'International',
    'type': 'hls',
    'url': 'https://vthanh.utako.moe/AT-X/tracks-v1a1/mono.m3u8'
  },
  {
    'name': 'BS11',
    'category': 'International',
    'type': 'hls',
    'url': 'https://vthanh.utako.moe/BS11/tracks-v1a1/mono.m3u8'
  },
  {
    'name': 'DLIFE',
    'category': 'International',
    'type': 'hls',
    'url': 'https://vthanh.utako.moe/dlife/tracks-v1a1/mono.m3u8'
  },
  {
    'name': 'GALAXY PREMIUM',
    'category': 'International',
    'type': 'mpd',
    'url': 'https://linearjitp-playback.astro.com.my/dash-wv/linear/5018/default_ott.mpd',
    'drm': {
      'clearkey': {
        'keyId': '0e2a2117d705613542618f58bf26fc8e',
        'key': '31e752b441bd2972f2b98a4b1bc1c7a1'
      }
    }
  },
  {
    'name': 'TVB JADE',
    'category': 'International',
    'type': 'mpd',
    'url': 'https://linearjitp-playback.astro.com.my/dash-wv/linear/5052/default_ott.mpd',
    'drm': {
      'clearkey': {
        'keyId': '396c467233356c357355497565533536',
        'key': '1a022fb33ad3de4d4579b04966551488'
      }
    }
  },
  {
    'name': 'KBS WORLD',
    'category': 'International',
    'type': 'hls',
    'url': 'https://amdlive-ch01-ctnd-com.akamaized.net/arirang_1ch/smil:arirang_1ch.smil/playlist.m3u8'
  },
  {
    'name': 'ARIRANG',
    'category': 'International',
    'type': 'hls',
    'url': 'https://amdlive-ch01-ctnd-com.akamaized.net/arirang_1ch/smil:arirang_1ch.smil/playlist.m3u8'
  },
  {
    'name': 'NHK WORLD PREMIUM',
    'category': 'International',
    'type': 'mpd',
    'url': 'https://linearjitp-playback.astro.com.my/dash-wv/linear/5054/default_ott.mpd',
    'drm': {
      'clearkey': {
        'keyId': '3f59355e15eed1bb219ea1687d55cfbb',
        'key': 'bda5f7bbc1e44096f779a0619fe9881f'
      }
    }
  },
  {
    'name': 'NHK BS',
    'category': 'International',
    'type': 'hls',
    'url': 'https://vthanh.utako.moe/NHK_BS/tracks-v1a1/mono.m3u8'
  },
  {
    'name': 'NHK BSP4K',
    'category': 'International',
    'type': 'hls',
    'url': 'https://vthanh.utako.moe/bsp4k/tracks-v1a1/mono.m3u8'
  },
  {
    'name': 'BS10',
    'category': 'International',
    'type': 'hls',
    'url': 'https://vthanh.utako.moe/bs10/tracks-v1a1/mono.m3u8'
  },
  {
    'name': 'BS10 STAR CHANNEL',
    'category': 'International',
    'type': 'hls',
    'url': 'https://vthanh.utako.moe/bs10_star/tracks-v1a1/mono.m3u8'
  },
  {
    'name': 'BS12 TWELLV',
    'category': 'International',
    'type': 'hls',
    'url': 'https://vthanh.utako.moe/bs12/tracks-v1a1/mono.m3u8'
  },
  {
    'name': 'ONE',
    'category': 'International',
    'type': 'mpd',
    'url': 'https://fta1-cdn-flr.visionplus.id/out/v1/c70975aaa68d47f2a38799e6730a7816/index.mpd',
    'drm': {
      'clearkey': {
        'keyId': 'd8fe398c79065173fa9788f226056510',
        'key': '92d34a84fae8e54de0a829629941be10'
      }
    }
  },
  {
    'name': 'OCN MOVIES 2',
    'category': 'International',
    'type': 'mpd',
    'url': 'https://ocnmovies2-drm2-mcdn.tving.com/ocnmovies2_drm/live5000.smil/manifest.mpd',
    'drm': {
      'clearkey': {
        'keyId': '900c43f0e02742dd854148b7a75abbec',
        'key': '22fc5baf47ae3b6322bc244206bbb210'
      }
    }
  },
  {
    'name': 'IQIYI',
    'category': 'International',
    'type': 'mpd',
    'url': 'https://bunproxy.azurewebsites.net/api/001/2/ch00000090990000001250/manifest.mpd?virtualDomain=001.live_hls.zte.com',
    'drm': {
      'clearkey': {
        'keyId': '31363235373230343031373839383832:',
        'key': '27d2061c0972931e18d43fbb3301c6f0'
      }
    }
  },
  {
    'name': 'WOWOW LIVE',
    'category': 'International',
    'type': 'hls',
    'url': 'https://vthanh.utako.moe/wlive/tracks-v1a1/mono.m3u8'
  },
  {
    'name': 'WOWOW PRIME',
    'category': 'International',
    'type': 'hls',
    'url': 'https://vthanh.utako.moe/wprime/tracks-v1a1/mono.m3u8'
  },
  {
    'name': 'WOWOW CINEMA',
    'category': 'International',
    'type': 'hls',
    'url': 'https://vthanh.utako.moe/wcinema/tracks-v1a1/mono.m3u8'
  },
  {
    'name': 'FUJI TV ONE',
    'category': 'International',
    'type': 'hls',
    'url': 'https://vthanh.utako.moe/fuji_one/tracks-v1a1/mono.m3u8'
  },
  {
    'name': 'FUJI TV NEXT',
    'category': 'International',
    'type': 'hls',
    'url': 'https://vthanh.utako.moe/fuji_next/tracks-v1a1/mono.m3u8'
  },
  {
    'name': 'FUJI TV TWO',
    'category': 'International',
    'type': 'hls',
    'url': 'https://vthanh.utako.moe/fuji_two/tracks-v1a1/mono.m3u8'
  },
  {
    'name': 'TBS CHANNEL 1',
    'category': 'International',
    'type': 'hls',
    'url': 'https://vthanh.utako.moe/tbsch1/tracks-v1a1/mono.m3u8'
  },
  {
    'name': 'TBS CHANNEL 2',
    'category': 'International',
    'type': 'hls',
    'url': 'https://vthanh.utako.moe/tbsch2/tracks-v1a1/mono.m3u8'
  },
  {
    'name': 'MONDO TV',
    'category': 'International',
    'type': 'hls',
    'url': 'https://vthanh.utako.moe/mondo/tracks-v1a1/mono.m3u8'
  },
  {
    'name': 'TV ASAHI CHANNEL 1',
    'category': 'International',
    'type': 'hls',
    'url': 'https://vthanh.utako.moe/ex_ch1/tracks-v1a1/mono.m3u8'
  },
  {
    'name': 'TV ASAHI CHANNEL 2',
    'category': 'International',
    'type': 'hls',
    'url': 'https://vthanh.utako.moe/ex_ch2/tracks-v1a1/mono.m3u8'
  },
  {
    'name': 'CHANNEL NECO',
    'category': 'International',
    'type': 'hls',
    'url': 'https://vthanh.utako.moe/neco/tracks-v1a1/mono.m3u8'
  },
  {
    'name': 'NIHON EIGA SENMON',
    'category': 'International',
    'type': 'hls',
    'url': 'https://vthanh.utako.moe/nihon_eiga/tracks-v1a1/mono.m3u8'
  },
  {
    'name': 'FAMILY GEKIJYO',
    'category': 'International',
    'type': 'hls',
    'url': 'https://vthanh.utako.moe/familygeki/tracks-v1a1/mono.m3u8'
  },
  {
    'name': 'TOEI CHANNEL',
    'category': 'International',
    'type': 'hls',
    'url': 'https://vthanh.utako.moe/toei/tracks-v1a1/mono.m3u8'
  },
  {
    'name': 'TVN PREMIUM',
    'category': 'International',
    'type': 'mpd',
    'url': 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_tvnpre.mpd',
    'drm': {
      'clearkey': {
        'keyId': 'e1bde543e8a140b38d3f84ace746553e',
        'key': 'd19d330de1f428d1902bc1629a65c0bf'
      }
    }
  },
  {
    'name': 'OCN MOVIES',
    'category': 'International',
    'type': 'mpd',
    'url': 'https://ocnmovies-drm2-mcdn.tving.com/ocnmovies_drm/live5000.smil/manifest.mpd',
    'drm': {
      'clearkey': {
        'keyId': '817839de27764deb879c65c571c19226',
        'key': '3bf6530a599b706c8b9319e7011d1020'
      }
    }
  },
  {
    'name': 'LOTUS MACAU',
    'category': 'International',
    'type': 'mpd',
    'url': 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/lotusmacau_prd.mpd',
    'drm': {
      'clearkey': {
        'keyId': '02a02bce7a3c518386e0da4e5ec0188d',
        'key': '0fca71cf91b3c4931ad3cf66c631c24c'
      }
    }
  },
  {
    'name': 'CELESTIAL MOVIES',
    'category': 'International',
    'type': 'mpd',
    'url': 'https://linearjitp-playback.astro.com.my/dash-wv/linear/506/default_ott.mpd',
    'drm': {
      'clearkey': {
        'keyId': 'c5c1ba26907291afec11a9a78d513410',
        'key': 'dcbdaaa6662d4188bdf97f9f0ca5e830'
      }
    }
  },
  {
    'name': 'CCM',
    'category': 'International',
    'type': 'mpd',
    'url': 'https://linearjitp-playback.astro.com.my/dash-wv/linear/5093/default_ott.mpd',
    'drm': {
      'clearkey': {
        'keyId': '38694e34324d543478316b7455753437',
        'key': '4cbc004d8c444f9f996db42059ce8178'
      }
    }
  },
  {
    'name': 'TVBS',
    'category': 'International',
    'type': 'mpd',
    'url': 'https://linearjitp-playback.astro.com.my/dash-wv/linear/5094/default_ott.mpd',
    'drm': {
      'clearkey': {
        'keyId': '3161c6c45076419fbbc333c277a22f65',
        'key': 'b712c4ec307300043333a6899a402c10'
      }
    }
  },
  {
    'name': 'DRAGON TV',
    'category': 'International',
    'type': 'mpd',
    'url': 'https://atemeshield1-voe.sysln.id/live/eds/DragonTV/mpd/DragonTV.mpd',
    'drm': {
      'clearkey': {
        'keyId': '620e51b82596475517a27aa425c52280',
        'key': '31363232313037353439323837363235'
      }
    }
  },
  {
    'name': 'TV5MONDE ASIE',
    'category': 'International',
    'type': 'mpd',
    'url': 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_tv5_monde.mpd',
    'drm': {
      'clearkey': {
        'keyId': '7a8ed20a4958398677e2c9ccd5a53a00',
        'key': 'a7108d9a6cfcc1b7939eb111daf09ab3'
      }
    }
  },
  {
    'name': 'TV5MONDE STYLE',
    'category': 'International',
    'type': 'hls',
    'url': 'https://ott.tv5monde.com/Content/HLS/Live/channel(style1)/variant.m3u8'
  },
  {
    'name': 'XING KONG',
    'category': 'International',
    'type': 'mpd',
    'url': 'https://fta3-cdn-flr.visionplus.id/out/v1/a1dc0cb4b4f14a3094088b16366bbeed/index.mpd',
    'drm': {
      'clearkey': {
        'keyId': '04fb6c48c6b4498cb9d3b9ede0d48db7',
        'key': '7e99f734748d098cbfa2f7bde968dd44'
      }
    }
  },
  {
    'name': 'TVB CLASSIC',
    'category': 'International',
    'type': 'mpd',
    'url': 'https://linearjitp-playback.astro.com.my/dash-wv/linear/5075/default_ott.mpd',
    'drm': {
      'clearkey': {
        'keyId': 'f3047fc13d454dacb6db4207ee79d3d3',
        'key': '0b5868bc161634a033a19a20f3f3595d'
      }
    }
  },
  {
    'name': 'TVB ENTERTAINMENT NEWS',
    'category': 'International',
    'type': 'mpd',
    'url': 'https://linearjitp-playback.astro.com.my/dash-wv/linear/5067/default_ott.mpd',
    'drm': {
      'clearkey': {
        'keyId': 'bcf36f412fa3d735cea04f7443fbf77c',
        'key': '65c32ada65548203a3683d5d37dd3a06'
      }
    }
  },
  {
    'name': 'Hunan TV',
    'category': 'International',
    'type': 'mpd',
    'url': 'https://atemeshield1-voe.sysln.id/live/eds/HunanTV/mpd/HunanTV.mpd',
    'drm': {
      'clearkey': {
        'keyId': '5bfb374d644703550f0637532bca0491',
        'key': '19cf49b59d662baf0359682aa503749f'
      }
    }
  },
  {
    'name': 'DA VINCI',
    'category': 'International',
    'type': 'mpd',
    'url': 'https://d2vnbkvjbims7j.cloudfront.net/containerA/LTN/playlist.m3u8',
    'drm': {
      'clearkey': {
        'keyId': '5713350KvZGUi',
        'key': '46MtPTaV'
      }
    }
  },
  {
    'name': 'DAS ERSTE',
    'category': 'International',
    'type': 'mpd',
    'url': 'https://viamotionhsi.netplus.ch/live/eds/daserstehd/browser-dash/daserstehd.mpd',
    'drm': {
      'clearkey': {
        'keyId': 'edf1a715de9748638dd2fad75a419af2',
        'key': '3567746e30367a714e3346344f415947'
      }
    }
  },
  {
    'name': '3SAT',
    'category': 'International',
    'type': 'mpd',
    'url': 'https://viamotionhsi.netplus.ch/live/eds/3sathd/browser-dash/3sathd.mpd'
  },
  {
    'name': 'VOX',
    'category': 'International',
    'type': 'mpd',
    'url': 'https://viamotionhsi.netplus.ch/live/eds/vox/browser-dash/vox.mpd'
  },
  {
    'name': 'TMC',
    'category': 'International',
    'type': 'mpd',
    'url': 'https://cors.jugorder.de/https://tr.live.cdn.cgates.lt/live/dash/561206/index.mpd',
    'drm': {
      'clearkey': {
        'keyId': 'dac605bc197e442c93f4f08595a95100',
        'key': 'd4f05ce56c5231b7cdf53455bea58621'
      }
    }
  },
  {
    'name': 'RTL',
    'category': 'International',
    'type': 'mpd',
    'url': 'https://viamotionhsi.netplus.ch/live/eds/rtl/browser-dash/rtl.mpd'
  },
  {
    'name': 'ORF 1',
    'category': 'International',
    'type': 'mpd',
    'url': 'https://cachehsi1a.netplus.ch/live/eds/orf1/browser-dash/orf1.mpd'
  },
  {
    'name': 'TVB XING HE',
    'category': 'International',
    'type': 'mpd',
    'url': 'https://linearjitp-playback.astro.com.my/dash-wv/linear/5060/default_ott.mpd',
    'drm': {
      'clearkey': {
        'keyId': '90e2e491c850a49a5ab21bb6fa6b4d24',
        'key': 'fa806baddc384a168eff4f95f06ad289'
      }
    }
  },
  {
    'name': 'METRO CHANNEL',
    'category': 'International',
    'type': 'mpd',
    'url': 'https://linearjitp-playback.astro.com.my/dash-wv/linear/5066/default_ott.mpd',
    'drm': {
      'clearkey': {
        'keyId': 'b336c8c6bb249b1a5f89dace8d9889e5',
        'key': '34c1715a9fd24e7d8497da043669ad66'
      }
    }
  },
  {
    'name': 'CHALLENGES',
    'category': 'International',
    'type': 'mpd',
    'url': 'https://linearjitp-playback.astro.com.my/dash-wv/linear/5171/default_ott.mpd',
    'drm': {
      'clearkey': {
        'keyId': '33333f38930949b1af65b3361ad80d1d',
        'key': '47383839496f476d796177694b666a37'
      }
    }
  },
  {
    'name': 'TF1',
    'category': 'International',
    'type': 'mpd',
    'url': 'https://viamotionhsi.netplus.ch/live/eds/tf1hd/browser-dash/tf1hd.mpd'
  },
  {
    'name': 'TCM CINEMA',
    'category': 'International',
    'type': 'mpd',
    'url': 'https://viamotionhsi.netplus.ch/live/eds/tcm/browser-dash/tcm.mpd',
    'drm': {
      'clearkey': {
        'keyId': '42d7a462640c6748371d39f23e4a18c3',
        'key': 'a7724b7ca2604c33bb2e963a0319968a'
      }
    }
  },
  {
    'name': 'ASIAN HITS',
    'category': 'International',
    'type': 'mpd',
    'url': 'https://linearjitp-playback.astro.com.my/dash-wv/linear/2305/default_ott.mpd',
    'drm': {
      'clearkey': {
        'keyId': 'adf163c6c1729e6f77668d4e49f32352',
        'key': '534fab4541fef31921dd970c65d51848'
      }
    }
  },
  {
    'name': 'ASIAN FOOD NETWORK',
    'category': 'International',
    'type': 'mpd',
    'url': 'https://linearjitp-playback.astro.com.my/dash-wv/linear/2306/default_ott.mpd',
    'drm': {
      'clearkey': {
        'keyId': '872910c843294319800d85f9a0940607',
        'key': '534fab4541fef31921dd970c65d51848'
      }
    }
  },
  {
    'name': 'LIVING ASIA CHANNEL',
    'category': 'International',
    'type': 'mpd',
    'url': 'https://linearjitp-playback.astro.com.my/dash-wv/linear/2702/default_ott.mpd',
    'drm': {
      'clearkey': {
        'keyId': '31363735313530343938343234373739',
        'key': '47c093e0c9fd4f80839a0337da3dd876'
      }
    }
  },
  {
    'name': 'BBC LIFESTYLE',
    'category': 'Factual & Lifestyle',
    'type': 'mpd',
    'url': 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_bbclifestyle.mpd',
    'drm': {
      'clearkey': {
        'keyId': '39c175581e237eff9559607eb9b23c10',
        'key': '3a908a5d38a9c496ced27faa6bf5ff8e'
      }
    }
  },
  {
    'name': 'DISCOVERY CHANNEL',
    'category': 'Factual & Lifestyle',
    'type': 'mpd',
    'url': 'https://ottb.live.cf.ww.aiv-cdn.net/dub-nitro/live/clients/dash/enc/cmtyd9kpfe/out/v1/813bba04214e4f4dab57f0129365635a/cenc.mpd',
    'drm': {
      'clearkey': {
        'keyId': '31363331363737343637333533323837',
        'key': 'cacc2086a1ac693d6173084b942e751d'
      }
    }
  },
  {
    'name': 'DISCOVERY TURBO',
    'category': 'Factual & Lifestyle',
    'type': 'mpd',
    'url': 'https://d1g8wgjurz8via.cloudfront.net/bpk-tv/Discoveryturbo2/default/manifest.mpd',
    'drm': {
      'clearkey': {
        'keyId': '34ce95b60c424e169619816c5181aded',
        'key': '4b80724d0ef86bcb2c21f7999d67739d'
      }
    }
  },
  {
    'name': 'DISCOVERY SCIENCE',
    'category': 'Factual & Lifestyle',
    'type': 'mpd',
    'url': 'https://d1g8wgjurz8via.cloudfront.net/bpk-tv/Discoveryscience2/default/manifest.mpd',
    'drm': {
      'clearkey': {
        'keyId': '33e387157a9442a8b9f1d2b82142e030',
        'key': 'dbf8a0a306a64525ba3012fd225370c0'
      }
    }
  },
  {
    'name': 'INVESTIGATION DISCOVERY',
    'category': 'Factual & Lifestyle',
    'type': 'mpd',
    'url': 'https://linearjitp-playback.astro.com.my/dash-wv/linear/2111/default_ott.mpd',
    'drm': {
      'clearkey': {
        'keyId': '4bf8206d8601d293f9c62c93f0b22a10',
        'key': 'db1ee2b8994b91aac65049ef3e493787'
      }
    }
  },
  {
    'name': 'NATIONAL GEOGRAPHIC',
    'category': 'Factual & Lifestyle',
    'type': 'mpd',
    'url': 'https://linearjitp-playback.astro.com.my/dash-wv/linear/2406/default_ott.mpd',
    'drm': {
      'clearkey': {
        'keyId': 'bb3e4bfa1821d2bdc25c9a0970e4e3b8',
        'key': 'be2a096403346bc1d0bb0f812822bb62'
      }
    }
  },
  {
    'name': 'NATIONAL GEOGRAPHIC WILD',
    'category': 'Factual & Lifestyle',
    'type': 'mpd',
    'url': 'https://linearjitp-playback.astro.com.my/dash-wv/linear/2407/default_ott.mpd',
    'drm': {
      'clearkey': {
        'keyId': 'ea4d51ade01bbf3946e0de973051ba10',
        'key': '21c8b35e236113b18c64d4b1712a21ef'
      }
    }
  },
  {
    'name': 'BBC EARTH',
    'category': 'Factual & Lifestyle',
    'type': 'mpd',
    'url': 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_bbcearth_hd1.mpd',
    'drm': {
      'clearkey': {
        'keyId': '8ab2332442854e62b0018eec3ee58484',
        'key': '768be56ebc93f207be05ac6f07ebf0da'
      }
    }
  },
  {
    'name': 'KNOWLEDGE CHANNEL',
    'category': 'Factual & Lifestyle',
    'type': 'mpd',
    'url': 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_knowledgechannel.mpd',
    'drm': {
      'clearkey': {
        'keyId': '705bab5e645b6d7c95588b29520f8110',
        'key': 'fa629c3640ce533c755509f67f75e610'
      }
    }
  },
  {
    'name': 'TRAVEL CHANNEL',
    'category': 'Factual & Lifestyle',
    'type': 'mpd',
    'url': 'https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/travel_channel_sd.mpd',
    'drm': {
      'clearkey': {
        'keyId': '367662564c69425947353948374f4553',
        'key': 'c7b3852d9c84418f942923e41c31e633'
      }
    }
  },
  {
    'name': 'LOVE NATURE',
    'category': 'Factual & Lifestyle',
    'type': 'mpd',
    'url': 'https://bunproxy.azurewebsites.net/api/001/2/ch00000090990000001267/manifest.mpd?virtualDomain=001.live_hls.zte.com',
    'drm': {
      'clearkey': {
        'keyId': '31363334313133373731323334343436',
        'key': '4b80724d0ef86bcb2c21f7999d67739d'
      }
    }
  },
  {
    'name': 'OUTDOOR CHANNEL',
    'category': 'Factual & Lifestyle',
    'type': 'hls',
    'url': 'https://cdn-apse1-prod.tsv2.amagi.tv/linear/amg00718-outdoorchannela-outdoortvnz-samsungnz/playlist.m3u8'
  },
  {
    'name': 'E!',
    'category': 'Factual & Lifestyle',
    'type': 'mpd',
    'url': 'https://fl1.moveonjoy.com/E_ENTERTAINMENT_TELEVISION/manifest.mpd',
    'drm': {
      'clearkey': {
        'keyId': '3ca2eb502e8746168c77ad9a506bb293',
        'key': 'a7724b7ca2604c33bb2e963a0319968a'
      }
    }
  },
  {
    'name': 'LIFETIME',
    'category': 'Factual & Lifestyle',
    'type': 'mpd',
    'url': 'https://linearjitp-playback.astro.com.my/dash-wv/linear/2303/default_ott.mpd',
    'drm': {
      'clearkey': {
        'keyId': '183b3eafa4c82e68f74c4244d54906b0',
        'key': '81352bc47ec1177b321ee65ac1be7f10'
      }
    }
  },
  {
    'name': 'GLOBAL TREKKER',
    'category': 'Factual & Lifestyle',
    'type': 'hls',
    'url': 'https://bunproxy.azurewebsites.net/api/001/2/ch00000090990000001183/manifest.mpd?virtualDomain=001.live_hls.zte.com'
  },
  {
    'name': 'MTV LIVE',
    'category': 'Music',
    'type': 'mpd',
    'url': 'https://live-atv-cdn.izzigo.tv/4/out/u/dash/MTVLIVEHD/default.mpd',
    'drm': {
      'clearkey': {
        'keyId': '47c03f29f04747d2a298c0ad63f3b2c1',
        'key': '6848ef60575579bf4d415db1032153ed'
      }
    }
  },
  {
    'name': 'MTV HITS',
    'category': 'Music',
    'type': 'mpd',
    'url': 'https://live-atv-cdn.izzigo.tv/4/out/u/dash/MTVHITSSD/default.mpd',
    'drm': {
      'clearkey': {
        'keyId': 'a7242a7026ff45609114ee1f3beb34dc',
        'key': '9bfeb5068725617dbad6338473da6d10'
      }
    }
  },
  {
    'name': 'MTV 80S',
    'category': 'Music',
    'type': 'mpd',
    'url': 'https://live-atv-cdn.izzigo.tv/4/out/u/dash/MTV80SSD/default.mpd',
    'drm': {
      'clearkey': {
        'keyId': '37fdee8b6eef5c96001e8c6fc47bfc08',
        'key': '998f1294b122bbf1a96c1ddc0cbb229f'
      }
    }
  },
  {
    'name': 'CLUB MTV',
    'category': 'Music',
    'type': 'mpd',
    'url': 'https://live-atv-cdn.izzigo.tv/4/out/u/dash/CLUBMTVSD/default.mpd',
    'drm': {
      'clearkey': {
        'keyId': '0d067e22a727ae9f264478f5c2ed903a',
        'key': 'c3f2aa420b8908ab8761571c01899460'
      }
    }
  },
  {
    'name': 'MTV 00S',
    'category': 'Music',
    'type': 'mpd',
    'url': 'https://live-atv-cdn.izzigo.tv/3/out/u/dash/MTV00HD/default.mpd',
    'drm': {
      'clearkey': {
        'keyId': '472aa631b1e671070a4bf198f43da0c7',
        'key': '1a022fb33ad3de4d4579b04966551488'
      }
    }
  },
  {
    'name': 'NOW 70S',
    'category': 'Music',
    'type': 'mpd',
    'url': 'https://amg19223-amg19223c12-amgplt0352.playout.now3.amagi.tv/playlist/amg19223-amg19223c12-amgplt0352/playlist.m3u8',
    'drm': {
      'clearkey': {
        'keyId': '602827a870d49862d1a23f2912957b4c',
        'key': '6700a5d93203417b8585f7de7dd1a09b'
      }
    }
  },
  {
    'name': 'NOW 80S',
    'category': 'Music',
    'type': 'mpd',
    'url': 'https://amg19223-amg19223c12-amgplt0352.playout.now3.amagi.tv/playlist/amg19223-amg19223c12-amgplt0352/playlist.m3u8',
    'drm': {
      'clearkey': {
        'keyId': '602827a870d49862d1a23f2912957b4c',
        'key': '6700a5d93203417b8585f7de7dd1a09b'
      }
    }
  },
  {
    'name': 'NOW ROCK',
    'category': 'Music',
    'type': 'mpd',
    'url': 'https://amg19223-amg19223c12-amgplt0352.playout.now3.amagi.tv/playlist/amg19223-amg19223c12-amgplt0352/playlist.m3u8',
    'drm': {
      'clearkey': {
        'keyId': '602827a870d49862d1a23f2912957b4c',
        'key': '6700a5d93203417b8585f7de7dd1a09b'
      }
    }
  },
  {
    'name': 'SPACE SHOWER TV',
    'category': 'Music',
    'type': 'hls',
    'url': 'https://vthanh.utako.moe/spaceshower/tracks-v1a1/mono.m3u8'
  },
  {
    'name': 'TRACE URBAN',
    'category': 'Music',
    'type': 'hls',
    'url': 'https://cdn-apse1-prod.tsv2.amagi.tv/linear/amg01076-lightningintern-traceurban-samsungnz/playlist.m3u8'
  },
  {
    'name': 'STINGRAY ICONCERTS',
    'category': 'Music',
    'type': 'hls',
    'url': 'https://lotus.stingray.com/manifest/iconcerts-ico001-montreal/samsungtvplus/master.m3u8'
  },
  {
    'name': 'STINGRAY DJAZZ',
    'category': 'Music',
    'type': 'mpd',
    'url': 'https://lotus.stingray.com/manifest/djazz-djaads-montreal/samsungtvplus/master.m3u8',
    'drm': {
      'clearkey': {
        'keyId': 'db9d0d03592fbe9f4429ef1a82eb47aa',
        'key': 'e1aa4c4daf6222a04f7ae80130495ea1'
      }
    }
  },
  {
    'name': 'STINGRAY CLASSICA',
    'category': 'Music',
    'type': 'hls',
    'url': 'https://lotus.stingray.com/manifest/classica-cla008-montreal/samsungtvplus/master.m3u8'
  },
  {
    'name': 'STINGRAY CMUSIC',
    'category': 'Music',
    'type': 'hls',
    'url': 'https://lotus.stingray.com/manifest/cmusic-cme004-montreal/samsungtvplus/master.m3u8'
  },
  {
    'name': 'MYX',
    'category': 'Music',
    'type': 'mpd',
    'url': 'https://linearjitp-playback.astro.com.my/dash-wv/linear/700/default_ott.mpd',
    'drm': {
      'clearkey': {
        'keyId': '1ba155e345c4456ba891cbee9b3e1c4c',
        'key': 'b11a040f74a5e81b06b5f771cf1f7567'
      }
    }
  },
  {
    'name': 'NEW KPOP',
    'category': 'Music',
    'type': 'hls',
    'url': 'https://fta1-cdn-flr.visionplus.id/out/v1/dd9cfc9ae76a4f8abbaa89708a915e38/index.mpd'
  },
  {
    'name': 'KPOP BY CJ ENM',
    'category': 'Music',
    'type': 'hls',
    'url': 'https://fta1-cdn-flr.visionplus.id/out/v1/dd9cfc9ae76a4f8abbaa89708a915e38/index.mpd'
  },
  {
    'name': 'KPOP TV PLAY',
    'category': 'Music',
    'type': 'hls',
    'url': 'https://giatv.bozztv.com/giatv/giatv-kpoptvplay/kpoptvplay/chunks.m3u8'
  },
  {
    'name': 'PREMIER SPORTS',
    'category': 'Sports',
    'type': 'mpd',
    'url': 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_ps_hd1.mpd',
    'drm': {
      'clearkey': {
        'keyId': '47c03f29f04747d2a298c0ad63f3b2c1',
        'key': '15b830e0b73b0b8ef99786121997d5f5'
      }
    }
  },
  {
    'name': 'PREMIER SPORTS 2',
    'category': 'Sports',
    'type': 'mpd',
    'url': 'https://cors.jugorder.de/https://tr.live.cdn.cgates.lt/live/dash/561306/index.mpd',
    'drm': {
      'clearkey': {
        'keyId': '3dd22058fcb94e3790660d256655663b',
        'key': '227ffaf09bec4a889e0e0988704d52a2'
      }
    }
  },
  {
    'name': 'PREMIER SPORTS ASIA',
    'category': 'Sports',
    'type': 'mpd',
    'url': 'https://cors.jugorder.de/https://tr.live.cdn.cgates.lt/live/dash/561305/index.mpd',
    'drm': {
      'clearkey': {
        'keyId': '1b87070d9fad5dee0a35ff014a2063a7',
        'key': '3dd22058fcb94e3790660d256655663b'
      }
    }
  },
  {
    'name': 'BEIN SPORTS 1',
    'category': 'Sports',
    'type': 'hls',
    'url': 'https://ottb.live.cf.ww.aiv-cdn.net/dub-nitro/live/clients/dash/enc/wu0ibylhtz/out/v1/020953cc1b63428181fa569223470e1a/cenc.mpd'
  },
  {
    'name': 'BEIN SPORTS 2',
    'category': 'Sports',
    'type': 'mpd',
    'url': 'https://ottb.live.cf.ww.aiv-cdn.net/dub-nitro/live/clients/dash/enc/4zkafrcxji/out/v1/810ebca1aff0443da717da4acdeda158/cenc.mpd',
    'drm': {
      'clearkey': {
        'keyId': '11223344556677889900112233445566',
        'key': '4b80724d0ef86bcb2c21f7999d67739d'
      }
    }
  },
  {
    'name': 'BEIN SPORTS 3',
    'category': 'Sports',
    'type': 'mpd',
    'url': 'https://ottb.live.cf.ww.aiv-cdn.net/dub-nitro/live/clients/dash/enc/k0duzgfejg/out/v1/70a50b1bda944628b8e7e66ab4069419/cenc.mpd',
    'drm': {
      'clearkey': {
        'keyId': '83e7dc469eb303c4237db6750225f6be',
        'key': '2fb39ab3f55333d5fa3e830ebf99ec16'
      }
    }
  },
  {
    'name': 'BEIN SPORTS 4',
    'category': 'Sports',
    'type': 'mpd',
    'url': 'https://fta3-cdn-flr.visionplus.id/out/v1/fe4d00f07e2f43b789102b84b4d243a9/index.mpd',
    'drm': {
      'clearkey': {
        'keyId': 'aef1823177ad40199de440504d992ad5',
        'key': 'daad0aeb165b9a26b706f2a261b8fafe'
      }
    }
  },
  {
    'name': 'BEIN SPORTS 5',
    'category': 'Sports',
    'type': 'mpd',
    'url': 'https://ottb.live.cf.ww.aiv-cdn.net/dub-nitro/live/clients/dash/enc/zuf794yutz/out/v1/ca3534bfe4f148298b36719204d108e0/cenc.mpd',
    'drm': {
      'clearkey': {
        'keyId': '40f019b86241d23ef075633fd7f1e927',
        'key': 'cb9e1a122ed1c6445f7d3fd2162358f1'
      }
    }
  },
  {
    'name': 'SPOTV',
    'category': 'Sports',
    'type': 'mpd',
    'url': 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_spotvhd.mpd',
    'drm': {
      'clearkey': {
        'keyId': '31363231383438333031323033393138',
        'key': 'aa00f320f06247dcaf8e3cea1fb07f44'
      }
    }
  },
  {
    'name': 'SPOTV 2',
    'category': 'Sports',
    'type': 'mpd',
    'url': 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_spotv2hd.mpd',
    'drm': {
      'clearkey': {
        'keyId': '433a848c71e228d7b3017fb4d40ab50f',
        'key': '362202eefc5d9e42eec6450998cce9e8'
      }
    }
  },
  {
    'name': 'PREMIERE 1',
    'category': 'Sports',
    'type': 'mpd',
    'url': 'https://ottb.live.cf.ww.aiv-cdn.net/dub-nitro/live/clients/dash/enc/wf8usag51e/out/v1/f8fa17f087564f51aa4d5c700be43ec4/cenc.mpd',
    'drm': {
      'clearkey': {
        'keyId': '461321010b91d4e0e419b6e82a85e05c',
        'key': '16ecd238c0394592b8d3559c06b1faf5'
      }
    }
  },
  {
    'name': 'PREMIERE 2',
    'category': 'Sports',
    'type': 'mpd',
    'url': 'https://ottb.live.cf.ww.aiv-cdn.net/dub-nitro/live/clients/dash/enc/wybgz0orr8/out/v1/2f6d1612abd44f5883917f8a585b955f/cenc.mpd',
    'drm': {
      'clearkey': {
        'keyId': '2f6d1612abd44f5883917f8a585b955f',
        'key': 'ce5d18ffd68650affce1985201983ab7'
      }
    }
  },
  {
    'name': 'PREMIERE 3',
    'category': 'Sports',
    'type': 'mpd',
    'url': 'https://ottb.live.cf.ww.aiv-cdn.net/dub-nitro/live/clients/dash/enc/fdx74zqzhu/out/v1/7d7a8c6981a842b98a683e9fbfe51d17/cenc.mpd',
    'drm': {
      'clearkey': {
        'keyId': '7d7a8c6981a842b98a683e9fbfe51d17',
        'key': '31363233323236373936303238393632'
      }
    }
  },
  {
    'name': 'PREMIERE 4',
    'category': 'Sports',
    'type': 'mpd',
    'url': 'https://ottb.live.cf.ww.aiv-cdn.net/dub-nitro/live/clients/dash/enc/tepjqej1ys/out/v1/c9c9159baee749a19612b1598495859a/cenc.mpd',
    'drm': {
      'clearkey': {
        'keyId': '31363231393131363337323232353030',
        'key': '265c00f7fd825ad3e092b56081953b60'
      }
    }
  },
  {
    'name': 'PREMIERE 5',
    'category': 'Sports',
    'type': 'mpd',
    'url': 'https://ottb.live.cf.ww.aiv-cdn.net/dub-nitro/live/clients/dash/enc/pgub1bh7o9/out/v1/7a59226197644bfaa2b00f488bd95288/cenc.mpd',
    'drm': {
      'clearkey': {
        'keyId': '3c200c6198f7e2c0d510839e1f57d4b4',
        'key': '31363331363735363832333531363036'
      }
    }
  },
  {
    'name': 'PREMIERE 6',
    'category': 'Sports',
    'type': 'mpd',
    'url': 'https://ottb.live.cf.ww.aiv-cdn.net/dub-nitro/live/clients/dash/enc/8ci7l7dt0d/out/v1/98fe69f2cdc041388004305e63353268/cenc.mpd',
    'drm': {
      'clearkey': {
        'keyId': '33f7c9e0c960248a8f07a7f3d115d7fe',
        'key': '2f74614a4c52f95b5e7300c1d68305c4'
      }
    }
  },
  {
    'name': 'PREMIERE 8',
    'category': 'Sports',
    'type': 'mpd',
    'url': 'https://ottb.live.cf.ww.aiv-cdn.net/dub-nitro/live/clients/dash/enc/tepjqej1ys/out/v1/c9c9159baee749a19612b1598495859a/cenc.mpd',
    'drm': {
      'clearkey': {
        'keyId': '31363331363734363432333339393538',
        'key': 'bb43112b7b72e9c287da0ecdec8606a7'
      }
    }
  },
  {
    'name': 'ESPN',
    'category': 'Sports',
    'type': 'mpd',
    'url': 'https://live-atv-cdn.izzigo.tv/1/out/u/dash/ESPNHD/default.mpd',
    'drm': {
      'clearkey': {
        'keyId': '44b423a77dd4ace162db35cbb0fb6a3',
        'key': '98817b144bcf19fd0ddca7fe54cee110'
      }
    }
  },
  {
    'name': 'ESPN 2',
    'category': 'Sports',
    'type': 'mpd',
    'url': 'https://live-atv-cdn.izzigo.tv/1/out/u/dash/ESPN2HD/default.mpd',
    'drm': {
      'clearkey': {
        'keyId': '05b47ae3be1368912ebe28f87480fc84',
        'key': '168bd815468639fe4528b4bf0141f310'
      }
    }
  },
  {
    'name': 'ESPN 3',
    'category': 'Sports',
    'type': 'mpd',
    'url': 'https://live-atv-cdn.izzigo.tv/1/out/u/dash/ESPN3HD/default.mpd',
    'drm': {
      'clearkey': {
        'keyId': 'a4d49bda8cd29ba2888c732b4e7d9d63',
        'key': '5458f45efedb4d6f8aa6ac76c85b621b'
      }
    }
  },
  {
    'name': 'TRACE SPORT STARS',
    'category': 'Sports',
    'type': 'hls',
    'url': 'https://tracetv-sportstarts-vidaa.amagi.tv/playlist.m3u8'
  },
  {
    'name': 'EXTREME SPORTS',
    'category': 'Sports',
    'type': 'mpd',
    'url': 'https://ottb.live.cf.ww.aiv-cdn.net/lhr-nitro/live/clients/dash/enc/i2pcjr4pe5/out/v1/912e9db56d75403b8a9ac0a719110f36/cenc.mpd',
    'drm': {
      'clearkey': {
        'keyId': '8cb209f1828431ce9b50b593d1f44079',
        'key': '071448690a0ec9b27eb2c1a7d5e03010'
      }
    }
  },
  {
    'name': 'PREMIER FOOTBALL',
    'category': 'Sports',
    'type': 'mpd',
    'url': 'https://ottb.live.cf.ww.aiv-cdn.net/lhr-nitro/live/clients/dash/enc/wf8usag51e/out/v1/bd3b0c314fff4bb1ab4693358f3cd2d3/cenc.mpd',
    'drm': {
      'clearkey': {
        'keyId': 'bd3b0c314fff4bb1ab4693358f3cd2d3',
        'key': '16ecd238c0394592b8d3559c06b1faf5'
      }
    }
  },
  {
    'name': 'TNT SPORTS 2',
    'category': 'Sports',
    'type': 'mpd',
    'url': 'https://ottb.live.cf.ww.aiv-cdn.net/gru-nitro/live/clients/dash/enc/s818vishap/out/v1/7a63dfa162b443ceb195075092adbb21/cenc.mpd',
    'drm': {
      'clearkey': {
        'keyId': '7a63dfa162b443ceb195075092adbb21',
        'key': '475d6dd40eaba6896e02b26a6cf34d95'
      }
    }
  },
  {
    'name': 'TNT SPORTS 3',
    'category': 'Sports',
    'type': 'mpd',
    'url': 'https://ottb.live.cf.ww.aiv-cdn.net/gru-nitro/live/clients/dash/enc/wwinlbo2f3/out/v1/3f77baf7841a4fdeb9001961b9541a08/cenc.mpd',
    'drm': {
      'clearkey': {
        'keyId': '3f77baf7841a4fdeb9001961b9541a08',
        'key': 'd47ebabf7a21430b83a8c4b82d9ef6b1'
      }
    }
  },
  {
    'name': 'TNT SPORTS 4',
    'category': 'Sports',
    'type': 'mpd',
    'url': 'https://ottb.live.cf.ww.aiv-cdn.net/gru-nitro/live/clients/dash/enc/m6wutxqcro/out/v1/24b63f99ba674656b9990ef85c87d6ce/cenc.mpd',
    'drm': {
      'clearkey': {
        'keyId': '24b63f99ba674656b9990ef85c87d6ce',
        'key': '998f1294b122bbf1a96c1ddc0cbb229f'
      }
    }
  },
  {
    'name': 'NBA TV',
    'category': 'Sports',
    'type': 'mpd',
    'url': 'https://live-atv-cdn.izzigo.tv/2/out/u/dash/NBAHD/default.mpd',
    'drm': {
      'clearkey': {
        'keyId': '44b423a77dd4ace162db35cbb0fb6a3',
        'key': '98817b144bcf19fd0ddca7fe54cee110'
      }
    }
  },
  {
    'name': 'NBA TV PHILIPPINES',
    'category': 'Sports',
    'type': 'mpd',
    'url': 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cgnl_nba.mpd',
    'drm': {
      'clearkey': {
        'keyId': '9552bcbabfbd4ac19744422143bfb875',
        'key': 'ad2371259d34404cb89d54a4dc88dcd3'
      }
    }
  },
  {
    'name': 'FOX SPORTS',
    'category': 'Sports',
    'type': 'mpd',
    'url': 'https://linearjitp-playback.astro.com.my/dash-wv/linear/401/default_ott.mpd',
    'drm': {
      'clearkey': {
        'keyId': 'a06ca6c275744151895762e0346380f5',
        'key': 'a642dd4bf3ea782e19202adefb604b10'
      }
    }
  },
  {
    'name': 'FOX SPORTS 2',
    'category': 'Sports',
    'type': 'mpd',
    'url': 'https://linearjitp-playback.astro.com.my/dash-wv/linear/400/default_ott.mpd',
    'drm': {
      'clearkey': {
        'keyId': 'f812aeae6be5b924a8181b512d5d7910',
        'key': '94bc19ad9cb04a7e6871e650a7f6529c'
      }
    }
  },
  {
    'name': 'FOX SPORTS 3',
    'category': 'Sports',
    'type': 'mpd',
    'url': 'https://linearjitp-playback.astro.com.my/dash-wv/linear/402/default_ott.mpd',
    'drm': {
      'clearkey': {
        'keyId': '46d7e324316d4c1ea1a72d627c5f881c',
        'key': '346f0f60cbd7591e1ae72ca589157bb1'
      }
    }
  },
  {
    'name': 'FOX SPORTS PREMIUM',
    'category': 'Sports',
    'type': 'mpd',
    'url': 'https://linearjitp-playback.astro.com.my/dash-wv/linear/401/default_ott.mpd',
    'drm': {
      'clearkey': {
        'keyId': 'a06ca6c275744151895762e0346380f5',
        'key': 'a642dd4bf3ea782e19202adefb604b10'
      }
    }
  },
  {
    'name': 'SOLAR SPORTS',
    'category': 'Sports',
    'type': 'mpd',
    'url': 'https://linearjitp-playback.astro.com.my/dash-wv/linear/2506/default_ott.mpd',
    'drm': {
      'clearkey': {
        'keyId': '31363233323237383336303333303033',
        'key': 'c63d5b0d7e52335b61aeba4f6537d54d'
      }
    }
  },
  {
    'name': 'SPORTSTARS',
    'category': 'Sports',
    'type': 'mpd',
    'url': 'https://linearjitp-playback.astro.com.my/dash-wv/linear/2510/default_ott.mpd',
    'drm': {
      'clearkey': {
        'keyId': '16ecd238c0394592b8d3559c06b1faf5',
        'key': '071448690a0ec9b27eb2c1a7d5e03010'
      }
    }
  },
  {
    'name': 'SPORTSTARS 2',
    'category': 'Sports',
    'type': 'mpd',
    'url': 'https://linearjitp-playback.astro.com.my/dash-wv/linear/2511/default_ott.mpd',
    'drm': {
      'clearkey': {
        'keyId': '16ecd238c0394592b8d3559c06b1faf5',
        'key': '071448690a0ec9b27eb2c1a7d5e03010'
      }
    }
  },
  {
    'name': 'EUROSPORT',
    'category': 'Sports',
    'type': 'mpd',
    'url': 'https://atemeshield1-voe.sysln.id/live/eds/EUROSPORTHD/mpd/EUROSPORTHD.mpd',
    'drm': {
      'clearkey': {
        'keyId': '9bfeb5068725617dbad6338473da6d10',
        'key': 'a7242a7026ff45609114ee1f3beb34dc'
      }
    }
  },
  {
    'name': 'EUROSPORT 1',
    'category': 'Sports',
    'type': 'mpd',
    'url': 'https://cors.jugorder.de/https://tr.live.cdn.cgates.lt/live/dash/561504/index.mpd',
    'drm': {
      'clearkey': {
        'keyId': 'cd2b4ad0eb286239a4a022e6ca5fd007',
        'key': 'df97e849d68479ec16e395feda7627d0'
      }
    }
  },
  {
    'name': 'EUROSPORT 2',
    'category': 'Sports',
    'type': 'mpd',
    'url': 'https://cors.jugorder.de/https://tr.live.cdn.cgates.lt/live/dash/561504/index.mpd',
    'drm': {
      'clearkey': {
        'keyId': 'cd2b4ad0eb286239a4a022e6ca5fd007',
        'key': 'df97e849d68479ec16e395feda7627d0'
      }
    }
  },
  {
    'name': 'ONE SPORTS',
    'category': 'Sports',
    'type': 'mpd',
    'url': 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_onesports_hd.mpd',
    'drm': {
      'clearkey': {
        'keyId': '0355f64277082b903022985035c498ca',
        'key': '31363233323237323935303332363334'
      }
    }
  },
  {
    'name': 'ONE SPORTS +',
    'category': 'Sports',
    'type': 'mpd',
    'url': 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_onesportsplus_hd1.mpd',
    'drm': {
      'clearkey': {
        'keyId': '92d34a84fae8e54de0a829629941be10',
        'key': '0f8537d8412b11edb8780242ac120002'
      }
    }
  },
  {
    'name': 'PREMIER TENNIS',
    'category': 'Sports',
    'type': 'mpd',
    'url': 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_premiertennishd.mpd',
    'drm': {
      'clearkey': {
        'keyId': '3c4508af348844107f5e026a4fd6b16e',
        'key': '4591bf63837b4b342058c5e11a51744a'
      }
    }
  },
  {
    'name': 'FIGHT SPORTS',
    'category': 'Sports',
    'type': 'mpd',
    'url': 'https://uselector.cdn.intigral-ott.net/STM/STM.isml/manifest.mpd',
    'drm': {
      'clearkey': {
        'keyId': 'f5a9cadea2372a52c2b91f9c261fe0a4',
        'key': '05b47ae3be1368912ebe28f87480fc84'
      }
    }
  },
  {
    'name': 'BLAST SPORTS',
    'category': 'Sports',
    'type': 'mpd',
    'url': 'https://ottb.live.cf.ww.aiv-cdn.net/gru-nitro/live/clients/dash/enc/phxwb8s3u9/out/v1/45162b5b3c62402aa2e763b38517be9d/cenc.mpd',
    'drm': {
      'clearkey': {
        'keyId': '89ac6f2178c855ce6bf9e9b7e45eecbb',
        'key': '51646d5e500648c6a4e319c7861e963f'
      }
    }
  },
  {
    'name': 'SKY SPORTS',
    'category': 'Sports',
    'type': 'mpd',
    'url': 'https://live-atv-cdn.izzigo.tv/3/out/u/dash/SKYSPORTSHD/default.mpd',
    'drm': {
      'clearkey': {
        'keyId': '3161c6c45076419fbbc333c277a22f65',
        'key': '6700a5d93203417b8585f7de7dd1a09b'
      }
    }
  },
  {
    'name': 'SKY A',
    'category': 'Sports',
    'type': 'hls',
    'url': 'https://vthanh.utako.moe/skya/tracks-v1a1/mono.m3u8'
  },
  {
    'name': 'ASTRO SPORTS PLUS',
    'category': 'Sports',
    'type': 'mpd',
    'url': 'https://linearjitp-playback.astro.com.my/dash-wv/linear/2705/default_ott.mpd',
    'drm': {
      'clearkey': {
        'keyId': '31363735313530343938343234373739',
        'key': '47c093e0c9fd4f80839a0337da3dd876'
      }
    }
  },
  {
    'name': 'ASTRO BOO',
    'category': 'Sports',
    'type': 'mpd',
    'url': 'https://linearjitp-playback.astro.com.my/dash-wv/linear/2600/default_ott.mpd',
    'drm': {
      'clearkey': {
        'keyId': '8ce20e2a4b3dd04e0a6e5469b7cb47be',
        'key': '1170btrpUu'
      }
    }
  },
  {
    'name': 'ASTRO FOOTBALL',
    'category': 'Sports',
    'type': 'mpd',
    'url': 'https://linearjitp-playback.astro.com.my/dash-wv/linear/2601/default_ott.mpd',
    'drm': {
      'clearkey': {
        'keyId': '31363231393131363337323232353030',
        'key': '265c00f7fd825ad3e092b56081953b60'
      }
    }
  },
  {
    'name': 'LALIGA TV HYPERMOTION',
    'category': 'Sports',
    'type': 'mpd',
    'url': 'https://amg19223-amg19223c1-amgplt0351.playout.now3.amagi.tv/playlist/amg19223-amg19223c1-amgplt0351/playlist.m3u8',
    'drm': {
      'clearkey': {
        'keyId': '276767a578aae2eacb284247ccd9eb10',
        'key': '49a9bf0cfba1cb4e52de3d458f6fb3a2'
      }
    }
  },
  {
    'name': 'REDBULL TV',
    'category': 'Sports',
    'type': 'hls',
    'url': 'https://rbmn-live.akamaized.net/hls/live/590964/BoRB-AT/master_1660.m3u8?xtreamiptv.m3u8'
  },
  {
    'name': 'MOTORVISION+',
    'category': 'Sports',
    'type': 'hls',
    'url': 'https://amg19223-amg19223c5-amgplt0351.playout.now3.amagi.tv/playlist/amg19223-amg19223c5-amgplt0351/playlist.m3u8'
  },
  {
    'name': 'NFL NETWORK',
    'category': 'Sports',
    'type': 'mpd',
    'url': 'https://live-atv-cdn.izzigo.tv/1/out/u/dash/NFLHD/default.mpd',
    'drm': {
      'clearkey': {
        'keyId': '9b40cafa23cb7de8418bae6c66159f3a',
        'key': 'b1bde4692ea730163539adc9a84cc488'
      }
    }
  },
  {
    'name': 'HORIZON SPORTS',
    'category': 'Sports',
    'type': 'mpd',
    'url': 'https://linearjitp-playback.astro.com.my/dash-wv/linear/2506/default_ott.mpd',
    'drm': {
      'clearkey': {
        'keyId': '31363233323237383336303333303033',
        'key': 'c63d5b0d7e52335b61aeba4f6537d54d'
      }
    }
  },
  {
    'name': 'PINOY XTREME',
    'category': 'Sports',
    'type': 'mpd',
    'url': 'https://ottb.live.cf.ww.aiv-cdn.net/dub-nitro/live/clients/dash/enc/pgub1bh7o9/out/v1/7a59226197644bfaa2b00f488bd95288/cenc.mpd',
    'drm': {
      'clearkey': {
        'keyId': '3c200c6198f7e2c0d510839e1f57d4b4',
        'key': '31363331363735363832333531363036'
      }
    }
  },
  {
    'name': 'PREMIERE 7',
    'category': 'Sports',
    'type': 'mpd',
    'url': 'https://ottb.live.cf.ww.aiv-cdn.net/dub-nitro/live/clients/dash/enc/tepjqej1ys/out/v1/c9c9159baee749a19612b1598495859a/cenc.mpd',
    'drm': {
      'clearkey': {
        'keyId': '31363331363734363432333339393538',
        'key': 'bb43112b7b72e9c287da0ecdec8606a7'
      }
    }
  },
  {
    'name': 'PREMIERE 8',
    'category': 'Sports',
    'type': 'mpd',
    'url': 'https://ottb.live.cf.ww.aiv-cdn.net/dub-nitro/live/clients/dash/enc/tepjqej1ys/out/v1/c9c9159baee749a19612b1598495859a/cenc.mpd',
    'drm': {
      'clearkey': {
        'keyId': '31363331363734363432333339393538',
        'key': 'bb43112b7b72e9c287da0ecdec8606a7'
      }
    }
  },
  {
    name: "CINEMAX",
    category: "Movies",
    type: "mpd",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/400/default_ott.mpd",
    drm: {
      clearkey: {
        keyId: "31363331363734363432333339393538",
        key: "abcd1234efgh5678ijkl9012mnop3456"
      }
    }
  },
  {
    name: "Amazon Prime Video",
    category: "Movies",
    type: "mpd",
    url: "https://ottb.live.cf.ww.aiv-cdn.net/dub-nitro/live/clients/dash/enc/at8teepvrn/out/v1/ab8d59a847f046c88f07a7f3d115d7fe/cenc.mpd",
    drm: {
      clearkey: {
        keyId: "40314mkWgwF",
        key: "f812aeae6be5b924a8181b512d5d7910"
      }
    }
  },
  {
    name: "Local Channel",
    category: "Local",
    type: "mpd",
    url: "https://bunproxy.azurewebsites.net/api/001/2/ch00000090990000001093/manifest.mpd?virtualDomain=001.live_hls.zte.com",
    drm: {
      clearkey: {
        keyId: "94bc19ad9cb04a7e6871e650a7f6529c",
        key: "a1b2c3d4e5f678901234abcd5678ef90"
      }
    }
  },
  {
    name: "PREMIERE 6",
    category: "Movies",
    type: "mpd",
    url: "https://bunproxy.azurewebsites.net/api/001/2/ch00000090990000001314/manifest.mpd?virtualDomain=001.live_hls.zte.com",
    drm: {
      clearkey: {
        keyId: "33333f38930949b1af65b3361ad80d1d",
        key: "44a9e6477651b3b47f3a2b727d562835"
      }
    }
  },
  {
    name: "BS TV TOKYO",
    category: "International",
    type: "m3u8",
    url: "https://amg17931-zee-amg17931c9-samsung-ph-6528.playouts.now.amagi.tv/playlist/amg17931-asiatvusaltdfast-zeesine-samsungph/playlist.m3u8",
    drm: {
      clearkey: {
        keyId: "f4bef9f080f4a3a52dd55d5c3b8b81e2",
        key: "31af30d2fa3e6f39e9e049c7a6ddc3bb"
      }
    }
  },
  {
    name: "CINEMO!",
    category: "Movies",
    type: "mpd",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/900/default_ott.mpd",
    drm: {
      clearkey: {
        keyId: "44a9e6477651b3b47f3a2b727d562835",
        key: "aa2211bb3344cc5566778899ddeeff00"
      }
    }
  },
  {
    name: "FASHION TV",
    category: "Lifestyle",
    type: "m3u8",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/5171/default_ott.mpd",
    drm: {
      clearkey: {
        keyId: "40d8bb2a46ffd03540e0c6210ece57ce",
        key: "1234567890abcdef1234567890abcdef"
      }
    }
  },
  {
    name: "Astro Arena",
    category: "Sports",
    type: "mpd",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/2604/default_primary.mpd",
    drm: {
      clearkey: {
        keyId: "efda647dad723563b625be8c05ee6110",
        key: "6776985938b332164b97b81fe566a34a"
      }
    }
  },
  {
    name: "Astro Arena 2",
    category: "Sports",
    type: "mpd",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/5057/default_primary.mpd",
    drm: {
      clearkey: {
        keyId: "ead0335d60401225727a6d531e9c2710",
        key: "1ee3b252227c5c2ec9378c833d2e14ff"
      }
    }
  },
  {
    name: "Astro Badminton",
    category: "Sports",
    type: "mpd",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/5170/default_primary.mpd",
    drm: {
      clearkey: {
        keyId: "6ff0e040d544ec3f02243865990f0c10",
        key: "83728b47019abdbb37aa36ed5f2951bd"
      }
    }
  },
  {
    name: "Astro Badminton 2",
    category: "Sports",
    type: "mpd",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/5172/default_primary.mpd",
    drm: {
      clearkey: {
        keyId: "72ad6eaa1904540138487fffa3ad6510",
        key: "17c19ad670a557e6882419d6923fad27"
      }
    }
  },
  {
    name: "Arena Bola",
    category: "Sports",
    type: "mpd",
    url: "https://l01.dp.sooka.my/5099/linear/index.mpd",
    drm: {
      clearkey: {
        keyId: "57833c900c4c437f82daf6785eb6ef36",
        key: "7bf4663e43cdc277b4ae18219c81d2a1,fb06bb8266fb4a998e7c4e7e90461556:52242587d8106c4b3ed596c7a56b4e28"
      }
    }
  },
  {
    name: "Arena Bola 2",
    category: "Sports",
    type: "mpd",
    url: "https://l02.dp.sooka.my/5100/linear/index.mpd",
    drm: {
      clearkey: {
        keyId: "1314914fb4f94984b7a7572a03b69f93",
        key: "7ec8c4186df69a58cf640291a7c9ac7c,f166a88a7f1b40bba2e399bf2f972365:abf14067e089861730f4c6ff24b52dba"
      }
    }
  },
  {
    name: "Astro Football",
    category: "Sports",
    type: "mpd",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/2506/default_primary.mpd",
    drm: {
      clearkey: {
        keyId: "79f4028730acca9ab8b00f26158ddb10",
        key: "91febe843c08c7cc523efd827292e40e"
      }
    }
  },
  {
    name: "Astro Grandstand",
    category: "Sports",
    type: "mpd",
    url: "https://l03.dp.sooka.my/2701/linear/index.mpd",
    drm: {
      clearkey: {
        keyId: "66c94fd8908c43ccb5e7b3dd58a990d2",
        key: "d489da5a8496d00a04757d432816ab71,505aefcda9084f83bc5c6cc53f0ef9c6:f89898184ed921e225cd89f4d2ea1035"
      }
    }
  },
  {
    name: "Astro Premier League",
    category: "Sports",
    type: "mpd",
    url: "https://l01.dp.sooka.my/601/linear/index.mpd",
    drm: {
      clearkey: {
        keyId: "bb2dc3cfa3024039ae59b55e6b0b5de5",
        key: "03d25d6ceb16fc4e007697e9d2124fac,1090bef3275b45d188200b828fe30527:43eff6a8da896a34056f339ec9562045"
      }
    }
  },
  {
    name: "Astro Premier League 2",
    category: "Sports",
    type: "mpd",
    url: "https://l02.dp.sooka.my/2104/linear/index.mpd",
    drm: {
      clearkey: {
        keyId: "4ecad9adae8f44f0b1c8bf5c492da613",
        key: "43ac85382893194802f0d34dbf71059e,537a246e0284449a862dfd4dc43b7c79:f3829c61a21ceae05ee5d5260679c210"
      }
    }
  },
  {
    name: "Astro Premier League 3",
    category: "Sports",
    type: "mpd",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/5108/default_primary.mpd",
    drm: {
      clearkey: {
        keyId: "1ece3ecb41699e855c6dc9a283908210",
        key: "ba08be767e1a5e89777e68a6998a8c19"
      }
    }
  },
  {
    name: "Astro Premier League 4",
    category: "Sports",
    type: "mpd",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/5111/default_primary.mpd",
    drm: {
      clearkey: {
        keyId: "3225f837a4b95d6e46683c53818c1710",
        key: "3e1b57c06699c7e408e7aa49ff57d4f4"
      }
    }
  },
  {
    name: "Astro Premier League 5",
    category: "Sports",
    type: "mpd",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/5113/default_primary.mpd",
    drm: {
      clearkey: {
        keyId: "229670469469aa6f78bc5bbe10071810",
        key: "3b3ede68e8bb9d0d4e3b4517c422cccf"
      }
    }
  },
  {
    name: "Astro Cricket",
    category: "Sports",
    type: "mpd",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/2505/default_primary.mpd",
    drm: {
      clearkey: {
        keyId: "97b845a70f564843ad6bfb9b31c8a4f0",
        key: "2f62ddcd4e20baf7c5f3e8e3e3c2f50b"
      }
    }
  },
  {
    name: "Astro SuperSport",
    category: "Sports",
    type: "mpd",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/601/default_primary.mpd",
    drm: {
      clearkey: {
        keyId: "0d624b47779a41ff830890d4ecb6d410",
        key: "6c37b3e5cc8a056b7a658e7b1e755f35"
      }
    }
  },
  {
    name: "Astro SuperSport 2",
    category: "Sports",
    type: "mpd",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/2104/default_primary.mpd",
    drm: {
      clearkey: {
        keyId: "c45b393e6b464469a3f2c1b8a75e2e93",
        key: "3f183a7ebfe76f22ecf1d2e2c55de6e2"
      }
    }
  },
  {
    name: "Astro SuperSport 3",
    category: "Sports",
    type: "mpd",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/2701/default_primary.mpd",
    drm: {
      clearkey: {
        keyId: "fda3f295b35b4c17be6f40c9ad61b22a",
        key: "0b9af7b4a4e9fc7636e4f616ecfbbd7c"
      }
    }
  },
  {
    name: "Astro SuperSport 4",
    category: "Sports",
    type: "mpd",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/2504/default_primary.mpd",
    drm: {
      clearkey: {
        keyId: "4490de22d7fc4c93aa2b332f0838e63b",
        key: "65e69f6698fc99255cddc1c6c1fce7cb"
      }
    }
  },
  {
    name: "Astro SuperSport 5",
    category: "Sports",
    type: "mpd",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/2508/default_primary.mpd",
    drm: {
      clearkey: {
        keyId: "258893312b6d443f98f8e09c6d7c8d70",
        key: "bc1887f4bbdcd29fa8ea30f88ff1c8fc"
      }
    }
  },
  {
    name: "beIN Sports",
    category: "Sports",
    type: "mpd",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/5054/default_primary.mpd",
    drm: {
      clearkey: {
        keyId: "e88cfead8d1b414ca299fbaf8f6b1a36",
        key: "fbd769b2d6dd9f253c5c665bdfcd71fa"
      }
    }
  },
  {
    name: "beIN Sports 2",
    category: "Sports",
    type: "mpd",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/5064/default_primary.mpd",
    drm: {
      clearkey: {
        keyId: "ec6148ad5e874f00b7c812c062c7343a",
        key: "e31e5bc2dbd2b49d6dc56d2ac78e0e0f"
      }
    }
  },
  {
    name: "beIN Sports 3",
    category: "Sports",
    type: "mpd",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/5074/default_primary.mpd",
    drm: {
      clearkey: {
        keyId: "437c2fd0d1cf4121b48ff773ca0ccaa7",
        key: "1f84c7951bb1e2b54d94ed469d0aaf9b"
      }
    }
  },
  {
    name: "W-Sport",
    category: "Sports",
    type: "mpd",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/2302/default_primary.mpd",
    drm: {
      clearkey: {
        keyId: "cb99b8dbcf2b4f2292e90c988f087a2d",
        key: "b3bbda4e54e9b78de97d2f6619c984d6"
      }
    }
  },
  {
    name: "Astro Cricket 2",
    category: "Sports",
    type: "mpd",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/2507/default_primary.mpd",
    drm: {
      clearkey: {
        keyId: "28c5f64fa3dc4c6ba5abdbf7b66f9f63",
        key: "2ddcf6e728de36e7fa50a1bcdd76edb4"
      }
    }
  },
  {
    name: "Astro eGG",
    category: "Sports",
    type: "mpd",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/2607/default_primary.mpd",
    drm: {
      clearkey: {
        keyId: "f3b62d546dd348c99eae60a4cba8aa65",
        key: "a4bb5b23e23cd774aa7b4f54258e6713"
      }
    }
  }
];
