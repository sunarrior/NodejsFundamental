from pwn import *
from sympy import *
from Crypto.Util.number import *
import random

e = 65537
random.seed(e)

def gcd(a,b):
    while b!=0:
        r=a%b
        a=b
        b=r
    return a

def recover_modulus(msgs):
    msg_gcd = reduce(gcd, [(p ** e) - c for p, c in msgs if p > 1])

    assert msg_gcd > 1

    return msg_gcd

rem = remote('litctf.live', 31792)

rem.recvuntil('My secret flag is ')
cf = rem.recvline()[:-1]
#print(cf)

rsa_pair = []

for i in range(157):
    test_e = nextprime(random.randint(1, 100000))
    rem.sendlineafter('Guess Private Key (1) or Encrypt Message (2): ', '2')
    rem.sendlineafter('Enter Message: ', '')
    rem.recvuntil('Your Message (remember to convert): ')
    tmp_c = rem.recvline()[:-1]
    #print(tmp_c)
    rsa_pair.append((test_e, tmp_c))

