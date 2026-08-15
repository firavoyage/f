import time
import sys

# Increase the maximum string conversion limit to support 100M+ digits
sys.set_int_max_str_digits(105_000_000)

def compute_inverse_sqrt2(target_digits):
    """
    Computes 1/sqrt(2) to target_digits using Newton-Raphson:
    x_{n+1} = x_n * (3 - 2 * x_n^2) / 2
    """
    # Add a guard band of 10 digits to prevent rounding errors at the tail end
    extra_precision = target_digits + 10
    
    print("[1/3] Initializing seed values...")
    # Seed with a high-precision float approximation
    current_digits = 16
    x = int((1 / (2**0.5)) * (10**current_digits))
    
    # Track iterations
    step = 1
    
    while current_digits < extra_precision:
        # Newton's method doubles the number of correct digits each iteration
        next_digits = min(current_digits * 2, extra_precision)
        print(f"      Iteration {step}: Scaling precision to {next_digits:,} digits...")
        
        # Shift x to align with the new target precision size
        shift = next_digits - current_digits
        x <<= shift
        
        # Precompute constants scaled to the current precision block size
        # three = 3 * 10^(2 * next_digits)
        three = 3 << (2 * next_digits)
        
        # Perform the Newton update rule: x = (x * (three - 2 * x^2)) >> (2 * next_digits + 1)
        x_squared = x * x
        scaled_diff = three - (x_squared << 1)
        x = (x * scaled_diff) >> ((2 * next_digits) + 1)
        
        current_digits = next_digits
        step += 1
        
    return x, extra_precision

def main():
    TARGET_DIGITS = 100_000_000
    
    print(f"--- Starting 100,000,000 Digit Calculation of Sqrt(2) ---")
    start_time = time.time()
    
    # Step 1: Compute 1/sqrt(2)
    inv_sqrt2, total_bits = compute_inverse_sqrt2(TARGET_DIGITS)
    
    # Step 2: Convert 1/sqrt(2) to sqrt(2) by multiplying by 2
    # Since we are working with shifted integers, multiplying by 2 gives us sqrt(2)
    print("[2/3] Finalizing sqrt(2) identity transformation...")
    sqrt2_large_int = inv_sqrt2 << 1
    
    # Trim the guard band digits by integer division
    sqrt2_large_int //= 10**10
    
    # Step 3: Convert to string and write to file
    print("[3/3] Converting massive integer to string format (this takes time)...")
    raw_string = str(sqrt2_large_int)
    
    # Format string as "1.414213..."
    formatted_output = raw_string[0] + "." + raw_string[1:]
    
    print("Writing results to output.txt...")
    with open("output.txt", "w") as f:
        f.write(formatted_output + "\n")
        
    end_time = time.time()
    total_duration = end_time - start_time
    print(f"Success! 100M digits written to output.txt")
    print(f"Total processing time: {total_duration / 60:.2f} minutes.")

if __name__ == "__main__":
    main()
