
class logic {
    get_bmi(height, weight) {
        let Mhight = height / 100
        return Math.round((weight / (Mhight * Mhight)))
    }
    get_bmr(height, weight, age, sex) {

        if (sex == "male") {
            const bmr = (weight * 10) + (height * 6.25) - (5 * age) + 5

            return bmr
        }
        if (sex == "female") {
            const bmr = (weight * 10) + (height * 6.25) - (5 * age) - 161
            return bmr
        }
    }

    get_cal(bmr, activity) {

        if (activity == 1) {
            const cal = bmr * 1.2
            return Math.round(cal)
        }
        if (activity == 2) {
            const cal = bmr * 1.375
            return Math.round(cal)
        }
        if (activity == 3) {
            const cal = bmr * 1.55
            return Math.round(cal)
        }
        if (activity == 4) {
            const cal = bmr * 1.1725
            return Math.round(cal)
        }
        if (activity == 5) {
            const cal = bmr * 1.9
            return Math.round(cal)
        }
    }

    get_bmi_standart(bmi) {
        if (bmi < 16) {
            return "Severely underweight"
        }
        else if (bmi > 16 && bmi <= 19) {
            return "Underweight"
        }
        else if (bmi > 19 && bmi <= 24) {
            return "Normal"
        }
        else if (bmi > 24 && bmi <= 30) {
            return "Overweight"
        }
        else if (bmi > 30) {
            return "Obese"
        }

    }

    get_recomandet_dcal(weight, height, bmi, time = 24, cal) {
        let Mhight = height / 100
        const target = Math.abs(22 - bmi) - (Mhight * Mhight)
        console.log(target);

        let gcal = 7700 * target
        console.log(gcal);
        let tcg = gcal / time

        if (22 - bmi >= 0) {
            let r = cal + (tcg / 7)
            console.log(r);
            
            return Math.round(r)
        }
        else {
            let r = cal - (tcg / 7)
            console.log(r);
            return Math.round(r)
        }

    }

    constructor(height, weight, age, sex, activity) {

        this.height = height
        this.weight = weight
        this.bmi = this.get_bmi(height, weight)
        this.bmr = this.get_bmr(height, weight, age, sex)
        this.cal = this.get_cal(this.bmr, activity)
        this.condition = this.get_bmi_standart(this.bmi)
        this.recomandetCal = this.get_recomandet_dcal(weight, height, this.bmi, 24, this.cal)
    }
}

module.exports = logic

