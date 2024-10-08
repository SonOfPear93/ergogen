module.exports = {
    params: {
        designator: 'LED',
        side: 'F',
        din: undefined,
        dout: undefined,
        VCC: {type: 'net', value: 'VCC'},
        GND: {type: 'net', value: 'GND'}
    },
    body: p => `
            ${'' /* (pad 1 smd rect (at -2.2 -0.875 ${p.r}) (size 2.6 1) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.VCC})
            (pad 2 smd rect (at -2.2 0.875 ${p.r}) (size 2.6 1) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.dout})
            (pad 3 smd rect (at 2.2 0.875 ${p.r}) (size 2.6 1) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.GND})
            (pad 4 smd rect (at 2.2 -0.875 ${p.r}) (size 2.6 1) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.din})

            (pad 11 smd rect (at -2.5 -1.6 ${p.r}) (size 2 1.2) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.VCC})
            (pad 22 smd rect (at -2.5 1.6 ${p.r}) (size 2 1.2) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.dout})
            (pad 33 smd rect (at 2.5 1.6 ${p.r}) (size 2 1.2) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.GND})
            (pad 44 smd rect (at 2.5 -1.6 ${p.r}) (size 2 1.2) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.din})*/}

        (module "WS2812B-2020" (layer ${p.side}.Cu) (tedit 5DC343EF)
        ${p.at /* parametric position */}
          (descr "https://www.tme.eu/Document/4a8239e52df5e0b5cc2eb96834c5d8b6/WS2812B-2020.pdf")
          (attr smd)
          (fp_text reference "${p.ref}" (at 0 -2.25) (layer ${p.side}.SilkS)
            (effects (font (size 1 1) (thickness 0.15)))
          )
          (fp_line (start -1.1 -1) (end -1.1 1) (layer ${p.side}.SilkS) (width 0.1))
          (fp_line (start -1.1 1) (end 1.1 1) (layer ${p.side}.SilkS) (width 0.1))
          (fp_line (start 1.1 1) (end 1.1 -1) (layer ${p.side}.SilkS) (width 0.1))
          (fp_line (start 1.1 -1) (end -1.1 -1) (layer ${p.side}.SilkS) (width 0.1))
          (pad "4" smd rect (at -0.85 0.55 ${p.rot}) (size 0.8 0.8) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask") ${p.VCC})
          (pad "1" smd rect (at 0.85 0.55 ${p.rot}) (size 0.8 0.8) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask") ${p.dout})
          (pad "2" smd rect (at 0.85 -0.55 ${p.rot}) (size 0.8 0.8) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask") ${p.GND})
          (pad "3" smd rect (at -0.85 -0.55 ${p.rot}) (size 0.8 0.8) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask") ${p.din})
        )
    `
}