import { useTranslation } from 'react-i18next';

const IrregularVerbTable = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full overflow-x-auto h-[calc(100vh-88px)]">
      <table className="table-fixed border-collapse w-full">
        <thead>
          <tr className="border border-blue-300 bg-blue-300">
            <th className="w-5">STT</th>
            <th>{t('Infinitive')}</th>
            <th>{t('Past')}</th>
            <th>{t('PastParticiple')}</th>
            <th>{t('Meaning')}</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>1</td>
            <td>abide</td>
            <td>abode / abided</td>
            <td>abode / abided</td>
            <td>lưu trú, lưu lại</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>2</td>
            <td>arise</td>
            <td>arose</td>
            <td>arisen</td>
            <td>phát sinh</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>3</td>
            <td>awake</td>
            <td>awoke</td>
            <td>awoken</td>
            <td>đánh thức, thức</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>4</td>
            <td>backslide</td>
            <td>backslid</td>
            <td>backslidden / backslid</td>
            <td>tái phạm</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>5</td>
            <td>be</td>
            <td>was / were</td>
            <td>been</td>
            <td>thì, là, bị, ở</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>6</td>
            <td>bear</td>
            <td>bore</td>
            <td>borne</td>
            <td>mang, chịu đựng</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>7</td>
            <td>beat</td>
            <td>beat</td>
            <td>beaten / beat</td>
            <td>đánh, đập</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>8</td>
            <td>become</td>
            <td>became</td>
            <td>become</td>
            <td>trở nên</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>9</td>
            <td>befall</td>
            <td>befell</td>
            <td>befallen</td>
            <td>xảy đến</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>10</td>
            <td>begin</td>
            <td>began</td>
            <td>begun</td>
            <td>bắt đầu</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>11</td>
            <td>behold</td>
            <td>beheld</td>
            <td>beheld</td>
            <td>ngắm nhìn</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>12</td>
            <td>bend</td>
            <td>bent</td>
            <td>bent</td>
            <td>bẻ cong</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>13</td>
            <td>beset</td>
            <td>beset</td>
            <td>beset</td>
            <td>bao quanh</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>14</td>
            <td>bespeak</td>
            <td>bespoke</td>
            <td>bespoken</td>
            <td>chứng tỏ</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>15</td>
            <td>bet</td>
            <td>bet / betted</td>
            <td>bet / betted</td>
            <td>đánh cược, cá cược</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>16</td>
            <td>bid</td>
            <td>bid</td>
            <td>bid</td>
            <td>trả giá</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>17</td>
            <td>bind</td>
            <td>bound</td>
            <td>bound</td>
            <td>buộc, trói</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>18</td>
            <td>bite</td>
            <td>bit</td>
            <td>bitten</td>
            <td>cắn</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>19</td>
            <td>bleed</td>
            <td>bled</td>
            <td>bled</td>
            <td>chảy máu</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>20</td>
            <td>blow</td>
            <td>blew</td>
            <td>blown</td>
            <td>thổi</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>21</td>
            <td>break</td>
            <td>broke</td>
            <td>broken</td>
            <td>đập vỡ</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>22</td>
            <td>breed</td>
            <td>bred</td>
            <td>bred</td>
            <td>nuôi, dạy dỗ</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>23</td>
            <td>bring</td>
            <td>brought</td>
            <td>brought</td>
            <td>mang đến</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>24</td>
            <td>broadcast</td>
            <td>broadcast</td>
            <td>broadcast</td>
            <td>phát thanh</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>25</td>
            <td>browbeat</td>
            <td>browbeat</td>
            <td>browbeaten / browbeat</td>
            <td>hăm dọa</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>26</td>
            <td>build</td>
            <td>built</td>
            <td>built</td>
            <td>xây dựng</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>27</td>
            <td>burn</td>
            <td>burnt / burned</td>
            <td>burnt / burned</td>
            <td>đốt, cháy</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>28</td>
            <td>burst</td>
            <td>burst</td>
            <td>burst</td>
            <td>nổ tung, vỡ òa</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>29</td>
            <td>bust</td>
            <td>busted / bust</td>
            <td>busted / bust</td>
            <td>làm bể, làm vỡ</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>30</td>
            <td>buy</td>
            <td>bought</td>
            <td>bought</td>
            <td>mua</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>31</td>
            <td>cast</td>
            <td>cast</td>
            <td>cast</td>
            <td>ném, tung</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>32</td>
            <td>catch</td>
            <td>caught</td>
            <td>caught</td>
            <td>bắt, chụp</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>33</td>
            <td>chide</td>
            <td>chid / chided</td>
            <td>chid / chidden / chided</td>
            <td>mắng, chửi</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>34</td>
            <td>choose</td>
            <td>chose</td>
            <td>chosen</td>
            <td>chọn, lựa</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>35</td>
            <td>cleave</td>
            <td>clove / cleft / cleaved</td>
            <td>cloven / cleft / cleaved</td>
            <td>chẻ, tách hai</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>36</td>
            <td>cleave</td>
            <td>clave</td>
            <td>cleaved</td>
            <td>dính chặt</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>37</td>
            <td>cling</td>
            <td>clung</td>
            <td>clung</td>
            <td>bám vào, dính vào</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>38</td>
            <td>clothe</td>
            <td>clothed / clad</td>
            <td>clothed / clad</td>
            <td>che phủ</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>39</td>
            <td>come</td>
            <td>came</td>
            <td>come</td>
            <td>đến, đi đến</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>40</td>
            <td>cost</td>
            <td>cost</td>
            <td>cost</td>
            <td>có giá là</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>41</td>
            <td>creep</td>
            <td>crept</td>
            <td>crept</td>
            <td>bò, trườn, lẻn</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>42</td>
            <td>crossbreed</td>
            <td>crossbred</td>
            <td>crossbred</td>
            <td>cho lai giống</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>43</td>
            <td>crow</td>
            <td>crew / crewed</td>
            <td>crowed</td>
            <td>gáy (gà)</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>44</td>
            <td>cut</td>
            <td>cut</td>
            <td>cut</td>
            <td>cắt, chặt</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>45</td>
            <td>daydream</td>
            <td>daydreamed / daydreamt</td>
            <td>daydreamed / daydreamt</td>
            <td>nghĩ vẩn vơ, mơ mộng</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>46</td>
            <td>deal</td>
            <td>dealt</td>
            <td>dealt</td>
            <td>giao thiệp</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>47</td>
            <td>dig</td>
            <td>dug</td>
            <td>dug</td>
            <td>đào</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>48</td>
            <td>disprove</td>
            <td>disproved</td>
            <td>disproved / disproven</td>
            <td>bác bỏ</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>49</td>
            <td>dive</td>
            <td>dove / dived</td>
            <td>dived</td>
            <td>lặn, lao xuống</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>50</td>
            <td>do</td>
            <td>did</td>
            <td>done</td>
            <td>làm</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>51</td>
            <td>draw</td>
            <td>drew</td>
            <td>drawn</td>
            <td>vẽ, kéo</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>52</td>
            <td>dream</td>
            <td>dreamt / dreamed</td>
            <td>dreamt / dreamed</td>
            <td>mơ thấy</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>53</td>
            <td>drink</td>
            <td>drank</td>
            <td>drunk</td>
            <td>uống</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>54</td>
            <td>drive</td>
            <td>drove</td>
            <td>driven</td>
            <td>lái xe</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>55</td>
            <td>dwell</td>
            <td>dwelt</td>
            <td>dwelt</td>
            <td>trú ngụ, ở</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>56</td>
            <td>eat</td>
            <td>ate</td>
            <td>eaten</td>
            <td>ăn</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>57</td>
            <td>fall</td>
            <td>fell</td>
            <td>fallen</td>
            <td>ngã, rơi</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>58</td>
            <td>feed</td>
            <td>fed</td>
            <td>fed</td>
            <td>cho ăn, ăn, nuôi</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>59</td>
            <td>feel</td>
            <td>felt</td>
            <td>felt</td>
            <td>cảm thấy</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>60</td>
            <td>fight</td>
            <td>fought</td>
            <td>fought</td>
            <td>chiến đấu</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>61</td>
            <td>find</td>
            <td>found</td>
            <td>found</td>
            <td>tìm thấy, thấy</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>62</td>
            <td>fit</td>
            <td>fitted / fit</td>
            <td>fitted / fit</td>
            <td>làm cho vừa, làm cho hợp</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>63</td>
            <td>flee</td>
            <td>fled</td>
            <td>fled</td>
            <td>chạy trốn</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>64</td>
            <td>fling</td>
            <td>flung</td>
            <td>flung</td>
            <td>tung, quăng</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>65</td>
            <td>fly</td>
            <td>flew</td>
            <td>flown</td>
            <td>bay</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>66</td>
            <td>forbear</td>
            <td>forbore</td>
            <td>forborne</td>
            <td>nhịn</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>67</td>
            <td>forbid</td>
            <td>forbade / forbad</td>
            <td>forbidden</td>
            <td>cấm, cấm đoán</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>68</td>
            <td>forecast</td>
            <td>forecast / forecasted</td>
            <td>forecast / forecasted</td>
            <td>tiên đoán</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>69</td>
            <td>forego (also forgo)</td>
            <td>forewent</td>
            <td>foregone</td>
            <td>bỏ, kiêng</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>70</td>
            <td>foresee</td>
            <td>foresaw forseen</td>
            <td>thấy</td>
            <td>trước</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>71</td>
            <td>foretell</td>
            <td>foretold</td>
            <td>foretold</td>
            <td>đoán trước</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>72</td>
            <td>forget</td>
            <td>forgot</td>
            <td>forgotten</td>
            <td>quên</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>73</td>
            <td>forgive</td>
            <td>forgave</td>
            <td>forgiven</td>
            <td>tha thứ</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>74</td>
            <td>forsake</td>
            <td>forsook</td>
            <td>forsaken</td>
            <td>ruồng bỏ</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>75</td>
            <td>freeze</td>
            <td>froze</td>
            <td>frozen </td>
            <td>(làm) đông lại</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>76</td>
            <td>frostbite</td>
            <td>frostbit</td>
            <td>frostbitten</td>
            <td>bỏng lạnh</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>77</td>
            <td>get</td>
            <td>got</td>
            <td>got / gotten</td>
            <td>có được</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>78</td>
            <td>gild</td>
            <td>gilt / gilded</td>
            <td>gilt / gilded</td>
            <td>mạ vàng</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>79</td>
            <td>gird</td>
            <td>girt / girded</td>
            <td>girt / girded</td>
            <td>đeo vào</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>80</td>
            <td>give</td>
            <td>gave</td>
            <td>given</td>
            <td>cho</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>81</td>
            <td>go</td>
            <td>went</td>
            <td>gone</td>
            <td>đi</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>82</td>
            <td>grind</td>
            <td>ground</td>
            <td>ground</td>
            <td>nghiền, xay</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>83</td>
            <td>grow</td>
            <td>grew</td>
            <td>grown</td>
            <td>mọc, trồng</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>84</td>
            <td>hand-feed</td>
            <td>hand-fed</td>
            <td>hand-fed</td>
            <td>cho ăn bằng tay</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>85</td>
            <td>handwrite</td>
            <td>handwrote</td>
            <td>handwritten</td>
            <td>viết tay</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>86</td>
            <td>hang</td>
            <td>hung</td>
            <td>hung</td>
            <td>móc lên, treo lên</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>87</td>
            <td>have</td>
            <td>had</td>
            <td>had</td>
            <td>có</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>88</td>
            <td>hear</td>
            <td>heard</td>
            <td>heard</td>
            <td>nghe</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>89</td>
            <td>heave</td>
            <td>hove / heaved</td>
            <td>hove / heaved</td>
            <td>trục lên</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>90</td>
            <td>hew</td>
            <td>hewed</td>
            <td>hewn / hewed</td>
            <td>chặt, đốn</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>91</td>
            <td>hide</td>
            <td>hid</td>
            <td>hidden</td>
            <td>giấu, trốn, nấp</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>92</td>
            <td>hit</td>
            <td>hit</td>
            <td>hit</td>
            <td>đụng</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>93</td>
            <td>hurt</td>
            <td>hurt</td>
            <td>hurt</td>
            <td>làm đau</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>94</td>
            <td>inbreed</td>
            <td>inbred</td>
            <td>inbred</td>
            <td>lai giống cận huyết</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>95</td>
            <td>inlay</td>
            <td>inlaid</td>
            <td>inlaid</td>
            <td>cẩn, khảm</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>96</td>
            <td>input</td>
            <td>input</td>
            <td>input</td>
            <td>đưa vào</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>97</td>
            <td>inset</td>
            <td>inset</td>
            <td>inset</td>
            <td>dát, ghép</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>98</td>
            <td>interbreed</td>
            <td>interbred</td>
            <td>interbred</td>
            <td>giao phối, lai giống</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>99</td>
            <td>interweave</td>
            <td>interwove interweaved</td>
            <td>interwoven interweaved</td>
            <td>trộn lẫn, xen lẫn</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>100</td>
            <td>interwind</td>
            <td>interwound</td>
            <td>interwound</td>
            <td>cuộn vào, quấn vào</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>101</td>
            <td>jerry-build</td>
            <td>jerry-built</td>
            <td></td>
            <td>xây dựng cẩu thả</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>102</td>
            <td>keep</td>
            <td>kept</td>
            <td>kept</td>
            <td>giữ</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>103</td>
            <td>kneel</td>
            <td>knelt / kneeled</td>
            <td>knelt / kneeled</td>
            <td>quỳ</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>104</td>
            <td>knit</td>
            <td>knit / knitted</td>
            <td>knit / knitted</td>
            <td>đan</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>105</td>
            <td>know</td>
            <td>knew</td>
            <td>known</td>
            <td>biết, quen biết</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>106</td>
            <td>lay</td>
            <td>laid</td>
            <td>laid</td>
            <td>đặt, để</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>107</td>
            <td>lead</td>
            <td>led</td>
            <td>led</td>
            <td>dẫn dắt, lãnh đạo</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>108</td>
            <td>lean</td>
            <td>leaned / leant</td>
            <td> leaned / leant</td>
            <td>dựa, tựa</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>109</td>
            <td>leap</td>
            <td>leapt</td>
            <td>leapt</td>
            <td>nhảy, nhảy qua</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>110</td>
            <td>learn</td>
            <td>learnt / learned</td>
            <td>learnt / learned</td>
            <td>học, được biết</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>111</td>
            <td>leave</td>
            <td>left</td>
            <td>left</td>
            <td>ra đi, để lại</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>112</td>
            <td>lend</td>
            <td>lent</td>
            <td>lent</td>
            <td>cho mượn</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>113</td>
            <td>let</td>
            <td>let</td>
            <td>let</td>
            <td>cho phép, để cho</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>114</td>
            <td>lie</td>
            <td>lay</td>
            <td>lain</td>
            <td>nằm</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>115</td>
            <td>light</td>
            <td>lit / lighted</td>
            <td>lit / lighted </td>
            <td>thắp sáng</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>116</td>
            <td>lip-read</td>
            <td>lip-read</td>
            <td>lip-read</td>
            <td>mấp máy môi</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>117</td>
            <td>lose</td>
            <td>lost</td>
            <td>lost</td>
            <td>làm mất, mất</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>118</td>
            <td>make</td>
            <td>made</td>
            <td>made</td>
            <td>chế tạo, sản xuất</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>119</td>
            <td>mean</td>
            <td>meant</td>
            <td>meant</td>
            <td>có nghĩa là</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>120</td>
            <td>meet</td>
            <td>met</td>
            <td>met</td>
            <td>gặp mặt</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>121</td>
            <td>miscast</td>
            <td>miscast</td>
            <td>miscast</td>
            <td>chọn vai đóng không hợp</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>122</td>
            <td>misdeal</td>
            <td>misdealt</td>
            <td>misdealt</td>
            <td>chia lộn bài, chia bài sai</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>123</td>
            <td>misdo</td>
            <td>misdid</td>
            <td>misdone</td>
            <td>phạm lỗi</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>124</td>
            <td>mishear</td>
            <td>misheard</td>
            <td>misheard</td>
            <td>nghe nhầm</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>125</td>
            <td>mislay</td>
            <td>mislaid</td>
            <td>mislaid</td>
            <td>để lạc mất</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>126</td>
            <td>mislead</td>
            <td>misled</td>
            <td>misled</td>
            <td>làm lạc đường</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>127</td>
            <td>mislearn</td>
            <td>mislearned mislearnt</td>
            <td>mislearned mislearnt</td>
            <td>học nhầm</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>128</td>
            <td>misread</td>
            <td>misread</td>
            <td>misread</td>
            <td>đọc sai</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>129</td>
            <td>misset</td>
            <td>misset</td>
            <td>misset</td>
            <td>đặt sai chỗ</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>130</td>
            <td>misspeak</td>
            <td>misspoke</td>
            <td>misspoken</td>
            <td>nói sai</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>131</td>
            <td>misspell</td>
            <td>misspelt</td>
            <td>misspelt</td>
            <td>viết sai chính tả</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>132</td>
            <td>misspend</td>
            <td>misspent</td>
            <td>misspent</td>
            <td>tiêu phí, bỏ phí</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>133</td>
            <td>mistake</td>
            <td>mistook</td>
            <td>mistaken</td>
            <td>phạm lỗi, lầm lẫn</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>134</td>
            <td>misteach</td>
            <td>mistaught</td>
            <td>mistaught</td>
            <td>dạy sai</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>135</td>
            <td>misunderstand</td>
            <td>misunderstood</td>
            <td>misunderstood</td>
            <td>hiểu lầm</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>136</td>
            <td>miswrite</td>
            <td>miswrote</td>
            <td>miswritten</td>
            <td>viết sai</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>137</td>
            <td>mow</td>
            <td>mowed</td>
            <td>mown / mowed</td>
            <td>cắt cỏ</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>138</td>
            <td>offset</td>
            <td>offset</td>
            <td>offset</td>
            <td>đền bù</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>139</td>
            <td>outbid</td>
            <td>outbid</td>
            <td>outbid</td>
            <td>trả hơn giá</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>140</td>
            <td>outbreed</td>
            <td>outbred</td>
            <td>outbred</td>
            <td>giao phối xa</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>141</td>
            <td>outdo</td>
            <td>outdid</td>
            <td>outdone</td>
            <td>làm giỏi hơn</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>142</td>
            <td>outdraw</td>
            <td>outdrew</td>
            <td>outdrawn</td>
            <td>rút súng ra nhanh hơn</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>143</td>
            <td>outdrink</td>
            <td>outdrank</td>
            <td>outdrunk</td>
            <td>uống quá chén</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>144</td>
            <td>outdrive</td>
            <td>outdrove</td>
            <td>outdriven</td>
            <td>lái nhanh hơn</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>145</td>
            <td>outfight</td>
            <td>outfought</td>
            <td>outfought</td>
            <td>đánh giỏi hơn</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>146</td>
            <td>outfly</td>
            <td>outflew</td>
            <td>outflown</td>
            <td>bay cao / xa hơn</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>147</td>
            <td>outgrow</td>
            <td>outgrew</td>
            <td>outgrown</td>
            <td>lớn nhanh hơn</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>148</td>
            <td>outleap</td>
            <td>outleaped / outleapt</td>
            <td>outleaped / outleapt</td>
            <td>nhảy cao, xa hơn</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>149</td>
            <td>outlie</td>
            <td>outlied</td>
            <td>outlied</td>
            <td>nói dối</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>150</td>
            <td>output</td>
            <td>output</td>
            <td>output</td>
            <td>cho ra (dữ kiện)</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>151</td>
            <td>outride</td>
            <td>outrode</td>
            <td>outridden</td>
            <td>cưỡi ngựa giỏi hơn</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>152</td>
            <td>outrun</td>
            <td>outran</td>
            <td>outrun</td>
            <td>chạy nhanh hơn, vượt giá</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>153</td>
            <td>outsell</td>
            <td>outsold</td>
            <td>outsold</td>
            <td>bán nhanh hơn</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>154</td>
            <td>outshine</td>
            <td>outshined / outshone</td>
            <td>outshined / outshone</td>
            <td>sáng hơn, rạng rỡ hơn</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>155</td>
            <td>outshoot</td>
            <td>outshot</td>
            <td>outshot</td>
            <td>bắn giỏi hơn, nảy mầm, mọc</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>156</td>
            <td>outsing</td>
            <td>outsang</td>
            <td>outsung</td>
            <td>hát hay hơn</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>157</td>
            <td>outsit</td>
            <td>outsat</td>
            <td>outsat</td>
            <td>ngồi lâu hơn</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>158</td>
            <td>outsleep</td>
            <td>outslept</td>
            <td>outslept</td>
            <td>ngủ lâu / muộn hơn</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>159</td>
            <td>outsmell</td>
            <td>outsmelled / outsmelt</td>
            <td>outsmelled / outsmelt</td>
            <td>khám phá, đánh hơi, sặc mùi</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>160</td>
            <td>outspeak</td>
            <td>outspoke</td>
            <td>outspoken</td>
            <td>nói nhiều, dài, to hơn</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>161</td>
            <td>outspeed</td>
            <td>outsped</td>
            <td>outsped</td>
            <td>đi, chạy nhanh hơn</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>162</td>
            <td>outspend</td>
            <td>outspent</td>
            <td>outspent</td>
            <td>tiêu tiền nhiều hơn</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>163</td>
            <td>outswear</td>
            <td>outswore</td>
            <td>outsworn</td>
            <td>nguyền rủa nhiều hơn</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>164</td>
            <td>outswim</td>
            <td>outswam</td>
            <td>outswum bơi</td>
            <td>giỏi hơn</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>165</td>
            <td>outthink</td>
            <td>outthought</td>
            <td>outthought</td>
            <td>suy nghĩ nhanh hơn</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>166</td>
            <td>outthrow</td>
            <td>outthrew</td>
            <td>outthrown</td>
            <td>ném nhanh hơn</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>167</td>
            <td>outwrite</td>
            <td>outwrote</td>
            <td>outwritten</td>
            <td>viết nhanh hơn</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>168</td>
            <td>overbid</td>
            <td>overbid</td>
            <td>overbid</td>
            <td>trả giá / bỏ thầu cao hơn</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>169</td>
            <td>overbreed</td>
            <td>overbred</td>
            <td>overbred</td>
            <td>nuôi quá nhiều</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>170</td>
            <td>overbuild</td>
            <td>overbuilt</td>
            <td>overbuilt</td>
            <td>xây quá nhiều</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>171</td>
            <td>overbuy</td>
            <td>overbought</td>
            <td>overbought</td>
            <td>mua quá nhiều</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>172</td>
            <td>overcome</td>
            <td>overcame</td>
            <td>overcome</td>
            <td>khắc phục</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>173</td>
            <td>overdo</td>
            <td>overdid</td>
            <td>overdone</td>
            <td>dùng quá mức, làm quá</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>174</td>
            <td>overdraw</td>
            <td>overdrew</td>
            <td>overdrawn</td>
            <td>rút quá số tiền, phóng đại</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>175</td>
            <td>overdrink</td>
            <td>overdrank</td>
            <td>overdrunk</td>
            <td>uống quá nhiều</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>176</td>
            <td>overeat</td>
            <td>overate</td>
            <td>overeaten</td>
            <td>ăn quá nhiều</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>177</td>
            <td>overfeed</td>
            <td>overfed</td>
            <td>overfed</td>
            <td>cho ăn quá mức</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>178</td>
            <td>overfly</td>
            <td>overflew</td>
            <td>overflown</td>
            <td>bay qua</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>179</td>
            <td>overhang</td>
            <td>overhung</td>
            <td>overhung</td>
            <td>nhô lên trên, treo lơ lửng</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>180</td>
            <td>overhear</td>
            <td>overheard</td>
            <td>overheard</td>
            <td>nghe trộm</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>181</td>
            <td>overlay</td>
            <td>overlaid</td>
            <td>overlaid</td>
            <td>phủ lên</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>182</td>
            <td>overpay</td>
            <td>overpaid</td>
            <td>overpaid</td>
            <td>trả quá tiền</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>183</td>
            <td>override</td>
            <td>overrode</td>
            <td>overridden</td>
            <td>lạm quyền</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>184</td>
            <td>overrun</td>
            <td>overran</td>
            <td>overrun</td>
            <td>tràn ngập</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>185</td>
            <td>oversee</td>
            <td>oversaw</td>
            <td>overseen</td>
            <td>trông nom</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>186</td>
            <td>oversell</td>
            <td>oversold</td>
            <td>oversold</td>
            <td>bán quá mức</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>187</td>
            <td>oversew</td>
            <td>oversewed</td>
            <td>oversewn / oversewed</td>
            <td>may nối vắt</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>188</td>
            <td>overshoot</td>
            <td>overshot</td>
            <td>overshot</td>
            <td>đi quá đích</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>189</td>
            <td>oversleep</td>
            <td>overslept</td>
            <td>overslept</td>
            <td>ngủ quên</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>190</td>
            <td>overspeak</td>
            <td>overspoke</td>
            <td>overspoken</td>
            <td>Nói quá nhiều, nói lấn át</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>191</td>
            <td>overspend</td>
            <td>overspent</td>
            <td>overspent</td>
            <td>tiêu quá lố</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>192</td>
            <td>overspill</td>
            <td>overspilled / overspilt</td>
            <td>overspilled / overspilt</td>
            <td>đổ, làm tràn</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>193</td>
            <td>overtake</td>
            <td>overtook</td>
            <td>overtaken</td>
            <td>đuổi bắt kịp</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>194</td>
            <td>overthink</td>
            <td>overthought</td>
            <td>overthought</td>
            <td>tính trước nhiều quá</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>195</td>
            <td>overthrow</td>
            <td>overthrew</td>
            <td>overthrown</td>
            <td>lật đổ</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>196</td>
            <td>overwind</td>
            <td>overwound</td>
            <td>overwound</td>
            <td>lên dây (đồng hồ) quá chặt</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>197</td>
            <td>overwrite</td>
            <td>overwrote</td>
            <td>overwritten</td>
            <td>viết dài quá, viết đè lên</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>198</td>
            <td>partake</td>
            <td>partook</td>
            <td>partaken</td>
            <td>tham gia, dự phần</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>199</td>
            <td>pay</td>
            <td>paid</td>
            <td>paid</td>
            <td>trả (tiền)</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>200</td>
            <td>plead</td>
            <td>pleaded / pled</td>
            <td>pleaded / pled</td>
            <td> bào chữa, biện hộ</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>201</td>
            <td>prebuild</td>
            <td>prebuilt</td>
            <td>prebuilt</td>
            <td>làm nhà tiền chế</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>202</td>
            <td>predo</td>
            <td>predid</td>
            <td>predone</td>
            <td>làm trước</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>203</td>
            <td>premake</td>
            <td>premade</td>
            <td>premade</td>
            <td>làm trước</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>204</td>
            <td>prepay</td>
            <td>prepaid</td>
            <td>prepaid</td>
            <td>trả trước</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>205</td>
            <td>presell</td>
            <td>presold</td>
            <td>presold</td>
            <td>bán trước thời gian rao báo</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>206</td>
            <td>preset</td>
            <td>preset</td>
            <td>preset</td>
            <td>thiết lập sẵn, cài đặt sẵn</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>207</td>
            <td>preshrink</td>
            <td>preshrank</td>
            <td>preshrunk</td>
            <td>ngâm cho vải co trước khi may</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>208</td>
            <td>proofread</td>
            <td>proofread</td>
            <td>proofread</td>
            <td>Đọc bản thảo trước khi in</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>209</td>
            <td>prove</td>
            <td>proved</td>
            <td>proven / proved</td>
            <td>chứng minh</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>210</td>
            <td>put</td>
            <td>put</td>
            <td>put</td>
            <td>đặt, để</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>211</td>
            <td>quick-freeze</td>
            <td>quick-froze</td>
            <td>quick-frozen</td>
            <td> kết đông nhanh</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>212</td>
            <td>quit</td>
            <td>quit / quitted</td>
            <td>quit / quitted</td>
            <td>bỏ</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>213</td>
            <td>read</td>
            <td>read</td>
            <td>read</td>
            <td>đọc</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>214</td>
            <td>reawake</td>
            <td>reawoke</td>
            <td>reawaken</td>
            <td>đánh thức 1 lần nữa</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>215</td>
            <td>rebid</td>
            <td>rebid</td>
            <td>rebid</td>
            <td>trả giá, bỏ thầu</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>216</td>
            <td>rebind</td>
            <td>rebound</td>
            <td>rebound</td>
            <td>buộc lại, đóng lại</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>217</td>
            <td>rebroadcast</td>
            <td>rebroadcast / rebroadcasted</td>
            <td>rebroadcast / rebroadcasted</td>
            <td>cự tuyệt, khước từ</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>218</td>
            <td>rebuild</td>
            <td>rebuilt</td>
            <td>rebuilt</td>
            <td>xây dựng lại</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>219</td>
            <td>recast</td>
            <td>recast</td>
            <td>recast</td>
            <td>đúc lại</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>220</td>
            <td>recut</td>
            <td>recut</td>
            <td>recut</td>
            <td>(cắt lại, băm)</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>221</td>
            <td>redeal</td>
            <td>redealt</td>
            <td>redealt</td>
            <td>phát bài lại</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>222</td>
            <td>redo</td>
            <td>redid</td>
            <td>redone</td>
            <td>làm lại</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>223</td>
            <td>redraw</td>
            <td>redrew</td>
            <td>redrawn</td>
            <td>kéo ngược lại</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>224</td>
            <td>refit</td>
            <td>refitted / refit</td>
            <td>refitted / refit</td>
            <td>luồn, xỏ</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>225</td>
            <td>regrind</td>
            <td>reground</td>
            <td>reground</td>
            <td>mài sắc lại</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>226</td>
            <td>regrow</td>
            <td>regrew</td>
            <td>regrown</td>
            <td>trồng lại</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>227</td>
            <td>rehang</td>
            <td>rehung</td>
            <td>rehung</td>
            <td>treo lại</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>228</td>
            <td>rehear</td>
            <td>reheard</td>
            <td>reheard</td>
            <td>nghe trình bày lại</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>229</td>
            <td>reknit</td>
            <td>reknitted / reknit</td>
            <td>reknitted / reknit</td>
            <td>đan lại</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>230</td>
            <td>relay</td>
            <td>relaid</td>
            <td>relaid</td>
            <td>đặt lại</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>231</td>
            <td>relay</td>
            <td> relayed</td>
            <td>relayed</td>
            <td>truyền âm lại</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>232</td>
            <td>relearn</td>
            <td>relearned / relearnt</td>
            <td>relearned / relearnt</td>
            <td> học lại</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>233</td>
            <td>relight</td>
            <td>relit / relighted</td>
            <td>relit / relighted</td>
            <td>thắp sáng lại</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>234</td>
            <td>remake</td>
            <td>remade</td>
            <td>remade</td>
            <td>làm lại, chế tạo lại</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>235</td>
            <td>rend</td>
            <td>rent</td>
            <td>rent</td>
            <td>toạc ra, xé</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>236</td>
            <td>repay</td>
            <td>repaid</td>
            <td>repaid</td>
            <td>hoàn tiền lại</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>237</td>
            <td>reread</td>
            <td>reread</td>
            <td>reread</td>
            <td>đọc lại</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>238</td>
            <td>rerun</td>
            <td>reran</td>
            <td>rerun</td>
            <td>chiếu lại, phát lại</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>239</td>
            <td>resell</td>
            <td>resold</td>
            <td>resold</td>
            <td>bán lại</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>240</td>
            <td>resend</td>
            <td>resent</td>
            <td>resent</td>
            <td>gửi lại</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>241</td>
            <td>reset</td>
            <td>reset</td>
            <td>reset</td>
            <td>đặt lại, lắp lại</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>242</td>
            <td>resew</td>
            <td>resewed </td>
            <td>resewn / resewed</td>
            <td> may / khâu lại</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>243</td>
            <td>retake</td>
            <td>retook</td>
            <td>retaken</td>
            <td>chiếm lại,tái chiếm</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>244</td>
            <td>reteach</td>
            <td>retaught</td>
            <td>retaught</td>
            <td>dạy lại</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>245</td>
            <td>retear</td>
            <td>retore</td>
            <td>retorn</td>
            <td>khóc lại</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>246</td>
            <td>retell</td>
            <td>retold</td>
            <td>retold</td>
            <td>kể lại</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>247</td>
            <td>rethink</td>
            <td>rethought</td>
            <td>rethought</td>
            <td>suy tính lại</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>248</td>
            <td>retread</td>
            <td>retread</td>
            <td>retread</td>
            <td>lại giẫm / đạp lên</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>249</td>
            <td>retrofit</td>
            <td>retrofitted / retrofit</td>
            <td> retrofitted / retrofit</td>
            <td> trang bị thêm những bộ phận mới</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>250</td>
            <td>rewake</td>
            <td>rewoke / rewaked</td>
            <td>rewaken / rewaked</td>
            <td> đánh thức lại</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>251</td>
            <td>rewear</td>
            <td>rewore</td>
            <td>reworn</td>
            <td>mặc lại</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>252</td>
            <td>reweave</td>
            <td>rewove / reweaved</td>
            <td>rewoven / reweaved</td>
            <td> dệt lại</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>253</td>
            <td>rewed</td>
            <td>rewed / rewedded</td>
            <td>rewed / rewedded</td>
            <td> kết hôn lại</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>254</td>
            <td>rewet</td>
            <td>rewet / rewetted</td>
            <td>rewet / rewetted</td>
            <td> làm ướt lại</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>255</td>
            <td>rewin</td>
            <td>rewon</td>
            <td>rewon</td>
            <td>thắng lại</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>256</td>
            <td>rewind</td>
            <td>rewound</td>
            <td>rewound</td>
            <td>cuốn lại, lên dây lại</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>257</td>
            <td>rewrite</td>
            <td>rewrote</td>
            <td>rewritten</td>
            <td>viết lại</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>258</td>
            <td>rid</td>
            <td>rid</td>
            <td>rid</td>
            <td>giải thoát</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>259</td>
            <td>ride</td>
            <td>rode</td>
            <td>ridden</td>
            <td>cưỡi</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>260</td>
            <td>ring</td>
            <td>rang</td>
            <td>rung</td>
            <td>rung chuông</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>261</td>
            <td>rise</td>
            <td>rose</td>
            <td>risen</td>
            <td>đứng dậy, mọc</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>262</td>
            <td>roughcast</td>
            <td>roughcast</td>
            <td>roughcast</td>
            <td>tạo hình phỏng chừng</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>263</td>
            <td>run</td>
            <td>ran</td>
            <td>run</td>
            <td>chạy</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>264</td>
            <td>sand-cast</td>
            <td></td>
            <td>sand-cast sand-cast</td>
            <td>đúc bằng khuôn cát</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>265</td>
            <td>saw</td>
            <td>sawed</td>
            <td>sawn</td>
            <td>cưa</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>266</td>
            <td>say</td>
            <td>said</td>
            <td>said</td>
            <td>nói</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>267</td>
            <td>see</td>
            <td>saw</td>
            <td>seen</td>
            <td>nhìn thấy</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>268</td>
            <td>seek</td>
            <td>sought</td>
            <td>sought</td>
            <td>tìm kiếm</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>269</td>
            <td>sell</td>
            <td>sold</td>
            <td>sold</td>
            <td>bán</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>270</td>
            <td>send</td>
            <td>sent</td>
            <td>sent</td>
            <td>gửi</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>271</td>
            <td>set</td>
            <td>set</td>
            <td>set</td>
            <td>đặt, thiết lập</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>272</td>
            <td>sew</td>
            <td>sewed</td>
            <td>sewn / sewed</td>
            <td>may</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>273</td>
            <td>shake</td>
            <td>shook</td>
            <td>shaken</td>
            <td>lay, lắc</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>274</td>
            <td>shave</td>
            <td>shaved</td>
            <td>shaved / shaven</td>
            <td>cạo (râu, mặt)</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>275</td>
            <td>shear</td>
            <td>sheared</td>
            <td>shorn</td>
            <td>xén lông (cừu)</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>276</td>
            <td>shed</td>
            <td>shed</td>
            <td>shed</td>
            <td>rơi, rụng</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>277</td>
            <td>shine</td>
            <td>shone</td>
            <td>shone</td>
            <td>chiếu sáng</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>278</td>
            <td>shit</td>
            <td>shit / shat / shitted</td>
            <td>shit / shat / shitted</td>
            <td>suộc khuộng đi đại tiện</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>279</td>
            <td>shoot</td>
            <td>shot</td>
            <td>shot</td>
            <td>bắn</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>280</td>
            <td>show</td>
            <td>showed</td>
            <td>shown / showed</td>
            <td>cho xem</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>281</td>
            <td>shrink</td>
            <td>shrank</td>
            <td>shrunk</td>
            <td>co rút</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>282</td>
            <td>shut</td>
            <td>shut</td>
            <td>shut</td>
            <td>đóng lại</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>283</td>
            <td>sight-read</td>
            <td> sight-read</td>
            <td>sight-read</td>
            <td>chơi hoặc hát mà không cần nghiên cứu trước</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>284</td>
            <td>sing</td>
            <td>sang</td>
            <td>sung</td>
            <td>ca hát</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>285</td>
            <td>sink</td>
            <td>sank</td>
            <td>sunk</td>
            <td>chìm, lặn</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>286</td>
            <td>sit</td>
            <td>sat</td>
            <td>sat</td>
            <td>ngồi</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>287</td>
            <td>slay</td>
            <td>slew</td>
            <td>slain</td>
            <td>sát hại, giết hại</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>288</td>
            <td>sleep</td>
            <td>slept</td>
            <td>slept</td>
            <td>ngủ</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>289</td>
            <td>slide</td>
            <td>slid</td>
            <td>slid</td>
            <td>trượt, lướt</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>290</td>
            <td>sling</td>
            <td>slung</td>
            <td>slung</td>
            <td>ném mạnh</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>291</td>
            <td>slink</td>
            <td>slunk</td>
            <td>slunk</td>
            <td>lẻn đi</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>292</td>
            <td>slit</td>
            <td>slit</td>
            <td>slit</td>
            <td>rạch, khứa</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>293</td>
            <td>smell</td>
            <td>smelt</td>
            <td>smelt</td>
            <td>ngửi</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>294</td>
            <td>smite</td>
            <td>smote</td>
            <td>smitten</td>
            <td>đập mạnh</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>295</td>
            <td>sneak</td>
            <td>sneaked / snuck</td>
            <td>sneaked / snuck</td>
            <td>trốn, lén</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>296</td>
            <td>speak</td>
            <td>spoke</td>
            <td>spoken</td>
            <td>nói</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>298</td>
            <td>speed</td>
            <td>sped / speeded</td>
            <td>sped / speeded</td>
            <td> chạy vụt</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>299</td>
            <td>spell</td>
            <td>spelt / spelled</td>
            <td>spelt / spelled</td>
            <td> đánh vần</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>300</td>
            <td>spend</td>
            <td>spent</td>
            <td>spent</td>
            <td>tiêu xài</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>301</td>
            <td>spill</td>
            <td>spilt / spilled</td>
            <td>spilt / spilled</td>
            <td> tràn, đổ ra</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>302</td>
            <td>spin</td>
            <td>spun / span</td>
            <td>spun</td>
            <td>quay sợi</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>303</td>
            <td>spoil</td>
            <td>spoilt / spoiled</td>
            <td>spoilt / spoiled</td>
            <td> làm hỏng</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>304</td>
            <td>spread</td>
            <td>spread</td>
            <td>spread</td>
            <td>lan truyền</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>305</td>
            <td>stand</td>
            <td>stood</td>
            <td>stood</td>
            <td>đứng</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>305</td>
            <td>steal</td>
            <td>stole</td>
            <td>stolen</td>
            <td>đánh cắp</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>306</td>
            <td>stick</td>
            <td>stuck</td>
            <td>stuck</td>
            <td>ghim vào, đính</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>307</td>
            <td>sting</td>
            <td>stung</td>
            <td>stung</td>
            <td>châm, chích, đốt</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>308</td>
            <td>stink</td>
            <td>stunk / stank</td>
            <td>stunk</td>
            <td>bốc mùi hôi</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>309</td>
            <td>stride</td>
            <td>strode</td>
            <td>stridden</td>
            <td>bước sải</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>310</td>
            <td>strike</td>
            <td>struck</td>
            <td>struck</td>
            <td>đánh đập</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>311</td>
            <td>string</td>
            <td>strung</td>
            <td>strung</td>
            <td>gắn dây vào</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>312</td>
            <td>sunburn</td>
            <td>sunburned / sunburnt</td>
            <td> sunburned / sunburnt</td>
            <td> cháy nắng</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>313</td>
            <td>swear</td>
            <td>swore</td>
            <td>sworn</td>
            <td>tuyên thệ</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>314</td>
            <td>sweat</td>
            <td>sweat / sweated</td>
            <td>sweat / sweated</td>
            <td> đổ mồ hôi</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>315</td>
            <td>sweep</td>
            <td>swept</td>
            <td>swept</td>
            <td>quét</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>316</td>
            <td>swell</td>
            <td>swelled</td>
            <td>swollen / swelled</td>
            <td> phồng, sưng</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>317</td>
            <td>swim</td>
            <td>swam</td>
            <td>swum</td>
            <td>bơi lội</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>318</td>
            <td>swing</td>
            <td>swung</td>
            <td>swung</td>
            <td>đong đưa</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>319</td>
            <td>take</td>
            <td>took</td>
            <td>taken</td>
            <td>cầm, lấy</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>320</td>
            <td>teach</td>
            <td>taught</td>
            <td>taught</td>
            <td>dạy, giảng dạy</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>321</td>
            <td>tear</td>
            <td>tore</td>
            <td>torn</td>
            <td>xé, rách</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>322</td>
            <td>telecast</td>
            <td>telecast</td>
            <td>telecast</td>
            <td>phát đi bằng truyền hình</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>323</td>
            <td>tell</td>
            <td>told</td>
            <td>told</td>
            <td>kể, bảo</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>324</td>
            <td>think</td>
            <td>thought</td>
            <td>thought</td>
            <td>suy nghĩ</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>325</td>
            <td>throw</td>
            <td>threw</td>
            <td>thrown</td>
            <td>ném,, liệng</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>326</td>
            <td>thrust</td>
            <td>thrust</td>
            <td>thrust</td>
            <td>thọc, nhấn</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>327</td>
            <td>tread</td>
            <td>trod</td>
            <td>trodden / trod</td>
            <td>giẫm, đạp</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>328</td>
            <td>typewrite</td>
            <td>typewrote</td>
            <td>typewritten</td>
            <td>đánh máy</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>329</td>
            <td>unbend</td>
            <td>unbent</td>
            <td>unbent</td>
            <td>làm thẳng lại</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>330</td>
            <td>unbind</td>
            <td>unbound</td>
            <td>unbound</td>
            <td>mở, tháo ra</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>331</td>
            <td>unclothe</td>
            <td>unclothed / unclad</td>
            <td> unclothed / unclad</td>
            <td>cởi áo, lột trần</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>332</td>
            <td>undercut</td>
            <td>undercut</td>
            <td>undercut</td>
            <td>ra giá rẻ hơn</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>333</td>
            <td>underfeed</td>
            <td>underfed</td>
            <td>underfed</td>
            <td>cho ăn đói, thiếu ăn</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>334</td>
            <td>undergo</td>
            <td>underwent</td>
            <td>undergone</td>
            <td>kinh qua</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>335</td>
            <td>underlie</td>
            <td>underlay</td>
            <td>underlain</td>
            <td>nằm dưới</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>336</td>
            <td>understand</td>
            <td>understood</td>
            <td>understood</td>
            <td>hiểu</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>337</td>
            <td>undertake</td>
            <td>undertook</td>
            <td>undertaken</td>
            <td>đảm nhận</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>338</td>
            <td>underwrite</td>
            <td>underwrote</td>
            <td>underwritten</td>
            <td>bảo hiểm</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>339</td>
            <td>undo</td>
            <td>undid</td>
            <td>undone</td>
            <td>tháo ra</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>340</td>
            <td>unfreeze</td>
            <td>unfroze</td>
            <td>unfrozen</td>
            <td>làm tan đông</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>341</td>
            <td>unhang</td>
            <td>unhung</td>
            <td>unhung</td>
            <td>hạ xuống, bỏ xuống</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>342</td>
            <td>unhide</td>
            <td>unhid</td>
            <td>unhidden</td>
            <td>hiển thị, không ẩn</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>343</td>
            <td>unlearn</td>
            <td>unlearned / unlearnt</td>
            <td> unlearned / unlearnt</td>
            <td>gạt bỏ, quên</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>344</td>
            <td>unspin</td>
            <td>unspun</td>
            <td>unspun</td>
            <td>quay ngược</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>345</td>
            <td>unwind</td>
            <td>unwound</td>
            <td>unwound</td>
            <td>tháo ra</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>346</td>
            <td>uphold</td>
            <td>upheld</td>
            <td>upheld</td>
            <td>ủng hộ</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>347</td>
            <td>upset</td>
            <td>upset</td>
            <td>upset</td>
            <td>đánh đổ, lật đổ</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>348</td>
            <td>wake</td>
            <td>woke / waked</td>
            <td>woken / waked</td>
            <td>thức giấc</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>349</td>
            <td>wear</td>
            <td>wore</td>
            <td>worn</td>
            <td>mặc</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>350</td>
            <td>wed</td>
            <td>wed / wedded</td>
            <td>wed / wedded</td>
            <td> kết hôn</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>351</td>
            <td>weep</td>
            <td>wept</td>
            <td>wept</td>
            <td>khóc</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>352</td>
            <td>wet</td>
            <td>wet / wetted</td>
            <td>wet / wetted</td>
            <td> làm ướt</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>353</td>
            <td>win</td>
            <td>won</td>
            <td>won</td>
            <td>thắng, chiến thắng</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>354</td>
            <td>wind</td>
            <td>wound</td>
            <td>wound</td>
            <td>quấn</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>355</td>
            <td>withdraw</td>
            <td>withdrew</td>
            <td>withdrawn</td>
            <td>rút lui</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>356</td>
            <td>withhold</td>
            <td>withheld</td>
            <td>withheld</td>
            <td>từ khước</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>357</td>
            <td>withstand</td>
            <td>withstood</td>
            <td>withstood</td>
            <td>cầm cự</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>358</td>
            <td>work</td>
            <td>worked</td>
            <td>worked</td>
            <td>rèn, nhào nặn đất</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>359</td>
            <td>wring</td>
            <td>wrung</td>
            <td>wrung</td>
            <td>vặn, siết chặt</td>
          </tr>
          <tr className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300">
            <td>360</td>
            <td>write</td>
            <td>wrote</td>
            <td>written</td>
            <td>viết</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default IrregularVerbTable;
