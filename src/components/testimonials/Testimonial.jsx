import React from 'react'
import "./testimonial.scss"

export default function Testimonial() {
    const data = [
        {
            id:1,
            numb:`${process.env.PUBLIC_URL}/assets/2.png`,
            img: "https://prageethnilushaka.files.wordpress.com/2018/05/portfolio-logo.jpg",
            icon:`${process.env.PUBLIC_URL}/assets/about_web.png`,
            desc: "This website is one of my lifetime projects. I created it with only ReactJS. I'll update it and improve it through time pacing with my coding skill. Thanks for visting",
            title: "About this page",
        },
        {
            id:2,
            numb:`${process.env.PUBLIC_URL}/assets/1.png`,
            img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQkAAAC/CAMAAADaUtmKAAAAt1BMVEX///8STc0ARswAQssASMwAPsoAQMsAQ8sAPMoMS80AL8h1k9sAOckAO8kAMcj19/hYfNUANckALcjx9fooWM6Dm9qsu+OrvulwjtoAN8na4vPr8Pj8/f7j6vagteLK1e8wYM+YreJAatG8yuvT3fKTpeAaU81KcdOVquKBm+DM1+5khNe4xupHb9JRdtQsXc9sito2ZM8ZVc1lgtmsv+CEodtTftLb4u2puOYAG8YAJMeYsd9betVafFxkAAAVD0lEQVR4nO1da4OaOhMOIVy9oCJeuMhVFFEBPT2vbff//643gYDoqtv2bHex5fnQ7gqyzMNkMjOZDAC0aNGiRYsWLVq0aNGiRQVTUT77FhoBPcoYxtOsz76Pd4Wh25O11ul0oi/Lifpj39FYQWIYSRDWv/fePg7/m8y8A+R4AULIDiVNB8BOO1vjja/FPOYhBxd9yH3+ZgRaAnmIJCKVhHrZFgDVPQz7Ax8ffKT3rshUECcfdbu/C4Yb9qBUPlooDDaYmrg/z07YENoz7luyufdVtSudmZDGz2049ZnAVuJIgjTDw2LrySgNsDYswxEaXI8QRdW337XOceVlSY0IrBT+54jwLtBTFp55gLBjAWWRjMauAZTtfj7cTy9oUCxfOzpI5FkBIjyYLohgnthoqhE888BAHvOgrsNRtjWBpYWjkJjNM4JT7CBeQFfynwFnnyXIf8U2FM5CoW5sAXOJRp6NhT7y8so3z6cqfjrGNrUkQZIQZHlOFC6pQN5di9JkKLF45kHidzowXX64w7L4mcx2auqgnvZcxQLhQIDhrrPY2tbymore4K1pt3kIGFjjwcHGbsEMd1gfts4oXJ/lUScvPR6VusAwiTeb2uVha37BAz4M0fZz5PllnM4TBiMwLlaERPYwHdtMTk7VbGjaKcOjUlCB3TFwenGZwZlOBr442M2SxOWHC/NfoPFnhRBnBghe+ocJGRej8bTiwXAzrpRUYrmdqwM94Rb16xgHVBHhqIor4F9F7ePl+WWklY+MB4YNlA7XXZtgs+sz08pMBilT6o0kdDO3cDXVXf9L/UpWUlwKX4ecYGUs9rvdj5XmP+BYaQRisQ8wFYaxCqyXvnAWwfcqdYB8uK553Ef54pmba4bHkEpfIuUxcfZHSPEOiPlKIVYW0L1RtgFKJAtaOS7MiSOikiomvZIrla8sQeD7wfm3Dssg5zn87qgkAkpYB5Y9iP+dMMO4fO7KNOHojAn53en1tBgPF68+qwFbUf4pxseCLxVib4FNJh8tEKzkrHzw5tShPDACTG97SqveowhDwY7X4QmUwqbOkETsmtYl078msovSUG4zakwlXlrei8fVBD0K1bciwzXfqzDCQlAhxFOiIw9UYB/kYzkCNmcemMWDx6oLzqM/4iE0eL9b/k3Yw0JQHCy5QzQBykwOS1W3Bl1EnYfkjazLdNh5cHTLSdx73fDvwjTPMSFmCoy9/GIAP5x36LNXNQGWLsb08VUw0v6DmVI5SGJw/3ATYOSyCpkOfKbrAjPqj0uF2I7pwGAPC/PhRXKojPPgrBnkG57KSwkTYgrAl24YgCAbzWgG2xpQHiBc/lhSeys/yMtMWaHZ0Ucg4AgJ64K6lwcK+M5VFt5FdGB04x+Oqlfo/qm6AB/Zkc8HNpeIsUGAenhk7OUdFUXPeGoonZ8Y3foDo2mEzc5f2TwOGC0wnYeYjbBb6q/LFTMGZH7OM0y5u06FmbGNZmIA+b0CtKFngBPHUNuvr6iF4I8/uaCnd++H3zu+yetAOi/OgHmUscHsDMuRcaKpKwjfnjmvcWTvOl8rrsl57qi/BKrTXwPVkzvFFGjSxTxJXP1C/tHun+4dWjV5QczkFsBC4hboTJdKEBwEGnr/WuyYJPeOeN0Gpyi2U2CzaAN8DtG7XFALISS/6BCuZf32AdWZNzgYNcCWDy2wmCeFZVRmRfQtcfGv3rXevWMNDGb8i5f8EEx7joFnjn3hQxok45hHGf8hq5I4tz/Xu012rBZDTwUzOS5spc0UTgSSysBDnb0a2tu3nAKNvz3zTuUG5ycmo50JjjJ9VlOatobjUhTT4fns4v4XY557I81gy7eTV53eD1bkfAacHXawywy91qNx56oyETtIJtMqNAVTidhT/rFWmKObo8B0ju9yz78F6h4o+yE1cCmthOHT6viMWg1xlc8jdpnMfMNDGu9ufaqPGjw4VMVc0ZS0sqc53ZpHfCrz3ayXT4z2mK52SOxDxyANbw2DNdPgwYHVnxJheDSny59TCHpZDsDNsEHd2kSHyhT44ZFUrnjLoxg3OegAe7mYLQ2HPm2xpvcrmp7Ih08k5mthsx7N9T8yFVv5hsoE/TsOVyOgjQoirJAubok1N6LIbmLXYlv4GZI4wKqxploxf1AeEoxuBG7HRie2B0UEXRHB1zTCpBlthCeOIKSpToNUFhSfO/cva9zI4RmjRmdzi9DQKhf5+fqC95qtiPARPQGGOrGjufng788Eyvx1jiLav/fNvz+MpCSibtLMoiCVJ0Sc60tQiJ/s99xWIO/uFc3XlbnGvMlWooBaGks2rn9czKBdPOD9WgUa9saxRBqXE3d3JjVf29MovnVio6BklAh46Q5lRFE4jSyZXtQXIgZ74jGZcuFd4cxXmVuLbX7N2Z76Eeiyqpik/hkBu8c6c1VoicYqML18QN2TzuSv3e24yWm7AilLXSXpMn4klYQoUckCOHMFojw5P3dtpnltMYNHS2PNwJLGGrllrGOHGAna5drxJYhlnWIzAtPbFwXq9Sy6a3DWrsC2rDG7LgezerzAYb97zb0molCGGJ/A3Elr6Vee1aTJGZocQVmfLVwbP2UzWaYmsOc3y7ERtIA6WG/v+Ur+6EIHzKTpY0MdlwVkZS2YiVE/w+44iL0yFIhHWVTnwLz+Fjh1L5yHWeNdibKUVhIKwdQXL8syb4+nQN+3KDn6Yi9VBbmYhnAwobZV1X0bmMd9/qULkxFdzCp24wvN3NIGlGHXtks2ZyAW+8XefG4Aa1I8TMulZZiQpzs7FP2kgk1/nmLNh/mXLlzIrO5+Ko0vzg3Kon24op906BLgDCgJSVPEXeR0/Fw3ghnP8ijKxTW2cQKHWL6Yxd/cF/oi1B/8sO5YfW90fgbDHJe2UCg9iRUVaglURlIxVdjLgDwT5xOsoa1zkbYvEtnLIHEG0HkHB9sVfRUCubboFzQ6BCXolJswuHIZ08zo4tcaqKT0flUGoBz6QsnSO1xpM0hRSBySkqHi11r2YV1LWSmNJ8Iu40u0qj7zKkVXsZ4E3Wq6EFgtnxyUVKwcLUkwgM2cmajNw1ltqavx4YbioFKgc+4pLoRi18CIK7Unme2qZBkEq8rVErCl2FdM1CqorKfaLbusqrRr49tlS6GMDbDKEFQIL8KLk1TOvThk882SsNpeyJP8RPu+rNK5lIRa4EWFL8gpN3OJ6ZXtt6pym5yhYu6Qao63x3yABO+FSvPhhSKnAp4UJJjn2RLiJkgI3qj9cMX8GHwBxJPOf64tBQXz5kfgFTaVMexdWDQrOYzH4zADZGsc/ml8yG6u9W6S/CBZPVUO+Y/eWSVm88ZbyTN2pfd8HVcrBUDeR4P+dAv0qFl95Rx3WMK9WL2BsKttTr33n+21YeM9iDP2pUpIN9LTbtqpMLtbIOaeT+qk9WSEITY/dVshqFK0t0rKzGjIwhLdO8930q1OYecXF0l7jQ/Bz5hVfuLt2hc/PDuS0k1LoVfbKa/r0ja3SyeaiXJ/D5Yzu51LMvblni8mnymvYZ6zvFx6SVXS7MqAS1RFEQ/6ISyrVS/+xj6EtAzekHC1Eqz1G1x6+gqVvWTYalvjd63E9+IDO6zyWa9qps71JRm1CV/olyOh0evhVzDOi5xcFR8Ec4EaQJE6nWo5QqTwylEKSisizujgOnKl9bxtVhqK8+CQ4NnMT6tPudIxcsv9PperhGUaGJWNFNRVOVgk/olCL7rViaI2dURsNaGUZeubpBCRv0hEHoVCaK9M3jjnqejhJuLGITwvYIT1SXRQNRKBB7paoaaFpnRrpqJoVSWxER0ZW6YyO43evPEaxjkTdaETwPTOXgS7pHIWnTlqa6ab3HpAhnKjzs6eBftE8QaBf17eq9sJDCWpUeGUe3/yHQ7Io8youUbxHh0/k/DckYZ9pmmD4FTZg/rckUPxznJJ4p7SlBItYKnnSNaLJY7aDTvjziON//cDhXgXaDWDyV5ZOGVQowl1B3auCVMJWwIu95hIzg8e8pFh+rvueZlQelUw0XzUp47XPman9pQZKHp58xXdYxkJ6Xm9lcSThkymvky42nKpJDR+we81BnUBkleO0LQuILYXcKfZBtAQg5w8YJFOwPKjTLioOKoM6FPhpS4p97rAQ3f4upASEnjGiR1SlIuNhOQNErIExtTxS/vmPh9xvUbmZs2Yxl/XE0n5BxDlP14XVED4XP5UheiiWuhmWkVfveLiHiSIOk8Uhl9gwdYlqS0F1rHNfogLrCD/PlGG6gr+ZeGUeHuXq7n1OHirruiCxnD/T9PLhh5A7V0+1rvttuyYe6AYEkJj78tz95DeXYonMXeT8up0Rdo+XlemkoUxyAxW/z5RNv8mFvyVYK+TUmco2HdgIOkxjXJAyPJovNe+pFmD93T9INTrZ8yI2sPRrga+2zkOVrvdahBHJ9veaofx3U30z4Qle8UEk3cE/SGY+ikO5fH0iQ1lDer41aQg8au3ld2y14Mxzw2zyZ/BAyAdtm7MiOzhy33XwLDdOJFYAQrz3TOGGHeh3SrGlgSRmU2u2DAt/xR5sMcJZA5hYfOrbX8SM/4GFXm7xx7M4s5yvV4vtU7sHfgex8K8cTA+lrlPGWk9RiTepIJ6CwIBmTirZUPEhdedQf8UnOCNfRt3gHjhOPkD1YFCX/XeiityQE4cTP9cGnL4yXXK5XqcQJZlZv4zLfD9Kuw4PDfVv2QBQR4l8elPmyruw/BnmcSVL5vA1hJHFgLPMdlA8/8eFihMa7PQZoNdvl9lNZhF7lY3/oYRcRev9zC1aNGiRYsWLVq0aNGiRYuPg7sfDF7IMrCPf9j7ANjkfzv/r8L+j8r730HKI8SRPMVCRIj0ZpiQ/6dgKqIzxCetqfkpkN1BefkqqT8hW6UmPMPwmIn6giL7R6yRvoG7TMg8xxfN4Diu/4QViD+Ne0yotm1vJImRpA3+6Q/PfOe4x0QOhJlAn3p7H4g3mYCfensfiJaJEi0TJQgTQs6E8JczoQm07QrZWUkab/y1TGxInYUw0EgzUYn0+vxrmSg2AqJ8ITnf6fP3MqF65f7Zbl72X2eC6MnfwwQORw/zebfbpYWokz7P9ykTLMdz7Cfe2cfDVNVn3bjQokWLFi0+EEbY+JavHwX931eVRsqP1x5VvdHuNklrFjxvt9plbuDtPG+APadMI30z3TQCxszJVj7wTm4WYOeK9P9ys0NW9GKwVjtvV5Syux7J5k4cshBgZkvytqAFjlZexklMjgcvY0d7Bi6i5UqMtK09jDUtmeuAvGJUGUWzIxhzmusNp6ulJmIWoiGOz+V0EY/yfegW3C07iPSRNjPxgD9wRzkTfXzUmmsgEEJ3ySALBJzjduTnaHnmjrA8NmmYvpFPYJgzsfSX0yHxrZNE22pCbwGiLghkYjeifJuUJazx+XOsAfY8Ja/JdOWciXmH9HpbghfeIL2/ZuCF9PqJnmNn7TpnYvjF9wdDvWBimKzBQCASr7trEKEjUrUuWOPDgNoJG0b/U5TxCoB0rMJjxYToLZcRv1SYXAt2DGCfQx1yFEyIDD/P8LOlOoGlkMjBUzcAEWf0OloPLOcWOA0l8rRVD4VjGzgZMHCgPhOMkgku9LKMXapS3opiL4D5E7VrKZiQ/zEc8nbRLr5zlTCR5v3wUsEiA2PNeyyYyj7Qt+mQLG1YcE3atBzBQnR2DudejQ5zTAysmTiAIb1Xffspyl0LJkZYyh6+/dBRgU9eIuzLM9JEE+t/NMdmEQrAgJ4BzLRfMLEE5kKeAidZasuxUzFBLCa2E9EQX2Ldd0Ek+pix8BkmD7D8imXwv2L7uP62BtMRGosSEbYzYsZz0rCoMyJ2Ec8d/pxNYD9/x6TFCwyUB2DzlSwDrr9t3K85EyOsUtZIw8OnfwjlPXmV0jCBw+fYYRsssGG3FlgQc4IfZOBGi8LSB2st3wu5If7ClvSoMU6RS9/oMMEIyDFyrrrY6PkP5om8V/BEmgD52rLYKrXV3Ofeev7D2Ai327tlz9Pjy3qfSV7fl7vsjYtl4id40xOFK61+yaLf/ZJ+kJ5sYwxVheVmfb1F9paSXH/2ffHPnetuJ9vrFqFNdi2VtDtkiCl3w54wwLPigbzeh+mQjlXDuVQUCZ3mJ9IIzSLt6IfzvQEs8nZRHTvjDhIQ2yemcDlnJcT3VOcFU8jgKSPweC7xSYSCD0fIBGaHG/aKNvZxV5Bgz9PZJfY7yTvVGuB5eqzrezjIWMtHfyHhuzqQ91xhl9Dqjif+6ls+3504HFudsGvV6Xf8NR8Cq0+YGJ1AMp6cTicyF2xOLvsyOSkJZcLqJ5Ptru+DiB8TJrCH2dP8SM474fknjZ+dthaPmeBm2D35fCbsEX7qRrpRGdL60x+64EDKybBOzEQsnxrlM9+JZWeECYsjged0bRqkesjCOpHUmnOrokbeNU1ExUwUPqmUgQiKJFbBf4q4Gu6psCsB8SlyJtB8AxrAhEubZ+tDcpsGcwThAMdRTISjTvy7VZj/E5MOgwlr+Ni/VvBnptHz0nggYibCOI5pw0OjYGKcxjFKAfYzMWJJjcJYMDATblcHKvlyfvJmOCmY8AaO0wQmlmLBREAcauwG7wGjTeTtIQLjDEdd3eJ9oSdBd7KJYJBIw5Yhbxu9LD7ucyZmsxkVw+jlTByOxyNmIn+lAZghNUJqN9Uk/Kd0MOlDWLhVZyZmtuyuPp+JCbF2pqZbHAkWdT4i6uAxYQT2kLyYKCyY4A2/5zBGgDVH3bhDOx8d+tXooEzQ0eEx5OE7BxAJOCxLmDxgMzad3jUTKRhIh8+PUNW5p4Lo2wQMhjgy2vcDwoTVFTo47JopYIPyJ0umjZhlLJDxAVA7fcwEnTuSDCiKWig8ZYJazKncUYDbjwgTwIMhUKSxDoyX+WsmDLYJr3Lw0ZDtpyTZOIJDdgFMTALQSEpu2ZsLozBf+V30LaBynAWsbAT74otqfcUTjP51AQ7zfl/+WpShGiPsT5shjlZNko/pdHt8f2CCDo7Vgi5rAjuUJRnSLtT2tymxuUvgxCRNdvw8BioYEzePE0zbJW+8M22d9GkiPpY1ce3CFbJs7GME5B9yVn4CmVjwP7btb32/eMxm/i07IGcR66OfFuTKOpl+NuQf1Xe3ZfCl5lfAf2xTnf/ssPm/oQj1R2DET5F/atGiRYsWLVq0aNGiRYsWLVq0+J34P1oftIWbPWkfAAAAAElFTkSuQmCC",
            icon:`${process.env.PUBLIC_URL}/assets/school.png`,
            desc: "Graduated only in 7 out of 8 semesters, i had scholarship for high grade at 5th, 6th, and 7th semester. With great environments, top tier education, University of Information Technology makes me who i am today.",
            title: "My college",
            featured: true,
        },
        {
            id:3,
            numb:`${process.env.PUBLIC_URL}/assets/3.png`,
            img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAALVBMVEXyUCJ/ugAApO//uQD////yTh/zVy2EvRYWp/D/uxbyTBvzXziJvyQkq/D/viRJQpTmAAABDUlEQVR4nO3PyRHCQBAEwRHo5vDfXD1ZC5oYyHKgIqtSLev8aZtixYCEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhIQdhUuq81vCNdZjED63WDX/eoT9I+wfYf8I+0fYv9pjvYbt+4hVt1j7IDzusQgJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQn/WXgB6/1wCkBWrdwAAAAASUVORK5CYII=",
            icon:`${process.env.PUBLIC_URL}/assets/hobbies.png`,
            desc: "Beside coding skills, i also have many others. Two i can tell is Microsof Office Specialist in 2018 and TOEFL IBT in 2018. I can perform MS fluently, English skill is above avarage. ",
            title: "My certificate",
        },
    ];
    return (
        <div className='testimonials' id="mystory">
            <h1>My Story</h1>
            <div className="container">
                {data.map(d =>(
                    <div className={d.featured ? "card featured" : "card"}>
                    <div className="top">
                        <img src={d.numb} className='left' alt="" />
                        <img className='user' src={d.img}  alt="" />
                        <img src={d.icon} className='right' alt="" />
                    </div>
                    <div className="center">
                        {d.desc}
                    </div>
                    <div className="bottom">
                        <h3>{d.title}</h3>
                    </div>
                </div>
                ))};
            </div>
        </div>
    )
}
