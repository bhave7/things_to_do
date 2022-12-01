

def get_data_from_url_encoded_payload(payload):

    request_payload_as_string = list(payload.keys())[0]

    key_value_pairs = request_payload_as_string.split(';')

    final_data = dict()
    for each in key_value_pairs:
        split_string = each.split(':')
        if len(split_string) == 2:
            final_data.update({split_string[0]: split_string[1]})

    return final_data
