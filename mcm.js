function MatrixChainOrder(p , n)
{
	var m = Array(n).fill(0);

	var i, j, k, L, q;
	for (i = 0; i < n; i++)
	{
		m[i] = Array(n).fill(0);
	}
	// console.log(m);
	for (L = 2; L < n; L++)
	{
		for (i = 1; i < n - L + 1; i++)
		{
			j = i + L - 1;
			if (j == n)
			{
				continue;
			}
			m[i][j] = Number.MAX_VALUE;
			for (k = i; k <= j - 1; k++)
			{
				q = m[i][k] + m[k + 1][j]+ p[i - 1] * p[k] * p[j];
				if (q < m[i][j])
				{
					m[i][j] = q;					
				}
			}
			console.log(m);
		}
	}

	return m[1][n - 1];
}
var arr = [ 1,2,3,4];
var size = arr.length;

console.log(
	"Minimum number of multiplications is "
	+ MatrixChainOrder(arr, size));
