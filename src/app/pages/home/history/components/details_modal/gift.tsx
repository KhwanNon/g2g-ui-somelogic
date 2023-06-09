import React from 'react';
import {View, Text, Modal} from 'react-native';

import RowData from '../row_data';
import Box from '../../../../../../base/components/ui_component/box';
import Row from '../../../../../../base/components/ui_component/row';
import ButtonStyle from '../../../../../../base/components/ui_component/button_style';
import ButtonText from '../../../../../../base/components/ui_component/button_text';

import {
  colorEgg,
  colorRed,
  colorBlue,
  colorGold,
  colorYellow,
  colorDarkGold2,
  colorLightGrey,
  colorTextTitle,
} from '../../../../../../base/color';
import {styles} from '../../style';
import stylesGlobal from '../../../../../../base/styles_global';

type Props = {
  open: boolean;
  setOpen: Function;
};

function GiftModal({open, setOpen}: Props) {
  const textWarning =
    '*หากไม่มีผู้รับของขวัญภายใน 7 วัน \nระบบจะทำการโอน E-Gold กลับอัตโนมัติ';

  function changeColorText(status: string): string {
    let map: any = {
      reject: colorRed,
      pending: colorBlue,
      success: colorYellow,
    };
    return map[status] || colorBlue;
  }

  return (
    <Modal visible={open} transparent={true} animationType="fade">
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#00000060',
        }}>
        <View style={styles.modal}>
          <Row style={stylesGlobal.center}>
            <Text style={{color: colorTextTitle, fontSize: 18}}>
              ผู้ส่งของขวัญ
            </Text>
          </Row>
          <Box h={10} />
          <RowData title={'ชื่อ '} value={'xxxxxxxxxxx'} />
          <RowData title={'นามสกุล'} value={'xxxxxxxxxxx'} />
          <RowData title={'น้ำหนักทองคำ'} value={'1 บาททอง'} />
          <RowData title={'ค่ากำเหน็จ'} value={'000.00 ฿'} />
          <RowData title={'ค่าธรรมเนียมให้บริการ'} value={'000.00 ฿'} />
          <RowData title={'ค่าธรรมเนียมพิเศษ(ลายทอง)'} value={'000.00 ฿'} />
          <RowData title={'ราคาทอง/บาท'} value={'23,500.00 ฿'} />
          <RowData title={'รวม'} value={'23,500.00 ฿'} />
          <RowData title={'วันที่ทำรายการ'} value={'29/06/2022'} />
          <RowData title={'เวลา'} value={'17:30:00'} />
          <RowData title={'รับทองคำผ่านระบบ'} value={'SMS'} />
          <RowData title={'รหัสรับทอง'} value={''} />
          <Row style={stylesGlobal.between}>
            <Text style={{color: colorTextTitle}}>000*******************</Text>
            <ButtonText
              fontSize={14}
              title={'ดูรหัสรับทอง'}
              color={colorDarkGold2}
            />
          </Row>
          <Box h={20} />
          <RowData
            title={'สถานะ'}
            value={'รอดำเนินการ'}
            color={changeColorText('pending')}
          />
          <Row style={[stylesGlobal.between, {alignItems: 'flex-start'}]}>
            <Text style={{color: colorTextTitle, fontSize: 13}}>
              {textWarning}
            </Text>
            <ButtonStyle
              width={90}
              height={30}
              title={'ยกเลิก'}
              colorTxt={colorGold}
              backgroundColor={colorEgg}
            />
          </Row>
          <Box h={30} />
          <Row style={stylesGlobal.center}>
            <ButtonStyle
              width={'40%'}
              height={40}
              title={'ปิด'}
              colorTxt={'black'}
              onTap={() => setOpen(false)}
              backgroundColor={colorLightGrey}
            />
          </Row>
          <Box h={5} />
        </View>
      </View>
    </Modal>
  );
}

export default GiftModal;
