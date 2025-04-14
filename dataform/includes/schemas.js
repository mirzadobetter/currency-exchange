const shared = {
    "date": "The reference date for the currency rate.",
    "currency_from": "The currency from which the rate is computed.",
    "currency_to": "The currency to which the rate is computed.",
    "rate": "The rate computed for the currency pair."
}

const landing = {
    "currency_exchange_history": {
        "description": "External table containing history rates of a currency pair.",
        "columns": {
            "date": shared.date,
            "currency_from": shared.currency_from,
            "currency_to": shared.currency_to,
            "rate": shared.rate
        }
    },
    "currency_exchange_previous_day": {
        "description": "External table containing yesterday's rates of currency pairs.",
        "columns": {
            "date": shared.date,
            "currency_from": shared.currency_from,
            "currency_to": shared.currency_to,
            "rate": shared.rate
        }
    },
    "currency_exchange_current": {
        "description": "External table containing current rates of currency pairs.",
        "columns": {
            "date": shared.date,
            "currency_from": shared.currency_from,
            "currency_to": shared.currency_to,
            "rate": shared.rate
        }
    }
}

const curated = {
    "currency_exchange_history": {
        "description": "Table containing history rates of currency pairs.",
        "columns": {
            "date": shared.date,
            "currency_from": shared.currency_from,
            "currency_to": shared.currency_to,
            "rate": shared.rate
        }
    },
}

const commons = {
    "currency_exchange_current": {
        "description": "View containing current rates of currency pairs.",
        "columns": {
            "date": shared.date,
            "currency_from": shared.currency_from,
            "currency_to": shared.currency_to,
            "rate": shared.rate
        }
    },
    "currency_exchange": {
        "description": "View containing history rates of a currency pair up to the current day.",
        "columns": {
            "date": shared.date,
            "currency_from": shared.currency_from,
            "currency_to": shared.currency_to,
            "rate": shared.rate
        }
    }, 
}


module.exports = {
    commons,
    curated,
    landing
}