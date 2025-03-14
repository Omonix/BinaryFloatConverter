def dec_bin(ndec):
    nbin = ''
    num = f'{abs(ndec)}'.split('.')
    decimal = float(f'0.{num[1]}')
    nbin = binarization(int(num[0]))
    complement = len(nbin)
    nbin += '.'
    for i in range(1, 25 - complement):
        if decimal - 2 ** (-i) >= 0:
            decimal = decimal - 2 ** (-i)
            nbin += '1'
        else:
            nbin += '0'
    return nbin
def binarization(ndec):
    entire = ndec
    nbin = ''
    while entire > 0:
        nbin = f'{int(entire % 2)}' + nbin
        entire = entire // 2
    return nbin
def sign(ndec):
    if ndec < 0:
        return '1'
    else:
        return '0'
def exponent(nbin):
    return binarization(len(nbin) + 126)
def mantissa(nbin):
    new_bin = nbin.split('.')
    new_bin = new_bin[0][1:] + new_bin[1]
    return new_bin
def convert_IEEE74(ndec):
    nbin = dec_bin(ndec)
    sign_bin = sign(ndec)
    exponent_bin = exponent(nbin.split('.')[0])
    mantissa_bin = mantissa(nbin)
    return (sign_bin, exponent_bin,  mantissa_bin)

floater = convert_IEEE74(float(input('Num to convert : ')))
print(f'Sign : {floater[0]}')
print(f'Exponent : {floater[1]}')
print(f'Mantissa : {floater[2]}')
print(f'Binary : {floater[0] + floater[1] + floater[2]}')
