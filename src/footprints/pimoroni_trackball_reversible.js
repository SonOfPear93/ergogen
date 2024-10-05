module.exports = {
  params: {
    VCC: {type:'net', value: 'VCC'},
    SDA: {type:'net', value: 'P2' },
    SCL: {type:'net', value: 'P3' },
    INT: {type:'net', value: 'INT' }, // usually best not to connect this pin
    GND: {type:'net', value: 'GND'},
  },
  body: p => {
    return `
      (module pimoroni_trackball (layer F.Cu) (tedit 5D20B36F)
      ${p.at /* parametric position */}
        (descr "Pimoroni I2C trackball breakout")
        (tags "Through hole pin header THT 1x05 2.54mm single row")

        (fp_line (start -1.5 -2.6) (end -1.5 12.5) (layer F.SilkS) (width 0.12))
        (fp_line (start -1.5 12.5) (end 4.5 12.5) (layer F.SilkS) (width 0.12))
        (fp_line (start 4.5 12.5) (end 4.5 17.5) (layer F.SilkS) (width 0.12))
        (fp_line (start 4.5 17.5) (end 20.5 17.5) (layer F.SilkS) (width 0.12))
        (fp_line (start -1.5 -2.6) (end 4.5 -2.6) (layer F.SilkS) (width 0.12))
        (fp_line (start 4.5 -7.6) (end 20.5 -7.6) (layer F.SilkS) (width 0.12))
        (fp_line (start 4.5 -2.6) (end 4.5 -7.6) (layer F.SilkS) (width 0.12))
        (fp_line (start 20.5 17.5) (end 20.5 -7.6) (layer F.SilkS) (width 0.12))

        (fp_line (start -1.5 -2.6) (end -1.5 12.5) (layer B.SilkS) (width 0.12))
        (fp_line (start -1.5 12.5) (end 4.5 12.5) (layer B.SilkS) (width 0.12))
        (fp_line (start 4.5 12.5) (end 4.5 17.5) (layer B.SilkS) (width 0.12))
        (fp_line (start 4.5 17.5) (end 20.5 17.5) (layer B.SilkS) (width 0.12))
        (fp_line (start -1.5 -2.6) (end 4.5 -2.6) (layer B.SilkS) (width 0.12))
        (fp_line (start 4.5 -7.6) (end 20.5 -7.6) (layer B.SilkS) (width 0.12))
        (fp_line (start 4.5 -2.6) (end 4.5 -7.6) (layer B.SilkS) (width 0.12))
        (fp_line (start 20.5 17.5) (end 20.5 -7.6) (layer B.SilkS) (width 0.12))

        ${''/* mounting holes */}
        (pad 1 np_thru_hole circle (at 7.05 14.7) (size 2.5 2.5) (drill 2.5) (layers *.Cu *.Mask))
        (pad 2 np_thru_hole circle (at 17.95 14.7) (size 2.5 2.5) (drill 2.5) (layers *.Cu *.Mask))
        (pad 3 np_thru_hole circle (at 17.95 -4.9) (size 2.5 2.5) (drill 2.5) (layers *.Cu *.Mask))
        (pad 4 np_thru_hole circle (at 7.05 -4.9) (size 2.5 2.5) (drill 2.5) (layers *.Cu *.Mask))

        ${''/* pins */}
        (pad "" thru_hole oval (at 0 0) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask))
        (pad "" thru_hole oval (at 0 2.54) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask))
        (pad "" thru_hole oval (at 0 5.08) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask))
        (pad "" thru_hole oval (at 0 7.62) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask))
        (pad "" thru_hole oval (at 0 10.16) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask))

        (pad SCL smd custom (at 1.55 5.08 ${p.rot-180}) (size 0.8 1.5) (layers F.Cu F.Mask)
          (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.56 0.67) (xy 0.34 0.67) (xy 0.34 0.3)) (width 0.1))
            (gr_line (start 0.67 -0.697) (end -0.35 -0.697) (width 0.12))
            (gr_poly (pts
               (xy 0.54 -0.67) (xy 0.32 -0.67) (xy 0.32 -0.3)) (width 0.1))
            (gr_line (start -0.35 -0.697) (end -0.35 0.69) (width 0.12))
            (gr_arc (start 1.26 0) (end 0.67 -0.697) (angle -98.7) (width 0.12))
            (gr_line (start -0.35 0.69) (end 0.66 0.69) (width 0.12))
          ) ${p.SCL})
        (pad SCL smd custom (at 1.55 5.08 ${p.rot-180}) (size 0.8 1.5) (layers B.Cu B.Mask)
          (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.56 -0.67) (xy 0.34 -0.67) (xy 0.34 -0.3)) (width 0.1))
            (gr_line (start 0.67 0.697) (end -0.35 0.697) (width 0.12))
            (gr_poly (pts
               (xy 0.54 0.67) (xy 0.32 0.67) (xy 0.32 0.3)) (width 0.1))
            (gr_line (start -0.35 0.697) (end -0.35 -0.69) (width 0.12))
            (gr_arc (start 1.26 0) (end 0.67 0.697) (angle 98.7) (width 0.12))
            (gr_line (start -0.35 -0.69) (end 0.66 -0.69) (width 0.12))
          ) ${p.SCL})
        (pad SDA smd custom (at 1.55 7.62 ${p.rot-180}) (size 0.8 1.5) (layers F.Cu F.Mask)
          (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.56 0.67) (xy 0.34 0.67) (xy 0.34 0.3)) (width 0.1))
            (gr_line (start 0.67 -0.697) (end -0.35 -0.697) (width 0.12))
            (gr_poly (pts
               (xy 0.54 -0.67) (xy 0.32 -0.67) (xy 0.32 -0.3)) (width 0.1))
            (gr_line (start -0.35 -0.697) (end -0.35 0.69) (width 0.12))
            (gr_arc (start 1.26 0) (end 0.67 -0.697) (angle -98.7) (width 0.12))
            (gr_line (start -0.35 0.69) (end 0.66 0.69) (width 0.12))
          ) ${p.SDA})
        (pad INT smd custom (at 1.55 7.62 ${p.rot-180}) (size 0.8 1.5) (layers B.Cu B.Mask)
          (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.56 -0.67) (xy 0.34 -0.67) (xy 0.34 -0.3)) (width 0.1))
            (gr_line (start 0.67 0.697) (end -0.35 0.697) (width 0.12))
            (gr_poly (pts
               (xy 0.54 0.67) (xy 0.32 0.67) (xy 0.32 0.3)) (width 0.1))
            (gr_line (start -0.35 0.697) (end -0.35 -0.69) (width 0.12))
            (gr_arc (start 1.26 0) (end 0.67 0.697) (angle 98.7) (width 0.12))
            (gr_line (start -0.35 -0.69) (end 0.66 -0.69) (width 0.12))
          ) ${p.INT})
        (pad VCC smd custom (at 1.55 10.16 ${p.rot-180}) (size 0.8 1.5) (layers F.Cu F.Mask)
          (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.56 0.67) (xy 0.34 0.67) (xy 0.34 0.3)) (width 0.1))
            (gr_line (start 0.67 -0.697) (end -0.35 -0.697) (width 0.12))
            (gr_poly (pts
               (xy 0.54 -0.67) (xy 0.32 -0.67) (xy 0.32 -0.3)) (width 0.1))
            (gr_line (start -0.35 -0.697) (end -0.35 0.69) (width 0.12))
            (gr_arc (start 1.26 0) (end 0.67 -0.697) (angle -98.7) (width 0.12))
            (gr_line (start -0.35 0.69) (end 0.66 0.69) (width 0.12))
          ) ${p.VCC})
        (pad GND smd custom (at 1.55 10.16 ${p.rot-180}) (size 0.8 1.5) (layers B.Cu B.Mask)
          (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.56 -0.67) (xy 0.34 -0.67) (xy 0.34 -0.3)) (width 0.1))
            (gr_line (start 0.67 0.697) (end -0.35 0.697) (width 0.12))
            (gr_poly (pts
               (xy 0.54 0.67) (xy 0.32 0.67) (xy 0.32 0.3)) (width 0.1))
            (gr_line (start -0.35 0.697) (end -0.35 -0.69) (width 0.12))
            (gr_arc (start 1.26 0) (end 0.67 0.697) (angle 98.7) (width 0.12))
            (gr_line (start -0.35 -0.69) (end 0.66 -0.69) (width 0.12))
          ) ${p.GND})
        (pad INT smd custom (at 1.55 2.54 ${p.rot-180}) (size 0.8 1.5) (layers F.Cu F.Mask)
          (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.56 0.67) (xy 0.34 0.67) (xy 0.34 0.3)) (width 0.1))
            (gr_line (start 0.67 -0.697) (end -0.35 -0.697) (width 0.12))
            (gr_poly (pts
               (xy 0.54 -0.67) (xy 0.32 -0.67) (xy 0.32 -0.3)) (width 0.1))
            (gr_line (start -0.35 -0.697) (end -0.35 0.69) (width 0.12))
            (gr_arc (start 1.26 0) (end 0.67 -0.697) (angle -98.7) (width 0.12))
            (gr_line (start -0.35 0.69) (end 0.66 0.69) (width 0.12))
          ) ${p.INT})
        (pad SDA smd custom (at 1.55 2.54 ${p.rot-180}) (size 0.8 1.5) (layers B.Cu B.Mask)
          (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.56 -0.67) (xy 0.34 -0.67) (xy 0.34 -0.3)) (width 0.1))
            (gr_line (start 0.67 0.697) (end -0.35 0.697) (width 0.12))
            (gr_poly (pts
               (xy 0.54 0.67) (xy 0.32 0.67) (xy 0.32 0.3)) (width 0.1))
            (gr_line (start -0.35 0.697) (end -0.35 -0.69) (width 0.12))
            (gr_arc (start 1.26 0) (end 0.67 0.697) (angle 98.7) (width 0.12))
            (gr_line (start -0.35 -0.69) (end 0.66 -0.69) (width 0.12))
          ) ${p.SDA})
        (pad GND smd custom (at 1.55 0 ${p.rot-180}) (size 0.8 1.5) (layers F.Cu F.Mask)
          (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.56 0.67) (xy 0.34 0.67) (xy 0.34 0.3)) (width 0.1))
            (gr_line (start 0.67 -0.697) (end -0.35 -0.697) (width 0.12))
            (gr_poly (pts
               (xy 0.54 -0.67) (xy 0.32 -0.67) (xy 0.32 -0.3)) (width 0.1))
            (gr_line (start -0.35 -0.697) (end -0.35 0.69) (width 0.12))
            (gr_arc (start 1.26 0) (end 0.67 -0.697) (angle -98.7) (width 0.12))
            (gr_line (start -0.35 0.69) (end 0.66 0.69) (width 0.12))
          ) ${p.GND})
        (pad VCC smd custom (at 1.55 0 ${p.rot-180}) (size 0.8 1.5) (layers B.Cu B.Mask)
          (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.56 -0.67) (xy 0.34 -0.67) (xy 0.34 -0.3)) (width 0.1))
            (gr_line (start 0.67 0.697) (end -0.35 0.697) (width 0.12))
            (gr_poly (pts
               (xy 0.54 0.67) (xy 0.32 0.67) (xy 0.32 0.3)) (width 0.1))
            (gr_line (start -0.35 0.697) (end -0.35 -0.69) (width 0.12))
            (gr_arc (start 1.26 0) (end 0.67 0.697) (angle 98.7) (width 0.12))
            (gr_line (start -0.35 -0.69) (end 0.66 -0.69) (width 0.12))
          ) ${p.VCC})
      )
    `
  }
}
