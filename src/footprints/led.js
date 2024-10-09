module.exports = {
    params: {
        designator: 'LED',
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

        (module "WS2812B-2020" (layer F.Cu) (tedit 5DC343EF)
        ${p.at /* parametric position */}
          (descr "https://www.tme.eu/Document/4a8239e52df5e0b5cc2eb96834c5d8b6/WS2812B-2020.pdf")
          (attr smd)
          (fp_text reference "${p.ref}" (at 0 -2.25) (layer F.SilkS)
            (effects (font (size 1 1) (thickness 0.15)))
          )
          (fp_line (start -1.1 -1) (end -1.1 1) (layer F.SilkS) (width 0.1))
          (fp_line (start -1.1 1) (end 1.1 1) (layer F.SilkS) (width 0.1))
          (fp_line (start 1.1 1) (end 1.1 -1) (layer F.SilkS) (width 0.1))
          (fp_line (start 1.1 -1) (end -1.1 -1) (layer F.SilkS) (width 0.1))

          (pad "4" smd rect (at -0.85 0.55 ${p.rot}) (size 0.8 0.8) (layers "F.Cu" "F.Paste" "F.Mask") ${p.VCC})
          (pad "4" thru_hole circle (at -2.2 1 ${p.rot}) (size 0.6 0.6) (drill 0.3) (layers *.Cu) (zone_connect 2) ${p.VCC})
          (pad "" smd custom (at -0.85 0.55 ${p.rot}) (size 0.25 0.25) (layers F.Cu) ${p.VCC.str}
            (zone_connect 0)
            (options (clearance outline) (anchor circle))
            (primitives
              (gr_line (start 0 0) (end -1.35 0.45) (width 0.25))
            ))

          (pad "1" smd rect (at 0.85 0.55 ${p.rot}) (size 0.8 0.8) (layers "F.Cu" "F.Paste" "F.Mask") ${p.dout})
          (pad "1" thru_hole circle (at 2.2 1 ${p.rot}) (size 0.6 0.6) (drill 0.3) (layers *.Cu) (zone_connect 2) ${p.dout})
          (pad "" smd custom (at 0.85 0.55 ${p.rot}) (size 0.25 0.25) (layers F.Cu) ${p.dout.str}
            (zone_connect 0)
            (options (clearance outline) (anchor circle))
            (primitives
              (gr_line (start 0 0) (end 1.35 0.45) (width 0.25))
            ))

          (pad "2" smd rect (at 0.85 -0.55 ${p.rot}) (size 0.8 0.8) (layers "F.Cu" "F.Paste" "F.Mask") ${p.GND})
          (pad "2" thru_hole circle (at 2.2 -1 ${p.rot}) (size 0.6 0.6) (drill 0.3) (layers *.Cu) (zone_connect 2) ${p.GND})
          (pad "" smd custom (at 0.85 -0.55 ${p.rot}) (size 0.25 0.25) (layers F.Cu) ${p.GND.str}
            (zone_connect 0)
            (options (clearance outline) (anchor circle))
            (primitives
              (gr_line (start 0 0) (end 1.35 -0.45) (width 0.25))
            ))

          (pad "3" smd rect (at -0.85 -0.55 ${p.rot}) (size 0.8 0.8) (layers "F.Cu" "F.Paste" "F.Mask") ${p.din})
          (pad "3" thru_hole circle (at 0 1.5 ${p.rot}) (size 0.6 0.6) (drill 0.3) (layers *.Cu) (zone_connect 2) ${p.din})
          (pad "" smd custom (at -0.85 -0.55 ${p.rot}) (size 0.25 0.25) (layers F.Cu) ${p.din.str}
            (zone_connect 0)
            (options (clearance outline) (anchor circle))
            (primitives
              (gr_line (start 0 0) (end 0.85 0) (width 0.25))
              (gr_line (start 0.85 0) (end 0.85 2.05) (width 0.25))
            ))

          (fp_line (start -1.1 -1) (end -1.1 1) (layer B.SilkS) (width 0.1))
          (fp_line (start -1.1 1) (end 1.1 1) (layer B.SilkS) (width 0.1))
          (fp_line (start 1.1 1) (end 1.1 -1) (layer B.SilkS) (width 0.1))
          (fp_line (start 1.1 -1) (end -1.1 -1) (layer B.SilkS) (width 0.1))

          (pad "3" smd rect (at -0.85 0.55 ${p.rot}) (size 0.8 0.8) (layers "B.Cu" "B.Paste" "B.Mask") ${p.din})
          (pad "" smd custom (at -0.85 0.55 ${p.rot}) (size 0.25 0.25) (layers B.Cu) ${p.GND.str}
            (zone_connect 0)
            (options (clearance outline) (anchor circle))
            (primitives
              (gr_line (start 0 0) (end 0.85 0.95) (width 0.25))
            ))

          (pad "2" smd rect (at 0.85 0.55 ${p.rot}) (size 0.8 0.8) (layers "B.Cu" "B.Paste" "B.Mask") ${p.GND})
          (pad "" smd custom (at 0.85 0.55 ${p.rot}) (size 0.25 0.25) (layers B.Cu) ${p.GND.str}
            (zone_connect 0)
            (options (clearance outline) (anchor circle))
            (primitives
              (gr_line (start 0 0) (end -0.85 0) (width 0.25))
              (gr_line (start -0.85 0) (end -0.85 -2) (width 0.25))
              (gr_line (start -0.85 -2) (end 0.5 -2) (width 0.25))
              (gr_line (start 0.5 -2) (end 1.35 -1.55) (width 0.25))
            ))

          (pad "1" smd rect (at 0.85 -0.55 ${p.rot}) (size 0.8 0.8) (layers "B.Cu" "B.Paste" "B.Mask") ${p.dout})
          (pad "" smd custom (at 0.85 -0.55 ${p.rot}) (size 0.25 0.25) (layers B.Cu) ${p.dout.str}
            (zone_connect 0)
            (options (clearance outline) (anchor circle))
            (primitives
              (gr_line (start 0 0) (end 1 0.45) (width 0.25))
              (gr_line (start 1 0.45) (end 1.35 1.55) (width 0.25))
            ))

          (pad "4" smd rect (at -0.85 -0.55 ${p.rot}) (size 0.8 0.8) (layers "B.Cu" "B.Paste" "B.Mask") ${p.VCC})
          (pad "" smd custom (at -0.85 -0.55 ${p.rot}) (size 0.25 0.25) (layers B.Cu) ${p.VCC.str}
            (zone_connect 0)
            (options (clearance outline) (anchor circle))
            (primitives
              (gr_line (start 0 0) (end -1 0.45) (width 0.25))
              (gr_line (start -1 0.45) (end -1.35 1.55) (width 0.25))
            ))
        )
    `
}