module.exports = {
    params: {
        designator: 'JST',
        pos: undefined,
        neg: undefined
    },
    body: p => `

    (module JST_PH_S2B-PH-K_02x2.00mm_Angled (layer F.Cu) (tedit 58D3FE32)

        (descr "JST PH series connector, S2B-PH-K, side entry type, through hole, Datasheet: http://www.jst-mfg.com/product/pdf/eng/ePH.pdf")
        (tags "connector jst ph")

      (fp_text reference "${p.ref}" (at 0 -3.2) (layer "F.SilkS") ${p.ref_hide}
        (effects (font (size 1 1) (thickness 0.15)))
        (tstamp b68bb25c-687d-44b1-b966-dad4cac66b35)
      )

        ${p.at /* parametric position */}

        (fp_line (start -2.25 0.25) (end -2.25 -1.35) (layer Dwgs.User) (width 0.15))
        (fp_line (start -2.25 -1.35) (end -2.95 -1.35) (layer Dwgs.User) (width 0.15))
        (fp_line (start -2.95 -1.35) (end -2.95 6.25) (layer Dwgs.User) (width 0.15))
        (fp_line (start -2.95 6.25) (end 2.95 6.25) (layer Dwgs.User) (width 0.15))
        (fp_line (start 2.95 6.25) (end 2.95 -1.35) (layer Dwgs.User) (width 0.15))
        (fp_line (start 2.95 -1.35) (end 2.25 -1.35) (layer Dwgs.User) (width 0.15))
        (fp_line (start 2.25 -1.35) (end 2.25 0.25) (layer Dwgs.User) (width 0.15))
        (fp_line (start 2.25 0.25) (end -2.25 0.25) (layer Dwgs.User) (width 0.15))

        (fp_line (start -1 1.5) (end -1 2.0) (layer F.SilkS) (width 0.15))
        (fp_line (start -1.25 1.75) (end -0.75 1.75) (layer F.SilkS) (width 0.15))

        (fp_line (start -1 1.5) (end -1 2.0) (layer B.SilkS) (width 0.15))
        (fp_line (start -1.25 1.75) (end -0.75 1.75) (layer B.SilkS) (width 0.15))

        (fp_line (start -1 -1.5) (end -1 -2.0) (layer F.SilkS) (width 0.15))
        (fp_line (start -1.25 -1.75) (end -0.75 -1.75) (layer F.SilkS) (width 0.15))

        (fp_line (start -1 -1.5) (end -1 -2.0) (layer B.SilkS) (width 0.15))
        (fp_line (start -1.25 -1.75) (end -0.75 -1.75) (layer B.SilkS) (width 0.15))

        (pad 1 thru_hole rect (at -1 0 ${p.r}) (size 1.2 1.7) (drill 0.75) (layers *.Cu *.Mask) ${p.pos})
        (pad 2 thru_hole oval (at 1 0 ${p.r}) (size 1.2 1.7) (drill 0.75) (layers *.Cu *.Mask) ${p.neg})
    )
    `
}